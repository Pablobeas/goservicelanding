import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es GoService?",
      answer: "GoService es una nueva plataforma para que profesionales como tú consigan clientes de forma más sencilla, rápida y directa. Está pensada especialmente para servicios personales como entrenamiento, masajes, clases, nutrición y más."
    },
    {
      question: "¿Cuánto cuesta registrarse?",
      answer: "Nada. El registro anticipado es completamente gratuito y sin compromiso. Queremos que pruebes la plataforma y formes parte de los primeros en ofrecer tus servicios."
    },
    {
      question: "¿Qué ventajas tengo por registrarme ahora?",
      answer: "Tendrás acceso prioritario cuando lancemos la app, visibilidad destacada como profesional fundador/a y podrás ayudarnos a mejorar el producto según tus necesidades."
    },
    {
      question: "¿Qué tipo de servicios puedo ofrecer?",
      answer: "GoService está pensado para cualquier servicio personal: entrenamiento, yoga, fisioterapia, clases particulares, masajes, nutrición, acompañamiento, etc. Si ayudas a personas, tienes cabida aquí."
    },
    {
      question: "¿Cuándo estará disponible la plataforma?",
      answer: "Estamos terminando los preparativos. Si te registras, serás de los primeros en saber cuándo abrimos. Queremos lanzarla con profesionales comprometidos desde el principio."
    },
    {
      question: "¿Estoy obligado a usarla si me registro?",
      answer: "No. El registro anticipado no te obliga a nada. Solo queremos avisarte antes que a nadie y contar contigo si decides probarla."
    }
  ];

  return (
    <div className="text-center py-16 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-md">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-4xl mx-auto px-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/20">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-white/80 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/90 text-base leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;