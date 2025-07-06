import Logo from "@/components/Logo";
import EmailCapture from "@/components/EmailCapture";
import ImageCarousel from "@/components/ImageCarousel";
import QuienesSomos from "@/components/QuienesSomos";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Fixed Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-6 flex justify-center">
          <Logo />
        </div>
      </header>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-400/25 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-teal-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-24 left-10 w-60 h-60 sm:w-80 sm:h-80 bg-green-400/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-300/20 rounded-full blur-2xl"></div>
        </div>

        {/* Modern geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-white/5 rotate-45 rounded-lg"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rotate-12 rounded-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-200/20 rotate-45 rounded-full"></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 pt-40 pb-10 relative z-10">
        {/* Value Proposition */}
        <section className="text-center mb-14 sm:mb-20 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-snug drop-shadow-lg">
            Haz que ofrecer tus servicios<br className="sm:hidden" />
            sea más fácil. Reserva tu sitio.
          </h1>
        </section>

        {/* Email Capture */}
        <section className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-5 drop-shadow-md">
            Únete a nuestra comunidad
          </h2>
          <EmailCapture />
          <p className="text-white/90 mt-5 max-w-md mx-auto text-sm sm:text-base drop-shadow-sm">
            Déjanos tu email y te contactaremos con más información sobre nuestros servicios, además de un regalo especial.
          </p>
        </section>

        {/* Carousel */}
        <section className="animate-fade-in mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-8 drop-shadow-md">
            Así será tu experiencia en GoService
          </h2>
          <ImageCarousel />
        </section>

        {/* Quienes Somos */}
        <QuienesSomos />
      </main>
    </div>
  );
};

export default Index;

