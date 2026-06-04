export default function PortfolioHero({ images }: { images: string[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "12px",
        width: "100%",
        marginBottom: "24px",
      }}
    >
      <img
        src={images[0]}
        alt="Hero 1"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          gridRow: "1 / span 2",
        }}
      />

      <img
        src={images[1]}
        alt="Hero 2"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <img
        src={images[2]}
        alt="Hero 3"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
