import Mux from '@mux/mux-node';
import { NextResponse } from 'next/server';
import getConfig from 'next/config';

// Get server-side runtime config
const { serverRuntimeConfig } = getConfig() || {};

// Debug environment variables (safely)
console.log('Environment Variables Status:', {
  MUX_TOKEN_ID_exists: !!process.env.MUX_TOKEN_ID,
  MUX_TOKEN_ID_length: process.env.MUX_TOKEN_ID?.length,
  MUX_TOKEN_SECRET_exists: !!process.env.MUX_TOKEN_SECRET,
  MUX_TOKEN_SECRET_length: process.env.MUX_TOKEN_SECRET?.length,
  NODE_ENV: process.env.NODE_ENV,
  serverRuntimeConfig_exists: !!serverRuntimeConfig
});

function initializeMuxClient() {
  try {
    const tokenId = process.env.MUX_TOKEN_ID;
    const tokenSecret = process.env.MUX_TOKEN_SECRET;

    console.log('Mux Credentials:', {
      tokenIdExists: !!tokenId,
      tokenSecretExists: !!tokenSecret,
    });

    if (!tokenId || !tokenSecret) {
      throw new Error('Missing Mux credentials.');
    }

    const muxClient = new Mux(tokenId.trim(), tokenSecret.trim());

    if (!muxClient.Video) {
      throw new Error('Mux Video API not initialized.');
    }

    return muxClient;
  } catch (error) {
    console.error('Mux Initialization Error:', error.message);
    throw error;
  }
}


export async function POST(request) {
  try {
    let muxClient;
    
    try {
      muxClient = initializeMuxClient();
      
      // Test if we can access the Assets API
      if (!muxClient.Video?.Assets?.create) {
        throw new Error('Mux Video Assets API is not properly initialized');
      }
      
    } catch (error) {
      return NextResponse.json({
        success: false,
        error: 'Mux initialization failed',
        details: error.message,
        environment: process.env.NODE_ENV,
        tokenStatus: {
          tokenIdExists: !!(serverRuntimeConfig?.MUX_TOKEN_ID || process.env.MUX_TOKEN_ID),
          tokenSecretExists: !!(serverRuntimeConfig?.MUX_TOKEN_SECRET || process.env.MUX_TOKEN_SECRET),
          usingServerConfig: !!serverRuntimeConfig
        }
      }, { status: 500 });
    }

    const { driveUrl } = await request.json();

    if (!driveUrl) {
      return NextResponse.json({
        success: false,
        error: 'No video URL provided'
      }, { status: 400 });
    }

    try {
      console.log('Attempting to create Mux asset...');
      const asset = await muxClient.Video.Assets.create({
        input: driveUrl,
        playback_policy: ['public'],
        mp4_support: 'standard'
      });

      console.log('Asset created successfully:', {
        assetId: asset.id,
        status: asset.status
      });

      let readyAsset = null;
      
      for (let i = 0; i < 10; i++) {
        readyAsset = await muxClient.Video.Assets.get(asset.id);
        console.log(`Asset status check ${i + 1}/10:`, readyAsset.status);
        if (readyAsset.status === 'ready') break;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      if (!readyAsset || readyAsset.status !== 'ready') {
        throw new Error('Asset processing timeout');
      }

      const playbackId = readyAsset.playback_ids[0].id;
      console.log('Asset ready with playback ID:', playbackId);
      
      return NextResponse.json({ 
        success: true, 
        playbackId,
        status: readyAsset.status
      });

    } catch (assetError) {
      console.error('Mux Asset Creation Error:', {
        error: assetError.message,
        type: assetError.name,
        stack: assetError.stack
      });
      throw assetError;
    }

  } catch (error) {
    console.error('Mux Operation Failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      type: error.name
    }, { status: 500 });
  }
} 