"use client";

import { useState } from "react";

interface HorizontalPreviewSliderProps {
    images: string[];
}

export default function HorizontalPreviewSlider({
    images,
}: HorizontalPreviewSliderProps) {
    const [selected, setSelected] = useState(images[0]);

return (
    <div
    style={{
        marginTop: "2rem",
        marginBottom: "2rem",
    }}
    >
      {/* PREVIEW BESAR */}
    <div
        style={{
        marginBottom: "20px",
        }}
    >
        <img
        src={selected}
        alt="Preview"
        style={{
            width: "30%",
            display: "block",
            objectFit: "cover",
        }}
        />
    </div>

      {/* SLIDE HORIZONTAL */}
    <div
        style={{
        display: "flex",
        gap: "16px",
        overflowX: "auto",
        paddingBottom: "10px",
        scrollSnapType: "x mandatory",
        }}
    >
        {images.map((image) => (
        <button
            type="button"
            key={image}
            onClick={() => setSelected(image)}
            style={{
            border:
                selected === image
                ? "2px solid white"
                : "2px solid transparent",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            flex: "0 0 auto",
            scrollSnapAlign: "start",
            }}
        >
            <img
            src={image}
            alt="Thumbnail"
            style={{
                width: "180px",
                height: "320px",
                objectFit: "cover",
                display: "block",
            }}
            />
        </button>
        ))}
    </div>

      {/* PREVIEW KECIL */}
    <div
        style={{
        display: "flex",
        gap: "10px",
        marginTop: "14px",
        overflowX: "auto",
        }}
    >
        {images.map((image) => (
        <button
            type="button"
            key={`${image}-preview`}
            onClick={() => setSelected(image)}
            style={{
            border:
                selected === image
                ? "2px solid white"
                : "2px solid transparent",
            padding: 0,
            background: "transparent",
            cursor: "pointer",
            opacity: selected === image ? 1 : 0.6,
            }}
        >
            <img
            src={image}
            alt="Mini Preview"
            style={{
                width: "60px",
                height: "60px",
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