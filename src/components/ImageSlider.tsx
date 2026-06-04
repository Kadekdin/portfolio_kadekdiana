"use client";

import { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      {/* Gambar utama */}
      <img
        src={images[current]}
        alt="Slider"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />

      {/* Thumbnail bawah */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginTop: "8px",
          overflowX: "auto",
        }}
      >
        {images.map((image) => (
          // <img
          //   key={image}
          //   src={image}
          //   alt="Thumbnail"
          //   onClick={() =>
          //     setCurrent(images.indexOf(image))
          //   }
          //   onKeyDown={(e) => {
          //     if (e.key === "Enter") {
          //       setCurrent(images.indexOf(image));
          //     }
          //   }}
          //   role="button"
          //   tabIndex={0}
          //   style={{
          //     width: "70px",
          //     cursor: "pointer",
          //     border:
          //       current === images.indexOf(image)
          //         ? "2px solid white"
          //         : "1px solid gray",
          //   }}
          // />
          <button
            type="button"
            key={image}
            onClick={() => setCurrent(images.indexOf(image))}
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src={image}
              alt="Thumbnail"
              style={{
                width: "70px",
                border:
                  current === images.indexOf(image)
                    ? "2px solid white"
                    : "1px solid gray",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// slider
// "use client";

// import { useState } from "react";

// interface ImageSliderProps {
//   images: string[];
// }

// export default function ImageSlider({
//   images,
// }: ImageSliderProps) {
//   const [current, setCurrent] = useState(0);

//   const nextImage = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div
//       style={{
//         width: "40%",
//         marginTop: "2rem",
//         marginBottom: "2rem",
//       }}
//     >
//       {/* IMAGE UTAMA */}
//       <div
//         style={{
//           position: "relative",
//         }}
//       >
//         <img
//           src={images[current]}
//           alt="Preview"
//           style={{
//             width: "100%",
//             display: "block",
//             objectFit: "cover",
//           }}
//         />

//         {/* BUTTON KIRI */}
//         <button
//           type="button"
//           onClick={prevImage}
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "10px",
//             transform: "translateY(-50%)",
//             background: "rgba(0,0,0,0.5)",
//             color: "white",
//             border: "none",
//             padding: "8px 12px",
//             borderRadius: "999px",
//             cursor: "pointer",
//             backdropFilter: "blur(4px)",
//           }}
//         >
//           ‹
//         </button>

//         {/* BUTTON KANAN */}
//         <button
//           type="button"
//           onClick={nextImage}
//           style={{
//             position: "absolute",
//             top: "50%",
//             right: "10px",
//             transform: "translateY(-50%)",
//             background: "rgba(0,0,0,0.5)",
//             color: "white",
//             border: "none",
//             padding: "8px 12px",
//             borderRadius: "999px",
//             cursor: "pointer",
//             backdropFilter: "blur(4px)",
//           }}
//         >
//           ›
//         </button>
//       </div>

//       {/* THUMBNAIL PREVIEW */}
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           marginTop: "12px",
//           overflowX: "auto",
//         }}
//       >
//         {images.map((image, index) => (
//           <button
//             type="button"
//             key={image}
//             onClick={() => setCurrent(index)}
//             style={{
//               border:
//                 current === index
//                   ? "2px solid white"
//                   : "2px solid transparent",
//               padding: 0,
//               background: "transparent",
//               cursor: "pointer",
//               opacity: current === index ? 1 : 0.6,
//             }}
//           >
//             <img
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 objectFit: "cover",
//                 display: "block",
//               }}
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------

// image carousel v2 with preview
// "use client";

// import { useState } from "react";

// interface ImageSliderProps {
//   images: string[];
// }

// export default function ImageSlider({ images }: ImageSliderProps) {
//   const [current, setCurrent] = useState(0);

//   const nextImage = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div
//       style={{
//         width: "40%",
//         marginTop: "2rem",
//         marginBottom: "2rem",
//       }}
//     >
//       {/* Gambar utama */}
//       <div
//         style={{
//           position: "relative",
//         }}
//       >
//         <img
//           src={images[current]}
//           alt="Slider"
//           style={{
//             width: "100%",
//             display: "block",
//             objectFit: "cover",
//           }}
//         />

//         {/* Button kiri */}
//         <button
//           type="button"
//           onClick={prevImage}
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "10px",
//             transform: "translateY(-50%)",
//             background: "rgba(0,0,0,0)",
//             color: "white",
//             border: "none",
//             padding: "8px 12px",
//             borderRadius: "999px",
//             cursor: "pointer",
//             backdropFilter: "blur(4px)",
//           }}
//         >
//           ‹
//         </button>

//         {/* Button kanan */}
//         <button
//           type="button"
//           onClick={nextImage}
//           style={{
//             position: "absolute",
//             top: "50%",
//             right: "10px",
//             transform: "translateY(-50%)",
//             background: "rgba(0,0,0,0)",
//             color: "white",
//             border: "none",
//             padding: "8px 12px",
//             borderRadius: "999px",
//             cursor: "pointer",
//             backdropFilter: "blur(4px)",
//           }}
//         >
//           ›
//         </button>
//       </div>

//       {/* Thumbnail preview */}
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           marginTop: "12px",
//           overflowX: "auto",
//         }}
//       >
//         {images.map((image, index) => (
//           <button
//             type="button"
//             key={image}
//             onClick={() => setCurrent(index)}
//             style={{
//               border:
//                 current === index ? "2px solid white" : "2px solid transparent",
//               padding: 0,
//               background: "transparent",
//               cursor: "pointer",
//               opacity: current === index ? 1 : 0.6,
//             }}
//           >
//             <img
//               src={image}
//               alt={`Preview ${index + 1}`}
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 objectFit: "cover",
//                 display: "block",
//               }}
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------

// image slider carousel v1
// "use client";

// import { useState } from "react";

// interface ImageSliderProps {
//   images: string[];
// }

// export default function ImageSlider({ images }: ImageSliderProps) {
//   const [current, setCurrent] = useState(0);

//   const nextImage = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "40%",
//         maxWidth: "700px",
//         marginTop: "2rem",
//         marginBottom: "2rem",
//         marginLeft: "0",
//       }}
//     >
//       <img
//         src={images[current]}
//         alt="Slider"
//         style={{
//           width: "100%",
//           objectFit: "cover",
//           display: "block",
//         }}
//       />

//       <button
//         type="button"
//         onClick={prevImage}
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "10px",
//           transform: "translateY(-50%)",
//           background: "rgba(0,0,0,0)",
//           backdropFilter: "blur(5px)",
//           color: "white",
//           border: "none",
//           borderRadius: "999px",
//           padding: "8px 12px",
//           cursor: "pointer",
//         }}
//       >
//         ‹
//       </button>

//       <button
//         type="button"
//         onClick={nextImage}
//         style={{
//           position: "absolute",
//           top: "50%",
//           right: "10px",
//           transform: "translateY(-50%)",
//           background: "rgba(0, 0, 0, 0)",
//           backdropFilter: "blur(5px)",
//           color: "white",
//           border: "none",
//           borderRadius: "999px",
//           padding: "8px 12px",
//           cursor: "pointer",
//         }}
//       >
//         ›
//       </button>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------
// versi 1 auto slide
// "use client";

// import { useEffect, useState } from "react";

// interface ImageSliderProps {
//   images: string[];
// }

// export default function ImageSlider({ images }: ImageSliderProps) {
//   const [current, setCurrent] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 0);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const nextImage = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "25%",
//         maxWidth: "700px",
//         margin: "2rem auto",
//       }}
//     >
//       <img
//         src={images[current]}
//         alt="Slider"
//         style={{
//           width: "100%",
//           borderRadius: "20px",
//           objectFit: "cover",
//         }}
//       />

//       <button
//         type="button"
//         onClick={prevImage}
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "10px",
//           transform: "translateY(-50%)",
//           background: "rgba(0,0,0,0.5)",
//           color: "white",
//           border: "none",
//           padding: "10px 14px",
//           borderRadius: "999px",
//           cursor: "pointer",
//         }}
//       >
//         ‹
//       </button>

//       <button
//         type="button"
//         onClick={nextImage}
//         style={{
//           position: "absolute",
//           top: "50%",
//           right: "10px",
//           transform: "translateY(-50%)",
//           background: "rgba(0,0,0,0.5)",
//           color: "white",
//           border: "none",
//           padding: "10px 14px",
//           borderRadius: "999px",
//           cursor: "pointer",
//         }}
//       >
//         ›
//       </button>
//     </div>
//   );
// }
