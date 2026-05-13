import { motion } from "motion/react";
import { Award, BookOpenCheck, Medal, FileBadge, GraduationCap } from "lucide-react";

export default function Academics() {
  const credentials = [
    {
      id: 1,
      title: "Licenciatura em Ciências da Educação – Ensino da Língua Francesa",
      institution: "ISCED de Benguela (2019 - 2024)",
      type: "Grau Académico",
      icon: <GraduationCap size={24} />,
      highlight: true
    },
    {
      id: 2,
      title: "Diploma de Honra ao Mérito – Melhor Estudante",
      institution: "ISCED de Benguela (2019 - 2024)",
      type: "Distinção",
      icon: <Medal size={24} />,
      highlight: true
    },

    {
      id: 4,
      title: "Rédiger et publier un article scientifique",
      institution: "FUN / UCAD Dakar / Université de Yaoundé 1 (Em curso)",
      type: "Curso",
      icon: <FileBadge size={24} />,
      highlight: false
    }
  ];

  return (
    <section id="academics" className="py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Texture bg */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-gold-400 font-medium tracking-wider uppercase text-sm mb-4">Currículo</h2>
            <h3 className="font-serif text-4xl mb-6">Secção Académica e Distinções</h3>
            <div className="w-16 h-1 bg-gold-500 mb-8"></div>
            <p className="text-slate-300 leading-relaxed max-w-md mb-8">
              A excelência profissional e o rigor metodológico baseiam-se numa educação formal robusta. Apresento aqui os principais marcos da minha formação universitária e o meu compromisso com o aperfeiçoamento contínuo.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {credentials.map((cred, i) => (
              <motion.div 
                key={cred.id}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-sm border ${
                  cred.highlight 
                    ? 'border-gold-500 bg-white/10 backdrop-blur-sm' 
                    : 'border-white/10 bg-white/5 backdrop-blur-sm'
                }`}
              >
                <div className={`mb-4 inline-block p-3 rounded-full ${
                  cred.highlight ? 'bg-gold-500/20 text-gold-400' : 'bg-white/10 text-white'
                }`}>
                  {cred.icon}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">
                  {cred.type}
                </div>
                <h4 className="font-serif text-xl mb-3 text-slate-100">{cred.title}</h4>
                <p className="text-sm text-slate-400">{cred.institution}</p>
                
                {cred.highlight && (
                  <div className="mt-6 flex items-center text-sm font-medium text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">
                    <Award size={16} className="mr-2" />
                    Certificado Autenticado
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
