
import Logo from "@/components/Logo";
import EmailCapture from "@/components/EmailCapture";
import ImageCarousel from "@/components/ImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-gradient">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Logo Section */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <Logo className="mb-8" />
        </div>

        {/* Value Proposition Section */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Texto para explicar lo que ofrecemos
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            (propuesta de valor)
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Conectamos a profesionales calificados con clientes que necesitan sus servicios. 
            Encuentra expertos certificados cerca de ti para cualquier proyecto.
          </p>
        </div>

        {/* Email Capture Section */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Únete a nuestra comunidad
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Déjanos tu email y te contactaremos con más información sobre nuestros servicios
          </p>
          <EmailCapture />
        </div>

        {/* Image Carousel Section */}
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
            Descubre GoService
          </h2>
          <ImageCarousel />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
