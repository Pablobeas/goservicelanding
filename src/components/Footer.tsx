import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Video, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Logo />
            <p className="text-white/70 text-sm max-w-sm">
              Conectando profesionales del bienestar con quienes buscan mejorar su salud y calidad de vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Video size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contacto y Soporte */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contacto y Soporte</h3>
            <div className="flex items-center space-x-2">
              <span className="text-white/60 text-sm">✉️</span>
              <a href="mailto:goservicecorp@gmail.com" className="text-white/70 hover:text-white transition-colors text-sm">
                goservicecorp@gmail.com
              </a>
            </div>
          </div>

          {/* Envianos tu Feedback */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Envianos tu Feedback</h3>
            <div className="space-y-3">
              <Input 
                placeholder="Tu email (opcional)" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Textarea 
                placeholder="Comparte tus sugerencias, ideas o reporta algún problema..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[80px]"
              />
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                ✈️ Enviar Feedback
              </Button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-white/60">
            <span>© 2025 GoService. Todos los derechos reservados.</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
          <div className="text-sm text-white/60">
            Hecho con 💚 para conectar personas
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;