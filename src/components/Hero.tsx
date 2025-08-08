import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Fam from "@/assets/shope.png";
import heroGroomImage from "@/assets/hero-groom.jpg";
import brideImage from "@/assets/bride.png";


const heroImages = [
  { src: Fam, alt: "Shope" },
  { src: heroGroomImage, alt: "Groom" },
  { src: brideImage, alt: "Bride" }
];

const imagesForSlide = [...heroImages, heroImages[0]]; // duplicate first image at end


const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    let interval;
    if (isTransitioning) {
      interval = setInterval(() => {
        setCurrent((prev) => prev + 1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isTransitioning]);

  useEffect(() => {
    if (current === imagesForSlide.length - 1) {
      // After transition to duplicate, reset to first image instantly (no animation)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
        setTimeout(() => setIsTransitioning(true), 50); // re-enable animation after DOM update
      }, 700); // match transition duration
    }
  }, [current]);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Slide Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex h-full"
          style={{
            width: `${imagesForSlide.length * 100}vw`,
            transform: `translateX(-${current * 100}vw)`,
            transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' : 'none'
          }}
        >
          {imagesForSlide.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="w-screen h-full object-cover"
              draggable={false}
            />
          ))}
        </div>
      </div>
      
      {/* Glassmorphism grid cards overlay: 2x2 grid at bottom for mobile, column at right for desktop */}
      <div className="absolute bottom-10 w-full flex justify-center z-20">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 max-w-xs w-full px-2 md:hidden">
          {/* Card 1 */}
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center">
            <span className="text-base font-bold text-black drop-shadow">BUY 2 GET</span>
            <span className="text-lg font-extrabold text-luxury-gold mt-1">20%</span>
            <span className="text-sm font-semibold text-black mt-1">OFF ON 1</span>
          </div>
          {/* Card 2 */}
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center">
            <span className="text-base font-bold text-black drop-shadow">BUY 4 GET</span>
            <span className="text-lg font-extrabold text-luxury-gold mt-1">25%</span>
            <span className="text-sm font-semibold text-black mt-1">OFF ON 2</span>
          </div>
          {/* Card 3 */}
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center">
            <span className="text-base font-bold text-black drop-shadow">BUY 6 GET</span>
            <span className="text-lg font-extrabold text-luxury-gold mt-1">30%</span>
            <span className="text-sm font-semibold text-black mt-1">OFF ON 3</span>
          </div>
          {/* Card 4 */}
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center">
            <span className="text-base font-bold text-black drop-shadow">BUY 10 GET</span>
            <span className="text-lg font-extrabold text-luxury-gold mt-1">40%</span>
            <span className="text-sm font-semibold text-black mt-1">OFF ON 4</span>
          </div>
        </div>
          <div className="hidden md:flex flex-row gap-8 absolute right-1/2 translate-x-1/2 bottom-1 max-w-3xl w-full px-1 justify-center">
          {/* Card 1 */}
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg p-3 flex flex-col items-center justify-center text-center">
            <span className="text-lg md:text-xl font-bold text-black drop-shadow">BUY 2 GET</span>
            <span className="text-xl md:text-2xl font-extrabold text-luxury-gold mt-1">20%</span>
            <span className="text-base md:text-lg font-semibold text-black mt-1">OFF ON 1</span>
          </div>
          {/* Card 2 */}
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg p-3 flex flex-col items-center justify-center text-center">
            <span className="text-lg md:text-xl font-bold text-black drop-shadow">BUY 4 GET</span>
            <span className="text-xl md:text-2xl font-extrabold text-luxury-gold mt-1">25%</span>
            <span className="text-base md:text-lg font-semibold text-black mt-1">OFF ON 2</span>
          </div>
          {/* Card 3 */}
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg p-3 flex flex-col items-center justify-center text-center">
            <span className="text-lg md:text-xl font-bold text-black drop-shadow">BUY 6 GET</span>
            <span className="text-xl md:text-2xl font-extrabold text-luxury-gold mt-1">30%</span>
            <span className="text-base md:text-lg font-semibold text-black mt-1">OFF ON 3</span>
          </div>
          {/* Card 4 */}
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg p-3 flex flex-col items-center justify-center text-center">
            <span className="text-lg md:text-xl font-bold text-black drop-shadow">BUY 10 GET</span>
            <span className="text-xl md:text-2xl font-extrabold text-luxury-gold mt-1">40%</span>
            <span className="text-base md:text-lg font-semibold text-black mt-1">OFF ON 4</span>
          </div>
        </div>
      </div>


      {/* Scroll indicators */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="flex flex-col space-y-2">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === (current % heroImages.length) ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;