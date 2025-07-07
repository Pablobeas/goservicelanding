import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Logo from "./Logo";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Por favor, escribe tu mensaje antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('feedback')
        .insert({
          email: email.trim() || null,
          message: message.trim()
        });

      if (error) throw error;

      toast({
        title: "¡Feedback enviado!",
        description: "Gracias por tu mensaje. Te contactaremos pronto.",
      });

      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error sending feedback:', error);
      toast({
        title: "Error",
        description: "No se pudo enviar el feedback. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <a href="https://instagram.com/goservicecorp" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@goservicecorp" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/goservicecorp" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
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
            <form onSubmit={handleFeedbackSubmit} className="space-y-3">
              <Input 
                type="email"
                placeholder="Tu email (opcional)" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Textarea 
                placeholder="Comparte tus sugerencias, ideas o reporta algún problema..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[80px]"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "✈️ Enviar Feedback"}
              </Button>
            </form>
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