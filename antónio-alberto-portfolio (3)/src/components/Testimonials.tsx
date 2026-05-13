import { motion } from "motion/react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "A precisão técnica durante as nossas negociações portuárias foi impecável. Uma verdadeira ponte entre a gestão internacional e as operações locais.",
    name: "Direção de Operações",
    role: "Porto do Lobito (AGL/ALT)"
  },
  {
    id: 2,
    quote: "As aulas online transformaram o meu domínio do francês. A metodologia focada na minha área permitiu-me aprofundar os meus estudos em Psicanálise com total confiança.",
    name: "Estudante de Psicanálise",
    role: "Brasil"
  },
  {
    id: 3,
    quote: "Graças às aulas intensivas de francês para objetivos específicos, consegui comunicar-me perfeitamente e destacar-me no meu estágio de Gastronomia em França.",
    name: "Estudante de Gastronomia",
    role: "Brasil (Estágio em França)"
  },
  {
    id: 4,
    quote: "Garantia de rigor e entrega em prazos extremamente curtos nos nossos textos e contratos de tradução técnica. Muito profissional.",
    name: "Coordenação",
    role: "Mundo das Traduções"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark text-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full opacity-[0.03] blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-serif text-4xl mb-4">Reconhecimento</h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A satisfação das instituições e alunos com quem tenho o privilégio de colaborar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-8 rounded-sm relative"
            >
              <Quote size={40} className="text-gold-500/20 absolute top-6 right-6" />
              <p className="text-slate-300 italic mb-8 relative z-10 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <h4 className="font-serif text-gold-400">{testimonial.name}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
