
// import React from "react";

// const VideoSection = () => {
//   return (
//     <section className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden">
//       {/* Background video embedded */}
//       <iframe
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="https://www.youtube.com/embed/uxOb8ZwOhhE?autoplay=1&mute=1&loop=1&playlist=uxOb8ZwOhhE"
//         title="Delivering Excellence Through Expertise and Dedication"
//         frameBorder="0"
//         allow="autoplay; encrypted-media"
//         allowFullScreen
//       />

//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Text on top */}
//       <div className="relative z-10 flex items-center justify-center h-full px-3 sm:px-6 md:px-10">
//         <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-snug sm:leading-tight md:leading-tight">
//           Delivering Excellence Through Expertise and Dedication
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default VideoSection;


import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden">
      {/* Background video embedded */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/uxOb8ZwOhhE?autoplay=1&mute=1&loop=1&playlist=uxOb8ZwOhhE"
        title="Delivering Excellence Through Expertise and Dedication"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text on top */}
      <div
        className="relative z-10 flex items-center justify-center h-full px-3 sm:px-6 md:px-10"
        data-aos="fade-up"
      >
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-snug sm:leading-tight md:leading-tight">
          Delivering Excellence Through Expertise and Dedication
        </h1>
      </div>
    </section>
  );
};

export default VideoSection;
