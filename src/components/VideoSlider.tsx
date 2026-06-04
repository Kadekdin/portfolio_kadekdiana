"use client";

import { useState } from "react";

interface VideoSliderProps {
  videos: string[];
}

export default function VideoSlider({
  videos,
}: VideoSliderProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      {/* VIDEO UTAMA */}
      <video
        key={videos[current]}
        controls
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src={videos[current]}
          type="video/mp4"
        />
      </video>

      {/* THUMBNAIL VIDEO */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "10px",
          overflowX: "auto",
        }}
      >
        {videos.map((video) => (
          <button
            type="button"
            key={video}
            onClick={() =>
              setCurrent(videos.indexOf(video))
            }
            style={{
              border:
                current === videos.indexOf(video)
                  ? "2px solid white"
                  : "1px solid gray",
              padding: 0,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <video
              muted
              playsInline
              style={{
                width: "80px",
                height: "140px",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source
                src={video}
                type="video/mp4"
              />
            </video>
          </button>
        ))}
      </div>
    </div>
  );
}