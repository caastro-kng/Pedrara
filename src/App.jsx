import { useEffect, useState } from "react";

const services = [
  ["01", "Cabelo", "Cortes, tratamentos, escova e finalização."],
  ["02", "Cor & Mechas", "Coloração, iluminação e transformações personalizadas."],
  ["03", "Masculino", "Cabelo, barba e cuidados masculinos."],
  ["04", "Sobrancelhas & Epilação", "Detalhes que valorizam expressão e acabamento."],
  ["05", "Maquiagem", "Produções para diferentes momentos e ocasiões."]
];

const gallery = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=85"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="PEDRARA Salon - Início">
          <span>PEDRARA</span>
          <small>SALON</small>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#salao">O Salão</a>
          <a href="#servicos">Serviços</a>
          <a href="#equipe">Equipe</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href="#agendar">Agendar horário</a>

        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#salao" onClick={closeMenu}>O Salão</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#equipe" onClick={closeMenu}>Equipe</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="mobile-menu__cta" href="#agendar" onClick={closeMenu}>Agendar horário</a>
        </nav>
      </div>

      <main>
        <section id="inicio" className="hero">
          <img
            className="hero__image"
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=2200&q=90"
            alt="Ambiente sofisticado de salão de beleza"
          />
          <div className="hero__overlay" />
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">PEDRARA SALON</p>
            <h1>Beleza em movimento.<br /><em>Precisão em cada detalhe.</em></h1>
            <p className="hero__copy">
              Uma experiência de beleza criada para revelar aquilo que torna você único.
            </p>
            <div className="hero__actions">
              <a className="button button--light" href="#agendar">Agendar horário</a>
              <a className="text-link text-link--light" href="#salao">Conhecer a PEDRARA <span>↘</span></a>
            </div>
          </div>
          <div className="hero__scroll">SCROLL TO DISCOVER <span>↓</span></div>
        </section>

        <section id="salao" className="section intro">
          <div className="intro__copy">
            <p className="eyebrow">PEDRARA SALON</p>
            <h2>Cada detalhe revela uma nova versão de você.</h2>
            <p>
              A PEDRARA une técnica, cuidado e personalidade para transformar cada atendimento em uma experiência criada de forma individual.
            </p>
            <p>
              Beleza completa para diferentes estilos, momentos e pessoas — com precisão no processo e leveza no resultado.
            </p>
          </div>
          <div className="intro__visual">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
              alt="Profissional realizando atendimento capilar"
              loading="lazy"
            />
            <div className="intro__stamp">
              <span>FLUXO</span>
              <span>LAPIDADO</span>
            </div>
          </div>
        </section>

        <section id="servicos" className="section services">
          <div className="services__visual">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=88"
              alt="Detalhe de cabelo sendo finalizado"
              loading="lazy"
            />
          </div>
          <div className="services__content">
            <p className="eyebrow">SERVIÇOS</p>
            <h2>Beleza pensada por inteiro.</h2>
            <div className="service-list">
              {services.map(([number, title, description]) => (
                <div className="service-item" key={title}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <b aria-hidden="true">↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement">
          <img
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=2200&q=88"
            alt="Retrato editorial de beleza"
            loading="lazy"
          />
          <div className="statement__overlay" />
          <div className="statement__content">
            <p className="eyebrow eyebrow--light">FLUXO LAPIDADO</p>
            <h2>Precisão que estrutura.<br /><em>Movimento que revela.</em></h2>
          </div>
        </section>

        <section className="section experience">
          <div className="experience__heading">
            <p className="eyebrow">A EXPERIÊNCIA PEDRARA</p>
            <h2>Mais que um atendimento.<br />Uma experiência.</h2>
          </div>
          <div className="experience__grid">
            <article>
              <span>01</span>
              <h3>Escuta</h3>
              <p>Tudo começa entendendo você, sua rotina, seu estilo e o resultado que procura.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Técnica</h3>
              <p>Precisão em cada escolha, processo e execução para um resultado consistente.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Personalidade</h3>
              <p>Resultados criados para combinar com quem você é — nunca para apagar sua identidade.</p>
            </article>
          </div>
        </section>

        <section id="equipe" className="section team">
          <div className="team__heading">
            <p className="eyebrow">EQUIPE</p>
            <h2>As mãos por trás da PEDRARA.</h2>
          </div>
          <div className="team__grid">
            {[
              ["https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=85", "Profissional 01", "Especialidade"],
              ["https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85", "Profissional 02", "Especialidade"],
              ["https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=85", "Profissional 03", "Especialidade"]
            ].map(([image, name, role]) => (
              <article key={name}>
                <img src={image} alt={name} loading="lazy" />
                <div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" className="section gallery">
          <div className="gallery__heading">
            <div>
              <p className="eyebrow">GALERIA</p>
              <h2>Resultados que falam por si.</h2>
            </div>
            <a className="text-link" href="https://www.instagram.com/pedrarasalon/" target="_blank" rel="noreferrer">
              Ver no Instagram <span>↗</span>
            </a>
          </div>
          <div className="gallery__grid">
            {gallery.map((src, index) => (
              <img key={src} src={src} alt={`Referência visual de trabalho PEDRARA ${index + 1}`} loading="lazy" />
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <div>
            <p className="eyebrow">EXPERIÊNCIAS QUE FICAM</p>
            <h2>O cuidado continua depois do espelho.</h2>
          </div>
          <blockquote>
            “Depoimento real de cliente será inserido aqui.”
            <footer>— Cliente PEDRARA</footer>
          </blockquote>
        </section>

        <section id="agendar" className="booking">
          <div>
            <p className="eyebrow eyebrow--light">AGENDE SUA EXPERIÊNCIA</p>
            <h2>Seu próximo momento<br />começa aqui.</h2>
          </div>
          <div className="booking__actions">
            <a className="button button--light" href="#contato">Agendar horário</a>
            <a className="text-link text-link--light" href="#contato">Falar pelo WhatsApp <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer id="contato" className="footer">
        <div className="footer__brand">
          <strong>PEDRARA</strong>
          <span>SALON</span>
        </div>

        <div className="footer__columns">
          <div>
            <h3>Navegação</h3>
            <a href="#salao">O Salão</a>
            <a href="#servicos">Serviços</a>
            <a href="#equipe">Equipe</a>
            <a href="#galeria">Galeria</a>
          </div>
          <div>
            <h3>Contato</h3>
            <span>WhatsApp: adicionar número</span>
            <a href="https://www.instagram.com/pedrarasalon/" target="_blank" rel="noreferrer">@pedrarasalon</a>
            <span>Endereço: adicionar endereço</span>
          </div>
          <div>
            <h3>Horários</h3>
            <span>Adicionar horários de funcionamento</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} PEDRARA Salon</span>
          <span>Precisão que estrutura. Movimento que revela.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
