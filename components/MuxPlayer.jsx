"use client";

import MuxPlayerComponent from '@mux/mux-player-react';

export default function MuxPlayer({ playbackId, title }) {
  return (
    <div className="relative aspect-video w-full">
      <MuxPlayerComponent
        streamType="on-demand"
        playbackId={playbackId}
        metadata={{
          video_title: title,
        }}
        autoPlay={false}
        muted={false}
        className="w-full h-full rounded-lg"
      />
    </div>
  );
} 