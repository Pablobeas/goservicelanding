
import Logo from "@/components/Logo";
import EmailCapture from "@/components/EmailCapture";
import ImageCarousel from "@/components/ImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Fixed Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <Logo className="scale-50 transform-gpu" />
        </div>
      </header>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400/25 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-300/20 rounded-full blur-2xl"></div>
        </div>
        
        {/* Modern geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rotate-45 rounded-lg"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rotate-12 rounded-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-emerald-200/20 rotate-45 rounded-full"></div>
      </div>

      {/* Main Content Container with top padding for fixed header */}
      <div className="container mx-auto px-6 pt-32 pb-8 relative z-10">
        {/* Value Proposition Section - Now the main focus */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
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
