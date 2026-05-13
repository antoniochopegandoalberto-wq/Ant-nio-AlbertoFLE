import { motion } from "motion/react";
import { Ship, Globe, GraduationCap, Building2, BookText, FileText, Users } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Professor de Francês",
      company: "ANDAP House College, Benguela",
      icon: <Building2 size={20} />,
      period: "2019 - 2024",
      duration: "6 Anos de Experiência",
      description: "Lecionação de francês geral e metodologia de ensino da língua francesa.",
      type: "Ensino Presencial"
    },
    {
      id: 2,
      title: "Professor Particular de Francês (F.O.S)",
      company: "Estudantes Universitários (Brasil)",
      icon: <Globe size={20} />,
      period: "2022 - 2026",
      duration: "5 Anos de Experiência",
      description: "Lecionação online focada em Francês para Objetivos Específicos (F.O.S) para estudantes de Gastronomia e mestrandos em Psicanálise.",
      type: "Aulas Online"
    },
    {
      id: 3,
      title: "Professor Particular de Francês",
      company: "Porto do Lobito (AGL) / Mundo das Traduções",
      icon: <GraduationCap size={20} />,
      period: "2025 - 2026",
      duration: "2 Anos de Experiência",
      description: "Responsável pela formação em língua francesa da responsável dos Assuntos Jurídicos. Foco em Francês Corporativo e Jurídico.",
      type: "Ensino Corporativo"
    },
    {
      id: 4,
      title: "Intérprete",
      company: "Porto do Lobito (AGL Lobito Terminal) / Mundo das Traduções",
      icon: <Ship size={20} />,
      period: "2025",
      duration: "1 Ano de Experiência",
      description: "Interpretação simultânea em Francês - Português / Português - Francês. Atuação na formação em Segurança Marítima e Portuária.",
      type: "Interpretação"
    },
    {
      id: 5,
      title: "Tradutor de Textos Psicanalíticos",
      company: "Projetos Independentes (Brasil)",
      icon: <FileText size={20} />,
      period: "2020 - 2023",
      duration: "4 Anos de Experiência",
      description: "Traduções rigorosas de textos psicanalíticos (Francês para Português e vice-versa).",
      type: "Tradução"
    },

    {
      id: 7,
      title: "Formador de Bolsas de Estudo e Cursos Internacionais",
      company: "Projeto Independente",
      icon: <Globe size={20} />,
      period: "2020 - 2021",
      duration: "2 Anos de Experiência",
      description: "Orientação e preparação de estudantes para candidaturas a bolsas de estudo e cursos internacionais.",
      type: "Formação & Orientação"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-blue font-serif text-4xl mb-4">Trajetória Profissional</h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Uma linha do tempo marcada pelo ensino da língua francesa, excelência corporativa e tradução técnica.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full border-4 border-slate-50 bg-gold-500 shadow flex items-center justify-center text-white transform -translate-x-1/2 z-10">
                    {exp.icon}
                  </div>

                  {/* Content Box */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 flex ${isEven ? 'md:justify-start' : 'md:justify-end'} px-0 md:px-8`}>
                    <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative w-full lg:max-w-md group">
                      
                      {/* Triangle pointer for desktop */}
                      <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-r border-slate-100 transform ${isEven ? '-left-2 -rotate-[135deg]' : '-right-2 rotate-45'}`}></div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-bold text-gold-500 tracking-wider uppercase bg-gold-50 px-2 py-1 rounded inline-block">
                          {exp.period}
                        </span>
                        {exp.duration && (
                          <span className="text-xs font-bold text-slate-500 tracking-wider uppercase bg-slate-100 px-2 py-1 rounded inline-block">
                            {exp.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-serif text-brand-dark mb-1 group-hover:text-gold-600 transition-colors">{exp.title}</h3>
                      <h4 className="text-sm font-medium text-slate-500 mb-4 flex items-center gap-2">
                        {exp.company}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="inline-block text-xs text-brand-blue bg-blue-50 px-2 py-1 rounded">
                        {exp.type}
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
