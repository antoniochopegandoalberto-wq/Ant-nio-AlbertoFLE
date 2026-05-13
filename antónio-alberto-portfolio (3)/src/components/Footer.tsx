import { NAV_LINKS, PHONE_NUMBER } from "../constants";
import { Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-16 pb-8 text-slate-300 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-4">
              António Chope <span className="text-gold-500">Gando Alberto</span>
            </h3>
            <p className="text-slate-400 max-w-sm mb-6 line-height-relaxed">
              Elevando a excelência da comunicação francófona nos setores educacional e corporativo, promovendo pontes entre Angola e o cenário internacional.
            </p>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
              className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-gold-500 hover:text-brand-dark border border-white/10 hover:border-gold-500 rounded-sm font-medium transition-all text-sm"
            >
              <Phone size={16} /> Fale comigo agora
            </a>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-gold-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Especialidades</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Ensino de Francês (FLE)</li>
              <li>Tradução FR ⇄ PT</li>
              <li>Interpretação Corporativa</li>
              <li>Francês para Objetivos Específicos</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} António Alberto. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Criado com padrão de excelência profissional.</p>
        </div>
      </div>
    </footer>
  );
}
