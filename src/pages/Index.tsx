
import Logo from "@/components/Logo";
import EmailCapture from "@/components/EmailCapture";
import ImageCarousel from "@/components/ImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-300/15 rounded-full blur-2xl"></div>
        </div>
        
        {/* Modern geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rotate-45 rounded-lg"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rotate-12 rounded-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-emerald-200/20 rotate-45 rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <Logo className="mb-8" />
        </div>

        {/* Value Proposition Section */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Haz que ofrecer tus servicios sea más fácil. Reserva tu sitio.
          </h1>
        </div>

        {/* Email Capture Section */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 drop-shadow-md">
            Únete a nuestra comunidad
          </h2>
          <EmailCapture />
          <p className="text-white/90 mt-6 max-w-xl mx-auto drop-shadow-sm">
            Déjanos tu email y te contactaremos con más información sobre nuestros servicios
          </p>
        </div>

        {/* Image Carousel Section */}
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8 drop-shadow-md">
            Descubre GoService
          </h2>
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default Index;
