"use client";

import React from "react";
import Video from 'next-video';

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="relative aspect-video">
          <video
            className="w-full h-full rounded-lg"
            controls
            autoPlay={false}
          >
            <source src="/videos/dummy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
