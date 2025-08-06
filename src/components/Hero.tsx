import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroGroomImage from "@/assets/hero-groom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGroomImage}
          alt="Elegant groom in traditional wear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          
          {/* Category Buttons - moved to bottom right corner vertically */}
          <div className="absolute top-1/2 right-8 z-20 flex flex-col items-end gap-3">
          <Button variant="groom" size="lg" className="min-w-[140px] h-10 text-base transition transform hover:scale-105" >
          FOR US</Button><Button variant="elegant" size="lg" className="min-w-[140px] h-10 text-base transition transform hover:scale-105">
          FOR GROOM</Button><Button variant="elegant"size="lg" className="min-w-[140px] h-10 text-base transition transform hover:scale-105">
          FOR BRIDE</Button>

  
          </div>
        </div>
      </div>
      
      {/* Scroll indicators */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="flex flex-col space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 1 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;