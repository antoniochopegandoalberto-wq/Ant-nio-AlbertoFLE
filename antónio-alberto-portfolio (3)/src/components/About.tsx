import { motion } from "motion/react";
import { BookOpen, Globe2, Ship, Users, Briefcase, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Anos de Experiência", value: "7+" },
    { label: "Alunos Formados", value: "2.500+", subtext: "Angola" },
    { label: "Alunos Internacionais", value: "70+", subtext: "Brasil, França, Portugal" },
    { label: "Projetos", value: "50+", subtext: "Tradução" },
    { label: "Instituições", value: "3+", subtext: "Atendidas" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-brand-blue font-serif text-4xl mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg mb-10">
            Um percurso construído entre a excelência no ensino, o rigor académico e a precisão da comunicação interlinguística em ambientes corporativos e educacionais.
          </p>
          <img 
            src="/images/prof 2.jpg" 
            alt="Professor António" 
            className="w-full h-[400px] object-cover rounded-sm shadow-sm"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif text-brand-dark mb-6">A Ponte Entre o Ensino e o Mundo Corporativo</h3>
            
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              A minha trajetória profissional consolida-se em quatro pilares fundamentais, refletindo um compromisso inabalável com a excelência no ensino da língua francesa, o rigor na mediação linguística e o desenvolvimento de pessoas.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-10">
              <div className="flex flex-col gap-4 group">
                <div className="text-gold-600 bg-gold-50 p-4 rounded-xl w-fit group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <BookOpen strokeWidth={1.5} size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-brand-dark mb-2">Ensino Dinâmico</h4>
                  <p className="text-slate-600 leading-relaxed">Aulas rigorosamente estruturadas de Francês Geral, Francês para Objetivos Específicos (F.O.S) e soluções de e-learning internacional.</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 group">
                <div className="text-gold-600 bg-gold-50 p-4 rounded-xl w-fit group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <Briefcase strokeWidth={1.5} size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-brand-dark mb-2">Setor Corporativo</h4>
                  <p className="text-slate-600 leading-relaxed">Tradução técnica, mediação e formação linguística avançada para organizações e empresas de renome.</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 group">
                <div className="text-gold-600 bg-gold-50 p-4 rounded-xl w-fit group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <Globe2 strokeWidth={1.5} size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-brand-dark mb-2">Experiência Global</h4>
                  <p className="text-slate-600 leading-relaxed">Desenvolvimento de competências e alinhamento estratégico fluído entre os contextos lusófonos e francófonos.</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 group">
                <div className="text-gold-600 bg-gold-50 p-4 rounded-xl w-fit group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <Users strokeWidth={1.5} size={32} />
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-brand-dark mb-2">Liderança</h4>
                  <p className="text-slate-600 leading-relaxed">Coordenação de iniciativas académicas inspiradoras e promoção de um impacto comunitário tangível e duradouro.</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="border-t border-slate-200 pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center xl:text-left flex flex-col">
                  <div className="text-3xl font-serif text-brand-blue font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-700 font-medium uppercase tracking-wider mb-1 leading-tight">{stat.label}</div>
                  {stat.subtext && <div className="text-[10px] text-slate-500 uppercase tracking-widest">{stat.subtext}</div>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
