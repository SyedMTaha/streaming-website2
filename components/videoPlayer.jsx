// 'use client';

// import Mux from '@mux/mux-node';

// // Environment variables should be accessed using process.env.VARIABLE_NAME
// const mux = new Mux({
//   tokenId: process.env.MUX_TOKEN_ID,       // Don't paste actual tokens here
//   tokenSecret: process.env.MUX_TOKEN_SECRET // Don't paste actual tokens here
// });

// // This needs to be inside an async function
// async function createAsset() {
//   try {
//     const asset = await mux.Video.Assets.create({
//       input: [{ url: 'https://muxed.s3.amazonaws.com/leds.mp4' }],
//       playback_policy: ['public'],
//       video_quality: 'basic',
//     });
//     return asset;
//   } catch (error) {
//     console.error('Error creating asset:', error);
//   }
// }