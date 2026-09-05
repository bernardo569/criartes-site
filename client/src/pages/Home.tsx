import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
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

const gallery = [
  { src: storage + "IMG-20260905-WA0022_de35d38f.jpg", label: "Capas e edição editorial", cls: "md:col-span-2 md:row-span-2" },
  { src: storage + "IMG-20260905-WA0006_75d9d40f.jpg", label: "Autor em destaque", cls: "md:row-span-2" },
  { src: storage + "IMG-20260905-WA0070_0c786028.jpg", label: "Colecções e poesia", cls: "" },
  { src: storage + "IMG-20260905-WA0056_c68196c9.jpg", label: "Espaços que inspiram", cls: "" },
  { src: storage + "IMG-20260905-WA0024_f2efd145.jpg", label: "Publicações institucionais", cls: "md:col-span-2" },
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
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ef] text-[#191919]">
      <div className="topline"><span>Luanda · Angola</span><span>Qualidade em primeiro lugar.</span></div>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f4ef]/90 backdrop-blur-xl">
        <div className="container flex h-[78px] items-center justify-between gap-6">
          <a href="#inicio" aria-label="Criartes — início" className="brand-lockup">
            <img src={storage + "criartes-logo-transparent_d46c760b.png"} alt="Criartes Gráfica e Editora" className="h-12 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {[['A Criartes','sobre'],['Editora','editora'],['Gráfica','grafica'],['Portfólio','portfolio']].map(([label, id]) => <a key={id} href={'#'+id} className="nav-link">{label}</a>)}
          </nav>
          <a href="https://wa.me/244955646006" target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#c41224] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[#a80f1e] sm:inline-flex">Fale connosco <ArrowUpRight className="ml-2 h-4 w-4" /></a>
          <button aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="rounded-full border border-black/10 p-3 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {menuOpen && <div className="border-t border-black/10 bg-[#f7f4ef] px-6 py-5 lg:hidden"><div className="container flex flex-col gap-4">{[['A Criartes','sobre'],['Editora','editora'],['Gráfica','grafica'],['Portfólio','portfolio'],['Contactos','contactos']].map(([label,id]) => <a key={id} href={'#'+id} onClick={closeMenu} className="text-lg font-semibold">{label}</a>)}</div></div>}
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Gráfica · Editora · Comunicação</div>
            <h1>Ideias que<br /><em>ganham forma.</em></h1>
            <p className="hero-lede">Da primeira palavra à última impressão, damos corpo às ideias de autores, empresas e instituições.</p>
            <div className="flex flex-wrap gap-3 pt-5"><button className="primary-btn" onClick={() => scrollTo("editora")}>Conheça a nossa editora <ArrowUpRight className="h-4 w-4" /></button><button className="text-btn" onClick={() => scrollTo("portfolio")}>Ver portfólio <span>↓</span></button></div>
            <div className="hero-proof"><div className="avatar-stack"><span>✦</span><span>●</span><span>✎</span></div><p><strong>Produção com propósito</strong><br />Cada projecto merece ser bem feito.</p></div>
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

      <section id="sobre" className="section-pad bg-[#f7f4ef]"><div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="section-kicker">01 / A nossa essência</div><h2 className="display-title">Mais do que imprimir.<br /><span>Dar vida.</span></h2></div><div className="max-w-2xl"><p className="large-copy">Na Criartes, transformamos ideias em realidade com soluções completas de alta qualidade em edição, impressão, comunicação e marketing.</p><p className="body-copy mt-5">Embora cubramos todo o espectro gráfico e visual da sua marca, a nossa grande vocação e especialidade é a Editora. Apoiamos autores, académicos e instituições a dar vida aos seus livros — com cuidado, método e visão.</p><button className="inline-link mt-8" onClick={() => scrollTo("contactos")}>Fale sobre o seu projecto <ArrowUpRight className="h-4 w-4" /></button></div></div></section>

      <section id="editora" className="editorial-section section-pad"><div className="container"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div><div className="section-kicker light">02 / Especialidade</div><h2 className="display-title light-title">A sua história<br /><em>merece um livro.</em></h2><p className="light-copy mt-6 max-w-md">Acompanhamos cada etapa do processo literário, do conceito à distribuição. Técnica e sensibilidade no mesmo lugar.</p><a href="mailto:Criartesquadrodigital@gmail.com" className="outline-btn mt-9">Começar um projecto <ArrowUpRight className="h-4 w-4" /></a></div><div className="editorial-list">{editorialServices.map((service, index) => <div className="editorial-item" key={service}><span>0{index + 1}</span><p>{service}</p><Check className="h-4 w-4 text-[#d49a21]" /></div>)}</div></div></div></section>

      <section id="grafica" className="section-pad bg-[#efeae1]"><div className="container"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="section-kicker">03 / Soluções</div><h2 className="display-title">Tudo o que a sua<br /><span>marca precisa.</span></h2></div><p className="max-w-sm body-copy">Do pequeno formato ao grande impacto. Produzimos materiais que fazem a sua marca ser vista, lembrada e escolhida.</p></div><div className="service-grid">{graphicServices.map((service, index) => <div className="service-card" key={service}><span className="service-number">{String(index + 1).padStart(2,'0')}</span><h3>{service}</h3><ChevronDown className="h-4 w-4 text-[#c41224] transition group-hover:rotate-[-90deg]" /></div>)}</div></div></section>

      <section id="portfolio" className="section-pad bg-[#191919] text-white"><div className="container"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="section-kicker light">04 / Feito na Criartes</div><h2 className="display-title light-title">Projectos que<br /><em>falam por si.</em></h2></div><p className="max-w-sm light-copy">Um olhar sobre trabalhos que ganharam forma nas nossas mãos.</p></div><div className="gallery-grid">{gallery.map((item) => <figure className={'gallery-item '+item.cls} key={item.src}><img src={item.src} alt={item.label} /><figcaption><span>{item.label}</span><ArrowUpRight className="h-4 w-4" /></figcaption></figure>)}</div></div></section>

      <section className="quote-section"><div className="container grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center"><Quote className="h-14 w-14 text-[#c41224]" /><blockquote>“O próximo livro<br /><em>pode ser o seu.</em>”<cite>— O compromisso Criartes</cite></blockquote></div></section>

      <section id="contactos" className="contact-section section-pad"><div className="container"><div className="contact-panel"><div><div className="section-kicker light">05 / Vamos conversar</div><h2 className="display-title light-title">Tem uma ideia?<br /><em>Vamos criar.</em></h2><p className="light-copy mt-6 max-w-md">Conte-nos o que imagina. A nossa equipa está pronta para transformar o seu projecto numa peça que se destaca.</p></div><div className="contact-details"><a href="https://wa.me/244955646006" target="_blank" rel="noreferrer"><MessageCircle /> <span><small>WhatsApp / Telefone</small>955 646 006 · 948 595 707</span><ArrowUpRight /></a><a href="mailto:Criartesquadrodigital@gmail.com"><Mail /> <span><small>E-mail</small>Criartesquadrodigital@gmail.com</span><ArrowUpRight /></a><div className="contact-address"><MapPin /> <span><small>Onde estamos</small>Bairro Prenda, lado oposto da Samba,<br />defronte à Suave — Luanda</span></div></div></div></div></section>

      <footer className="footer"><div className="container flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between"><div><img src={storage + "criartes-logo-transparent_d46c760b.png"} alt="Criartes" className="h-14 w-auto brightness-0 invert" /><p className="mt-4 text-sm text-white/55">Gráfica e Editora · Qualidade em primeiro lugar.</p></div><div className="flex flex-wrap gap-5 text-sm text-white/60"><a href="#sobre">A Criartes</a><a href="#editora">Editora</a><a href="#grafica">Gráfica</a><a href="#portfolio">Portfólio</a></div><p className="text-xs text-white/35">© {new Date().getFullYear()} Criartes. Todos os direitos reservados.</p></div></footer>
    </main>
  );
}
