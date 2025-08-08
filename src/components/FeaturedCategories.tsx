import React from "react";
import { useState } from "react";
import './FeaturedCategories.css';

import img1 from "../assets/DSC_2277-scaled-min.jpg";
import img2 from "../assets/DSC_2330-min-scaled-min.jpg";
import img3 from "../assets/DSC_2351-min-scaled-min.jpg";
import img4 from "../assets/DSC_2362-scaled-min.jpg";
import img5 from "../assets/DSC_2363-scaled-min.jpg";
import img6 from "../assets/IMG_1613-scaled-min.jpg";
import img7 from "../assets/2024-06-11.jpg";
import img8 from "../assets/unnamed (1).jpg";
import img9 from "../assets/DSC_2310-min-scaled-min.jpg";
import img10 from "../assets/DSC_2307-scaled-min.jpg";
import img11 from "../assets/DSC_1560-min-min.jpg";
import img12 from "../assets/DSC_1506-min.jpg";
import img13 from "../assets/drive-download_9-scaled-min.jpg";
import img14 from "../assets/drive-download_5-scaled-min.jpg";

const FeaturedCategories = () => {
  // Duplicate images for seamless infinite scroll
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const ethnicsImages = [img9, img10, img11, img12, img13, img14];
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [modalType, setModalType] = useState<'brands' | 'ethnics'>('brands');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // 300px image + 20px gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (idx: number, type: 'brands' | 'ethnics') => {
    setCurrentIdx(idx);
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const nextImage = () => {
    if (modalType === 'brands') {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    } else {
      setCurrentIdx((prev) => (prev + 1) % ethnicsImages.length);
    }
  };
  const prevImage = () => {
    if (modalType === 'brands') {
      setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setCurrentIdx((prev) => (prev - 1 + ethnicsImages.length) % ethnicsImages.length);
    }
  };

  return (
    <div className="w-full px-0 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Premium Clothing Brands</h2>
      <div className="relative flex items-center" style={{ height: "350px" }}>
        {/* ...existing code for slider and modal... */}
        <button
          className="absolute left-0 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => scroll('left')}
        >
          <span style={{ fontSize: 32 }}>&larr;</span>
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar w-full"
          style={{ height: "350px" }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[300px] h-full flex-shrink-0 flex items-center justify-center cursor-pointer"
              onClick={() => openModal(idx, 'brands')}
            >
              <img
                src={img}
                alt={`img${idx + 1}`}
                className="h-full w-full object-cover rounded-xl border-2 border-border"
                style={{ maxHeight: "350px" }}
              />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => scroll('right')}
        >
          <span style={{ fontSize: 32 }}>&rarr;</span>
        </button>
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute left-8 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={prevImage}
            aria-label="Previous"
          >
            &larr;
          </button>
          <img
            src={modalType === 'brands' ? images[currentIdx] : ethnicsImages[currentIdx]}
            alt={modalType === 'brands' ? `img${currentIdx + 1}` : `ethnic${currentIdx + 1}`}
            className="max-h-[80vh] max-w-[90vw] rounded-xl border-2 border-border shadow-lg"
            style={{ objectFit: 'contain' }}
          />
          <button
            className="absolute right-8 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={nextImage}
            aria-label="Next"
          >
            &rarr;
          </button>
        </div>
      )}

      {/* Ethnics Special Collection Grid */}
      <div className="w-full pt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Ethnics Special Collection</h2>
  <div className="grid grid-cols-2 grid-rows-3 gap-6 w-full">
          {ethnicsImages.map((img, idx) => (
            <div
              key={idx}
              className="w-full aspect-square flex items-center justify-center cursor-pointer xs:aspect-square sm:h-[400px]"
              onClick={() => openModal(idx, 'ethnics')}
            >
              <img
                src={img}
                alt={`ethnic${idx + 1}`}
                className="h-full w-full object-cover rounded-xl border-2 border-border"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default FeaturedCategories;


