import { motion } from "motion/react";
import { ArrowRight, Download, GraduationCap, Languages } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-brand-blue text-slate-100 overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-dark rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gold-500 font-medium tracking-wider uppercase text-sm mb-4"
          >
            Portfólio Profissional
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6"
          >
            António Chope <br />
            <span className="text-gold-400">Gando Alberto</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl lg:text-2xl text-slate-300 font-light mb-8 flex flex-wrap gap-2 items-center"
          >
            <GraduationCap className="w-6 h-6 text-gold-500" /> Professor de Francês
            <span className="hidden md:inline text-gold-500 mx-2">|</span>
            <Languages className="w-6 h-6 text-gold-500" /> Tradutor e Intérprete 
            <span className="text-gold-400 ml-2 font-medium">FR ⇄ PT</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed"
          >
            Alicerçado numa sólida formação académica e experiência prática, dedico-me a construir pontes através da língua e cultura francófona.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#gallery" className="bg-gold-500 hover:bg-gold-400 text-brand-dark px-8 py-3 rounded-sm font-medium transition-all flex items-center gap-2 group">
              Ver Portfólio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#experience" className="border border-slate-600 hover:border-gold-500 hover:text-gold-400 text-slate-300 px-8 py-3 rounded-sm font-medium transition-colors">
              Experiências
            </a>
            <a href="#contact" className="border border-transparent hover:border-slate-600 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-sm font-medium transition-all">
              Contactar
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative block h-[400px] lg:h-[600px] mt-12 lg:mt-0 w-full"
        >
          {/* Main Portrait Placeholder - Would be replaced by actual photo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 to-transparent z-10 rounded-tl-[100px] rounded-br-[100px]"></div>
          <img 
            src="/images/usual.jpg" 
            alt="António Chope Gando Alberto" 
            className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl relative z-0"
            onError={(e) => {
              e.currentTarget.src = "/images/Andap.jpeg"; // Fallback professional image
            }}
          />
          {/* Decorative frame */}
          <div className="absolute -inset-4 border-2 border-gold-500/30 rounded-tl-[110px] rounded-br-[110px] -z-10 translate-x-4 translate-y-4"></div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-4 -left-2 sm:bottom-12 sm:-left-6 lg:-left-12 bg-white text-brand-dark p-4 sm:p-6 rounded-sm shadow-xl z-20 scale-90 sm:scale-100 origin-bottom-left"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gold-500/20 p-3 rounded-full text-gold-600">
                <Languages size={24} />
              </div>
              <div>
                <p className="font-serif font-bold text-2xl">Ensino &</p>
                <p className="text-sm text-slate-500 font-medium">Tradução Técnica</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
