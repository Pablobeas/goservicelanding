
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email requerido",
        description: "Por favor ingresa tu correo electrónico",
        variant: "destructive"
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un correo electrónico válido",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "¡Gracias por suscribirte!",
        description: "Te contactaremos pronto con más información",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 text-base bg-white/95 backdrop-blur-sm border-white/30 focus:border-white focus:ring-white/50 shadow-lg"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 px-8 bg-slate-800 hover:bg-slate-900 text-white font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
        >
          {isSubmitting ? "Enviando..." : "Apúntate"}
        </Button>
      </form>
    </div>
  );
};

export default EmailCapture;
