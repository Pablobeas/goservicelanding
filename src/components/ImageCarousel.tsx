
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/1f9e2cb4-3d87-45d9-ac13-3a77f1676884.png",
      alt: "Buscar profesionales del bienestar",
      title: "Encuentra Profesionales"
    },
    {
      src: "/lovable-uploads/fd0f21c4-356d-4886-9028-95a559ba7631.png",
      alt: "Conversaciones con profesionales",
      title: "Conecta y Comunícate"
    },
    {
      src: "/lovable-uploads/9809d87f-b127-4252-9b30-973fecf1c71d.png",
      alt: "Perfil profesional completo",
      title: "Perfiles Detallados"
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
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm">
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
                className="max-h-72 md:max-h-80 lg:max-h-96 w-auto object-contain mb-6"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center">
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
    </div>
  );
};

export default ImageCarousel;
