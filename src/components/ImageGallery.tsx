"use client";

interface ImageItem {
  src: string;
  width?: number;
  height?: number;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      {images.map((image) => (
        <div key={image.src}>
          <img
            src={image.src}
            alt="Gallery"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}
