import Mux from '@mux/mux-node';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Log environment variables status
    console.log('Environment check:', {
      MUX_TOKEN_ID: process.env.MUX_TOKEN_ID ? 'Present' : 'Missing',
      MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET ? 'Present' : 'Missing'
    });

    // Create Mux instance using the correct pattern
    const muxClient = new Mux(
      process.env.MUX_TOKEN_ID,
      process.env.MUX_TOKEN_SECRET
    );

    // Try to list assets as a test
    const assets = await muxClient.Video.Assets.list();

    return NextResponse.json({
      success: true,
      message: 'Mux SDK initialized successfully',
      assetsCount: assets.length
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      type: error.constructor.name,
      stack: error.stack,
      envStatus: {
        MUX_TOKEN_ID_exists: !!process.env.MUX_TOKEN_ID,
        MUX_TOKEN_SECRET_exists: !!process.env.MUX_TOKEN_SECRET
      }
    }, { status: 500 });
  }
} 