import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, ExternalLink } from "lucide-react";

const CATEGORIES = ["Todos", "Ensino", "Interpretação", "Porto do Lobito", "Certificados"];

const ENSINO_ITEMS = [
  { file: "Aulas online com Emile - Angola - França.jpg", category: "Ensino", title: "Aulas Online França-Angola", desc: "Aulas de francês interativas online com foco em conversação e cultura." },
  { file: "Première Rencontre d'Échanges Méthodologique, Pédagogique, Linguistique et Culturelle entre l'ISCED-Benguela et l'ISCED-Huíla, du 19 au 20 mars à Benguela à l' ,,,-1.jpg", category: "Ensino", title: "Primeiro Encontro de Trocas", desc: "Encontro Metodológico, Pedagógico, Linguístico e Cultural entre o ISCED-Benguela e o ISCED-Huíla." },
  { file: "Atelier sur la chanson.JPG", category: "Ensino", title: "Atelier de Música", desc: "Atelier sobre a música e cultura francófona." },
  { file: "Atelier sur la chanson.jpeg", category: "Ensino", title: "Cultura Francófona", desc: "Explorando a língua francesa através da música." },
  { file: "IMG_2890.jpg", category: "Ensino", title: "Trabalho de Campo", desc: "Acompanhamento e ensino prático de língua francesa." },
  ...[
    "ANdap (2).jpg", "Andap 1.1.jpg", "Andap 1.jpeg", "Andap 3.jpg", 
    "Andap 4.jpg", "Andap 5.jpg", "Andap 6.jpg", "Andap 7.jpg", 
    "Andap 8.jpg", "Andap 9.jpg", "Andap.jpeg", "Andap.jpg", "Anfap 2.jpeg"
  ].map((file, i) => ({
    file, 
    category: "Ensino", 
    title: `Aulas na ANDAP ${i + 1}`, 
    desc: "Aulas dinâmicas e interação contínua no centro de formação ANDAP."
  }))
];

const PORTO_ITEMS = [
  "Porto 1.jpeg", "Porto 2.jpeg", "Porto 3 .jpg", "Porto 4.jpeg", 
  "porto 5.jpeg", "porto 6.jpeg", "porto 7.jpeg", "porto 8.jpeg", 
  "porto 9.jpeg", "porto 10.jpeg", "porto 11.jpeg", "porto 12.jpeg"
].map((file, i) => ({
  file, 
  category: "Porto do Lobito", 
  title: `Operações no Porto ${i + 1}`, 
  desc: "Interpretação e acompanhamento técnico durante as operações logísticas no Porto do Lobito."
}));

const INTERPRETACAO_ITEMS = [
  { file: "Encontro de especialistas.jpg", category: "Interpretação", title: "Encontro de Especialistas", desc: "Tradução simultânea e interpretação técnica em eventos e reuniões de especialistas." }
];

const CERTIFICADOS_ITEMS = [
  {
    file: "Declaração de honra - Melhor estudante.jpg",
    category: "Certificados",
    title: "Declaração de Honra",
    desc: "Reconhecimento por mérito e excelência no percurso académico."
  },
  ...[
    "Licenciatura em ensino da lingua francesa (2).jpg",
    "Licenciatura em ensino da lingua francesa.jpeg",
    "Licenciatura em ensino da lingua francesa.jpg",
    "licenciatura em ensino de lingua francesa.jpeg"
  ].map((file, i) => ({
    file, 
    category: "Certificados", 
    title: `Licenciatura em Ensino ${i + 1}`, 
    desc: "Momentos da defesa e reconhecimento académico na área de Lingua Francesa."
  }))
];

let currentId = 1000;
const ALL_PHOTO_ITEMS = [
  ...ENSINO_ITEMS,
  ...PORTO_ITEMS,
  ...INTERPRETACAO_ITEMS,
  ...CERTIFICADOS_ITEMS
].map(item => ({
  id: currentId++,
  title: item.title,
  category: item.category,
  type: "photo",
  image: `/images/${item.file}`,
  desc: item.desc
}));

const ONLINE_VIDEOS = [
  {
    id: 500,
    title: "Aula / Apresentação",
    category: "Ensino",
    type: "youtube",
    image: "https://www.youtube.com/embed/veMy9unEGk4",
    desc: "Prática e ensino da língua francesa.",
  },
  {
    id: 501,
    title: "Sessão de Interação",
    category: "Ensino",
    type: "youtube",
    image: "https://www.youtube.com/embed/N_WNa3z_mt0",
    desc: "Momento interativo com estudo da língua.",
  },
  {
    id: 502,
    title: "Ensino Dinâmico",
    category: "Ensino",
    type: "youtube",
    image: "https://www.youtube.com/embed/yCoF6tZ8jCk",
    desc: "Abordagem dinâmica na aprendizagem do idioma francófono.",
  },
  {
    id: 503,
    title: "Prática e Conversação",
    category: "Ensino",
    type: "youtube",
    image: "https://www.youtube.com/embed/vkzkZBGvHlg",
    desc: "Exercícios de conversação e desenvolvimento de fluência.",
  },
  {
    id: 504,
    title: "Aula Completa / Conversação",
    category: "Ensino",
    type: "youtube",
    image: "https://www.youtube.com/embed/nuxhbMJzjCI",
    desc: "Mais um momento de partilha e prática intensiva de francês com os nossos alunos.",
  },
  {
    id: 505,
    title: "Shorts - Ensino Rápido 1",
    category: "Ensino",
    type: "youtube",
    image: "https://www.youtube.com/embed/X1dulGVXySk",
    desc: "Destaques curtos das aulas.",
  },
  {
    id: 506,
    title: "Shorts - Ensino Rápido 2",
    category: "Ensino",
    type: "youtube",
    image: "https://www.youtube.com/embed/Pnt9u1f0bsA",
    desc: "Destaques curtos de ensino da língua.",
  },
  {
    id: 507,
    title: "Shorts - Ensino Rápido 3",
    category: "Ensino",
    type: "youtube",
    image: "https://www.youtube.com/embed/GeTEVavvMo8",
    desc: "Dicas pontuais sobre a língua francesa.",
  }
];

const GALLERY_ITEMS = [
  ...ONLINE_VIDEOS,
  ...ALL_PHOTO_ITEMS
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = GALLERY_ITEMS.filter(
    item => activeCategory === "Todos" || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-brand-blue font-serif text-4xl mb-4">Galeria Multimédia</h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Evidências visuais, momentos marcantes e certificados atestando o padrão do meu trabalho.
          </p>
        </motion.div>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? "bg-brand-blue text-white" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-sm overflow-hidden bg-slate-100 aspect-square cursor-pointer"
              >
                {item.type === 'video' ? (
                  <video 
                    src={encodeURI(item.image)} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => {
                      const playPromise = e.currentTarget.play();
                      if (playPromise !== undefined) {
                        playPromise.catch(error => console.log('Video play failed:', error));
                      }
                    }}
                    onMouseOut={(e) => e.currentTarget.pause()}
                  />
                ) : item.type === 'youtube' ? (
                  <iframe 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={item.image} 
                    title={item.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 ${item.type === 'youtube' ? 'pointer-events-none' : ''}`}>
                  <span className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">{item.desc}</p>
                  
                  {item.type !== 'youtube' && (
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-gold-500 hover:text-white transition-colors text-white">
                        <Eye size={18} />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
