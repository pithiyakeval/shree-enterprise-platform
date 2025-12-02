import React from "react";

const sampleImages: string[] = [
  "/images/mandap1.jpg",
  "/images/mandap2.jpg",
  "/images/mandap3.jpg",
  "/images/mandap4.jpg",
  "/images/mandap5.jpg",
];

const MandapGallery: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">
        Mandap Decoration Gallery
      </h1>
      <p className="text-center text-gray-600 mb-12">
        A glimpse of our premium mandap setups crafted for weddings & cultural
        events.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {sampleImages.map((src, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={src}
              alt={`Mandap Design ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MandapGallery;
