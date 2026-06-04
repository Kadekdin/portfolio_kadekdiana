"use client";

import { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({
  images,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        width: "40%",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      {/* IMAGE UTAMA */}
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src={images[current]}
          alt="Preview"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />

        {/* BUTTON KIRI */}
        <button
          type="button"
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "999px",
            cursor: "pointer",
            backdropFilter: "blur(4px)",
          }}
        >
          ‹
        </button>

        {/* BUTTON KANAN */}
        <button
          type="button"
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "999px",
            cursor: "pointer",
            backdropFilter: "blur(4px)",
          }}
        >
          ›
        </button>
      </div>

      {/* THUMBNAIL PREVIEW */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "12px",
          overflowX: "auto",
        }}
      >
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setCurrent(index)}
            style={{
              border:
                current === index
                  ? "2px solid white"
                  : "2px solid transparent",
              padding: 0,
              background: "transparent",
              cursor: "pointer",
              opacity: current === index ? 1 : 0.6,
            }}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}