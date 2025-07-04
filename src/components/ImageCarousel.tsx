
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/723d021a-3ca4-4e9e-ad92-ba123d6ffb6b.png",
      alt: "GoService Logo",
      title: "Nuestra Marca"
    },
    {
      src: "/lovable-uploads/fa51a723-3d0f-4fcd-84c4-e96c00bc615d.png",
      alt: "GoService App Interface",
      title: "Encuentra Profesionales"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? "opacity-100 translate-x-0" 
                : index < currentIndex 
                  ? "opacity-0 -translate-x-full" 
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col items-center justify-center p-8">
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-48 md:max-h-64 w-auto object-contain mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-10 w-10 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-10 w-10 rounded-full backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? "bg-white" 
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
