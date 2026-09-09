import { useEffect, useState } from "react";
import {
  BookOpen,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MapPin,
  MessageCircle,
  PenTool,
  Phone,
  Printer,
  Quote,
  Sparkles,
  X,
} from "lucide-react";

const storage = "/manus-storage/";

const gallery: Array<{ src: string; label: string; cls: string }> = [
  { src: storage + "IMG-20260905-WA0006(1)_5be141b4.webp", label: "Espaços que inspiram", cls: "" },
];

const completedProjects = [
  { src: storage + "IMG-20260905-WA0000_73b4edf4.webp", label: "Projecto realizado 01" },
  { src: storage + "IMG-20260905-WA0001(1)_c83626bf.webp", label: "Projecto realizado 02" },
  { src: storage + "IMG-20260905-WA0004_4c68bbb4.webp", label: "Projecto realizado 03" },
  { src: storage + "IMG-20260905-WA0006(1)_5be141b4.webp", label: "Projecto realizado 04" },
  { src: storage + "IMG-20260905-WA0008_c3d9380b.webp", label: "Projecto realizado 05" },
  { src: storage + "IMG-20260905-WA0009(1)_948191c7.webp", label: "Projecto realizado 06" },
  { src: storage + "IMG-20260905-WA0010_d26e7f05.webp", label: "Projecto realizado 07" },
  { src: storage + "IMG-20260905-WA0013_13c0afd8.webp", label: "Projecto realizado 08" },
  { src: storage + "IMG-20260905-WA0014_d731c6b2.webp", label: "Projecto realizado 09" },
  { src: storage + "IMG-20260905-WA0015_aeaad900.webp", label: "Projecto realizado 10" },
  { src: storage + "IMG-20260905-WA0016_6bc8b504.webp", label: "Projecto realizado 11" },
  { src: storage + "IMG-20260905-WA0021_71ff2f4a.webp", label: "Projecto realizado 13" },
  { src: storage + "IMG-20260905-WA0022_d7bc0234.webp", label: "Projecto realizado 14" },
  { src: storage + "IMG-20260905-WA0023(1)_3dc18ff6.webp", label: "Projecto realizado 15" },
  { src: storage + "IMG-20260905-WA0024(1)_156d8608.webp", label: "Projecto realizado 16" },
  { src: storage + "IMG-20260905-WA0025_b20981e8.webp", label: "Projecto realizado 17" },
  { src: storage + "IMG-20260905-WA0030_d4d13de6.webp", label: "Projecto realizado 18" },
  { src: storage + "IMG-20260905-WA0031(1)_b8218648.webp", label: "Projecto realizado 19" },
  { src: storage + "IMG-20260905-WA0032_c8594e73.webp", label: "Projecto realizado 20" },
];

const graphicServices = [
  "Criação de arte e identidade visual",
  "Impressão, fotocópia e fotografia",
  "Lona, vinil, flyer, banner e pista de dança",
  "Agendas, cadernos e blocos de nota",
  "Cartões de visita, PVC e carimbos",
  "Camisolas, sublimação total e coletes",
  "Letras 3D, acrílico e PVC",
  "Quadros digitais e decorativos",
  "Convites, pulseiras e brindes personalizados",
  "Roll-up, balcão, tenda e backdrop",
  "Troféus, medalhas e bandeiras",
  "Placas e painéis luminosos",
];

const editorialServices = [
  "Criação de capas profissionais",
  "Registro ISBN e depósito legal",
  "Revisão profissional",
  "Diagramação e paginação",
  "Marketing editorial",
  "Impressão de livros — pólen e offset",
  "Distribuição e publicação",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [podcastOpen, setPodcastOpen] = useState(false);
  const [podcastNotice, setPodcastNotice] = useState(true);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setPodcastNotice(false), 7000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ef] text-[#191919]">
      <div className="topline"><span>Luanda · Angola</span><span>Qualidade em primeiro lugar.</span></div>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f4ef]/90 backdrop-blur-xl">
        <div className="container flex h-[78px] items-center justify-between gap-6">
          <a href="#inicio" aria-label="Criartes — início" className="brand-lockup">
            <img src={storage + "criartes-logo-transparent_d46c760b.png"} alt="Criartes Gráfica e Editora" className="h-12 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {[['A Criartes','sobre'],['Preços','precos'],['Editora','editora'],['Gráfica','grafica'],['Portfólio','portfolio']].map(([label, id]) => <a key={id} href={'#'+id} className="nav-link">{label}</a>)}
          </nav>
          <a href="https://wa.me/244948595707" target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#c41224] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[#a80f1e] sm:inline-flex">Fale connosco</a>
          <button aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="rounded-full border border-black/10 p-3 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {menuOpen && <div className="border-t border-black/10 bg-[#f7f4ef] px-6 py-5 lg:hidden"><div className="container flex flex-col gap-4">{[['A Criartes','sobre'],['Preços','precos'],['Editora','editora'],['Gráfica','grafica'],['Portfólio','portfolio'],['Contactos','contactos']].map(([label,id]) => <a key={id} href={'#'+id} onClick={closeMenu} className="text-lg font-semibold">{label}</a>)}</div></div>}
      </header>

      <section id="inicio" className="hero-section">
        <img className="hero-background" src={storage + "hero-criartes_a58dba9b.webp"} alt="Equipa da Criartes no espaço editorial" aria-hidden="true" fetchPriority="high" decoding="async" />
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Gráfica · Editora · Comunicação</div>
            <h1>Ideias que<br /><em>ganham forma.</em></h1>
            <p className="hero-lede">Da primeira palavra à última impressão, damos corpo às ideias de autores, empresas e instituições.</p>
            <div className="flex flex-wrap gap-3 pt-5"><button className="primary-btn" onClick={() => scrollTo("editora")}>Conheça a nossa editora</button><button className="text-btn" onClick={() => scrollTo("portfolio")}>Ver portfólio</button></div>
            <div className="hero-proof"><p><strong>Produção com propósito</strong><br />Cada projecto merece ser bem feito.</p></div>
          </div>
          <div className="hero-art">
            <div className="hero-ring ring-one" /><div className="hero-ring ring-two" />
            <div className="hero-photo-wrap"><img src={storage + "IMG-20260905-WA0022_de35d38f.jpg"} alt="Livro editado e produzido pela Criartes" /></div>
            <div className="floating-tag tag-top"><span>01</span><strong>Editorial</strong><small>Do manuscrito ao livro</small></div>
            <div className="floating-tag tag-bottom"><Sparkles className="h-4 w-4 text-[#d49a21]" /><span>Qualidade<br /><strong>em primeiro lugar.</strong></span></div>
          </div>
        </div>
        <div className="hero-marquee"><span>CRIARTES</span><span>EDIÇÃO</span><span>IMPRESSÃO</span><span>COMUNICAÇÃO</span><span>CRIARTES</span><span>EDIÇÃO</span></div>
      </section>

      <section id="precos" className="price-highlight"><div className="container"><div className="price-card"><div className="price-copy"><div className="section-kicker light">Oferta em destaque</div><h2>Impressão de livros<br /><em>a partir de 3.900 Kz.</em></h2><p>Escolha o papel ideal para a sua obra: Offset económico ou Pólen premium. Consulte a tabela completa e fale directamente com a nossa equipa.</p><a className="package-btn" href={storage + "pacote-impressao_7fb0e0e3.pdf"} target="_blank" rel="noreferrer">Ver pacote de impressão <span>PDF</span></a></div><div className="price-image-wrap"><img src={storage + "pacote-impressao_c6609076.png"} alt="Tabela de preços alinhada para impressão de livros Criartes" /></div></div></div></section>

      <section id="sobre" className="section-pad bg-[#f7f4ef]"><div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="section-kicker">01 / A nossa essência</div><h2 className="display-title">Mais do que imprimir.<br /><span>Dar vida.</span></h2></div><div className="max-w-2xl"><p className="large-copy">Na Criartes, transformamos ideias em realidade com soluções completas de alta qualidade em edição, impressão, comunicação e marketing.</p><p className="body-copy mt-5">Embora cubramos todo o espectro gráfico e visual da sua marca, a nossa grande vocação e especialidade é a Editora. Apoiamos autores, académicos e instituições a dar vida aos seus livros — com cuidado, método e visão.</p><button className="inline-link mt-8" onClick={() => scrollTo("contactos")}>Fale sobre o seu projecto</button></div></div></section>

      <section id="editora" className="editorial-section section-pad"><div className="container"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div><div className="section-kicker light">02 / Especialidade</div><h2 className="display-title light-title">A sua história<br /><em>merece um livro.</em></h2><p className="light-copy mt-6 max-w-md">Acompanhamos cada etapa do processo literário, do conceito à distribuição. Técnica e sensibilidade no mesmo lugar.</p><a href="mailto:geral@editoraCriartes.com" className="outline-btn mt-9">Começar um projecto</a></div><div className="editorial-list">{editorialServices.map((service, index) => <div className="editorial-item" key={service}><span>0{index + 1}</span><p>{service}</p><Check className="h-4 w-4 text-[#d49a21]" /></div>)}</div></div></div></section>

      <section id="grafica" className="section-pad bg-[#efeae1]"><div className="container"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="section-kicker">03 / Soluções</div><h2 className="display-title">Tudo o que a sua<br /><span>marca precisa.</span></h2></div><p className="max-w-sm body-copy">Do pequeno formato ao grande impacto. Produzimos materiais que fazem a sua marca ser vista, lembrada e escolhida.</p></div><div className="service-grid">{graphicServices.map((service, index) => <div className="service-card" key={service}><span className="service-number">{String(index + 1).padStart(2,'0')}</span><h3>{service}</h3><ChevronDown className="h-4 w-4 text-[#c41224] transition group-hover:rotate-[-90deg]" /></div>)}</div></div></section>

      <section id="portfolio" className="section-pad bg-[#191919] text-white"><div className="container"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="section-kicker light">04 / Feito na Criartes</div><h2 className="display-title light-title">Projectos que<br /><em>falam por si.</em></h2></div><p className="max-w-sm light-copy">Um olhar sobre trabalhos que ganharam forma nas nossas mãos.</p></div><div className="gallery-grid">{gallery.map((item) => <figure className={'gallery-item '+item.cls} key={item.src} onClick={() => setSelectedProject(item.src)}><img src={item.src} alt={item.label} loading="lazy" /><figcaption><span>{item.label}</span></figcaption></figure>)}</div><button type="button" className="projects-toggle" onClick={() => setProjectsOpen((open) => !open)}>{projectsOpen ? "Fechar projectos" : "Ver projectos já feitos"}<span>{projectsOpen ? "−" : "+"}</span></button>{projectsOpen && <div className="projects-expanded">{completedProjects.map((item) => <button type="button" className="project-thumb" key={item.src} aria-label={`Abrir ${item.label}`} onClick={(event) => { event.stopPropagation(); setSelectedProject(item.src); }}><img src={item.src} alt={item.label} loading="eager" decoding="async" /><span>{item.label}</span></button>)}</div>}</div></section>

      <section className="testimonials-section"><div className="container"><div className="section-kicker">Clientes satisfeitos</div><h2 className="display-title">A qualidade que os<br /><span>clientes reconhecem.</span></h2><div className="testimonials-grid"><article className="testimonial-card"><img src={storage + "IMG-20260908-WA0028_0c2ba396.jpg"} alt="Mensagem de cliente sobre o lançamento de uma obra" loading="lazy" /><div><strong>Imã Mambu</strong><p>“Os consumidores apreciaram muito a qualidade de impressão das obras.”</p><small>Feedback sobre lançamento editorial</small></div></article><article className="testimonial-card"><img src={storage + "IMG-20260908-WA0029_6ca020b0.jpg"} alt="Mensagem de Wilson sobre a qualidade da impressão" loading="lazy" /><div><strong>Wilson</strong><p>“A qualidade da sua impressão conseguiu reflectir a cor real que estava no design. Meus parabéns e obrigado pelo profissionalismo.”</p><small>Feedback sobre capa e impressão</small></div></article></div></div></section>

{selectedProject && <div className="project-lightbox" role="dialog" aria-modal="true" aria-label="Projecto ampliado" onClick={() => setSelectedProject(null)}><button className="lightbox-close" onClick={() => setSelectedProject(null)} aria-label="Fechar">×</button><img src={selectedProject} alt="Projecto realizado Criartes" onClick={(event) => event.stopPropagation()} /></div>}
      <section id="contactos" className="contact-section section-pad"><div className="container"><div className="contact-panel"><div><div className="section-kicker light">05 / Vamos conversar</div><h2 className="display-title light-title">Tem uma ideia?<br /><em>Vamos criar.</em></h2><p className="light-copy mt-6 max-w-md">Conte-nos o que imagina. A nossa equipa está pronta para transformar o seu projecto numa peça que se destaca.</p></div><div className="contact-details"><a href="https://wa.me/244948595707" target="_blank" rel="noreferrer"><MessageCircle /> <span><small>WhatsApp / Telefone</small>948 595 707</span></a><a href="mailto:geral@editoraCriartes.com"><Mail /> <span><small>E-mail</small>geral@editoraCriartes.com</span></a><div className="contact-address"><MapPin /> <span><small>Onde estamos</small>Luanda — Angola,<br />Bairro Prenda, Estrada da Samba,<br />junto à passadeira da Sunset</span></div></div></div></div></section>

      <footer className="footer"><div className="container flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between"><div><img src={storage + "criartes-logo-transparent_d46c760b.png"} alt="Criartes" className="h-14 w-auto brightness-0 invert" /><p className="mt-4 text-sm text-white/55">Gráfica e Editora · Qualidade em primeiro lugar.</p><div className="social-links" aria-label="Redes sociais"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></div></div><div className="flex flex-wrap gap-5 text-sm text-white/60"><a href="#sobre">A Criartes</a><a href="#editora">Editora</a><a href="#grafica">Gráfica</a><a href="#portfolio">Portfólio</a></div><p className="text-xs text-white/35">© {new Date().getFullYear()} Criartes. Todos os direitos reservados.</p></div></footer>
      <a className="whatsapp-float" href="https://wa.me/244948595707?text=Olá%20Criartes,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços." target="_blank" rel="noreferrer" aria-label="Falar com a Criartes pelo WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.84c0 2.09.55 4.13 1.6 5.93L.14 24l6.38-1.67a11.85 11.85 0 0 0 5.56 1.42h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.41-8.43ZM12.09 21.72h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.86 9.86 0 0 1-1.51-5.22C2.19 6.4 6.62 1.97 12.08 1.97c2.65 0 5.14 1.03 7.01 2.9a9.85 9.85 0 0 1 2.91 7.03c0 5.46-4.44 9.82-9.91 9.82Zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.3 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg><span>WhatsApp</span></a>
      {podcastNotice && <button className="podcast-notice" type="button" onClick={() => { setPodcastNotice(false); setPodcastOpen(true); }}><img src={storage + "podcast-logo_cd8df1b4.jpg"} alt="Podcast Criartes" /><span><small>Brevemente</small>Podcast Criartes</span></button>}
      {podcastOpen && <div className="podcast-modal" role="dialog" aria-modal="true" aria-label="Podcast Criartes" onClick={() => setPodcastOpen(false)}><div className="podcast-panel" onClick={(event) => event.stopPropagation()}><button type="button" className="podcast-close" aria-label="Fechar" onClick={() => setPodcastOpen(false)}>×</button><img className="podcast-logo" src={storage + "podcast-logo_cd8df1b4.jpg"} alt="Podcast Criartes — Contar a sua história" /><div className="podcast-content"><div className="section-kicker">Com apresentação de</div><h2>Jornalista e Orador<br /><span>José Caculo</span></h2><p className="podcast-lead">POD'S <strong>CONTAR A TUA HISTÓRIA, AQUI!</strong></p><p>Tens uma história de vida única, superação, talento ou uma trajetória que pode inspirar Angola e o mundo? A Criartes vai dar voz à tua vivência, de forma totalmente gratuita.</p><p>Os vencedores ganham a produção completa do seu livro e exemplares de oferta.</p><div className="podcast-columns"><div><strong>Quem pode participar?</strong><p>Cantores e artistas · Escritores e autores · Jogadores e desportistas · Pastores e líderes · Qualquer pessoa com uma vivência transformadora.</p></div><div><strong>Como participar?</strong><p>Escreve a tua história resumidamente ou grava um vídeo curto e envia directamente pelo WhatsApp.</p></div></div><a className="primary-btn" href="https://wa.me/244948595707?text=Olá%20Criartes,%20quero%20contar%20a%20minha%20história%20no%20podcast." target="_blank" rel="noreferrer">Enviar a minha história</a></div><img className="podcast-host" src={storage + "jose-caculo_68170481.jpg"} alt="José Caculo" /></div></div>}
      
    </main>
  );
}
