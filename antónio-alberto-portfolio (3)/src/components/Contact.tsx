import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Facebook, Phone } from "lucide-react";
import { PHONE_NUMBER, EMAIL_ADDRESS, LINKEDIN_URL, FACEBOOK_URL } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30"></div>

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-blue font-serif text-4xl mb-4">Vamos Trabalhar Juntos?</h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Disponível para oportunidades em ensino, tradução técnica e interpretação. Contacte-me para orçamentos e propostas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <motion.a 
            href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-100 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:border-gold-300 transition-all group"
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
              <Phone size={32} />
            </div>
            <h3 className="font-serif text-xl text-brand-dark mb-2">Telefone</h3>
            <p className="text-slate-500 text-sm">{PHONE_NUMBER}</p>
          </motion.a>

          <motion.a 
            href={`mailto:${EMAIL_ADDRESS}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-100 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:border-gold-300 transition-all group"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail size={32} />
            </div>
            <h3 className="font-serif text-xl text-brand-dark mb-2">E-mail</h3>
            <p className="text-slate-500 text-sm">{EMAIL_ADDRESS}</p>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-100 rounded-sm"
          >
            <div className="w-16 h-16 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-xl text-brand-dark mb-2">Localização</h3>
            <p className="text-slate-500 text-sm">Benguela, Angola</p>
          </motion.div>

        </div>

        {/* Social Links Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center gap-6"
        >
          <a href={LINKEDIN_URL} className="text-slate-400 hover:text-brand-blue transition-colors p-3 bg-slate-50 rounded-full hover:bg-slate-200">
            <Linkedin size={24} />
          </a>
          <a href={FACEBOOK_URL} className="text-slate-400 hover:text-brand-blue transition-colors p-3 bg-slate-50 rounded-full hover:bg-slate-200">
            <Facebook size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
