import { motion } from "motion/react";
import { 
  Megaphone,
  MonitorPlay,
  HeartHandshake,
  Speech,
  GraduationCap,
  Languages,
  Wrench,
  LineChart,
  Bot
} from "lucide-react";

const SKILLS = [
  { name: "Ensino de Francês (Geral & F.O.S)", icon: <GraduationCap size={32} /> },
  { name: "Tradução (FR ⇄ PT)", icon: <Languages size={32} /> },
  { name: "Liderança", icon: <HeartHandshake size={32} /> },
  { name: "Criação de Conteúdos Digitais", icon: <MonitorPlay size={32} /> },
  { name: "Inteligências Artificiais e Canva", icon: <Bot size={32} /> },
  { name: "Comunicação Efetiva e Empatia", icon: <Speech size={32} /> },
  { name: "Resolução de Problemas", icon: <Wrench size={32} /> },
  { name: "Gestão de Tempo e Adaptabilidade", icon: <LineChart size={32} /> },
];

export default function Skills() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-blue font-serif text-4xl mb-4">Competências</h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Mais do que o domínio do idioma, possuo um leque de habilidades técnicas e interpessoais cruciais para contextos institucionais exigentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, borderColor: '#d4af37' }}
              className="bg-white border border-slate-100 p-6 sm:p-8 rounded-sm shadow-sm flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className="text-slate-400 group-hover:text-gold-500 transition-colors mb-4">
                {skill.icon}
              </div>
              <h3 className="text-sm sm:text-base font-medium text-brand-dark group-hover:text-brand-blue transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
