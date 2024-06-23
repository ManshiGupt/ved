'use client'
// // import React, { useState } from 'react';
// // import Image from 'next/image';

// // interface Slide {
// //   image: string;
// //   text: string;
// // }

// // const slides: Slide[] = [
// //   { image: '/slide1.jpg', text: 'Pooja ' },
// //   { image: '/slide2.jpeg', text: 'Mantra' },
// //   { image: '/slide3.jpg', text: 'Guru Satsang katha' },
// //   { image: '/images/slide4.jpg', text: 'Pooja smargrih' },
// //   { image: '/images/slide5.jpg', text: 'Panchang' },
// // ];

// // const ImageSlider: React.FC = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const goToNextSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
// //   };

// //   const goToPrevSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
// //   };

// //   return (
// //     <div className="relative w-full">
// //       <div className="relative h-64 md:h-96 lg:h-[36rem] w-full">
// //         {slides.map((slide, index) => (
// //           <div
// //             key={index}
// //             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
// //           >
// //             <Image src={slide.image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
// //             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg md:text-2xl">
// //               {slide.text}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <button
// //         onClick={goToPrevSlide}
// //         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
// //       >
// //         &lt;
// //       </button>
// //       <button
// //         onClick={goToNextSlide}
// //         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
// //       >
// //         &gt;
// //       </button>
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
// //         {slides.map((_, index) => (
// //           <div
// //             key={index}
// //             className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
// //             onClick={() => setCurrentIndex(index)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageSlider;

// import React, { useState } from 'react';
// import Image from 'next/image';

// interface Slide {
//   image: string;
//   text: string;
// }

// const slides: Slide[] = [
//   { image: '/slide1.jpg', text: 'Pooja ' },
//   { image: '/slide2.jpeg', text: 'Mantra' },
//   { image: '/slide3.jpg', text: 'Guru Satsang katha' },
//   { image: '/images/slide4.jpg', text: 'Pooja smargrih' },
//   { image: '/slide5.jpg', text: 'Panchang' },
// ];

// const ImageSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-full">
//       <div className="relative h-64 md:h-96 lg:h-[36rem] w-full overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//           >
//             <Image src={slide.image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className="animate-zoomIn" />
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg md:text-2xl">
//               {slide.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={goToPrevSlide}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={goToNextSlide}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
//       >
//         &gt;
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  { image: '/slide1.jpg', text: 'Pooja ' },
  { image: '/slide2.jpeg', text: 'Mantra' },
  { image: '/slide3.jpg', text: 'Guru Satsang katha' },
  { image: '/images/slide4.jpg', text: 'Pooja smargrih' },
  { image: '/slide5.jpg', text: 'Panchang' },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* h-96 md:h-96 lg:h-[36rem] */}
      <div className="relative h-[36rem] md:h-96 lg:h-[36rem] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="animate-zoomIn"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg md:text-2xl">
              {slide.text}
            </div>
          </div>
        ))}
      </div>
     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

 {/* <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &gt;
      </button> */}