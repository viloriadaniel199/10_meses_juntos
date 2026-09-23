import { createFileRoute } from "@tanstack/react-router";
import { Heart, MailOpen, Music2, Pause, Play, Sparkles } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { GiftButton } from "@/components/GiftButton";
import photo01 from "@/assets/Screenshot_20260923_134213_Gallery.jpg.asset.json";
import photo02 from "@/assets/Screenshot_20260923_134221_Gallery.jpg.asset.json";
import photo03 from "@/assets/Screenshot_20260923_134254_Gallery.jpg.asset.json";
import photo04 from "@/assets/Screenshot_20260923_134309_Gallery.jpg.asset.json";
import photo05 from "@/assets/Screenshot_20260923_134322_Gallery.jpg.asset.json";
import photo06 from "@/assets/Screenshot_20260923_134401_Gallery.jpg.asset.json";
import photo07 from "@/assets/Screenshot_20260923_134423_Gallery.jpg.asset.json";
import photo08 from "@/assets/Screenshot_20260923_134444_Gallery.jpg.asset.json";
import photo09 from "@/assets/Screenshot_20260923_134502_Gallery.jpg.asset.json";
import photo10 from "@/assets/Screenshot_20260923_134727_Gallery.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "10 meses contigo — Para mi lobita linda" },
      { name: "description", content: "Un regalo hecho con amor para celebrar nuestros diez meses juntos." },
      { property: "og:title", content: "10 meses contigo — Para mi lobita linda" },
      { property: "og:description", content: "Un pequeño mundo hecho de recuerdos, risas y todo mi amor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const photos = [
  { src: photo01.url, caption: "Donde siempre quiero estar", shape: "portrait", tilt: "left" },
  { src: photo02.url, caption: "Besitos que arreglan el mundo", shape: "portrait", tilt: "right" },
  { src: photo03.url, caption: "Compartir la mesa, compartir la vida", shape: "landscape", tilt: "left" },
  { src: photo04.url, caption: "Tu sonrisa, mi lugar favorito", shape: "landscape", tilt: "right" },
  { src: photo05.url, caption: "Todas tus versiones me hacen feliz", shape: "portrait", tilt: "left" },
  { src: photo06.url, caption: "Mi niña hermosa y sus locuras", shape: "portrait", tilt: "right" },
  { src: photo07.url, caption: "La vida sabe más bonito contigo", shape: "landscape", tilt: "left" },
  { src: photo08.url, caption: "Hasta tus caritas serias me encantan", shape: "portrait", tilt: "right" },
  { src: photo09.url, caption: "Sol, mar y nosotros", shape: "landscape", tilt: "left" },
  { src: photo10.url, caption: "Siempre tú, siempre nosotros", shape: "landscape", tilt: "right" },
];

const letter = [
  "Mi vida hoy que cumplimos 10 mesesitos quiero desearte muchisima salud, sabiduría y muchas ganas para salir adelante conmigo miamor. Quiero agradecerte muchisimo por el hombre tan feliz que me haces ser y sobre todo la gran persona que puedo llegar hacer contigo en mi vida. Se que no hemos tenido siempre buenas actitudes y acciones pero es normal tener altas y bajas en una relación sana y comunicativa como nuestra relación. Te amo y te deseo muchisimo y muchisimas gracias por apoyarme siempre cuando se me ocurre algo, gracias por reirte de mis locuras y sobre todo gracias por darme el placer tan grande de ser tu novio, me complace ser tu novio y dar todo lo mejor de mí para hacerte feliz mi chocolatico lindo.",
  "Eres mi cielito lindo, mi mujer, mi princesita, mi niñita chiquita hermosa, mi musa, mi amante, mi mejor amiga y mi priodidad en esta vida, eres todo lo que siempre quise y gracias por brindarme tu tiempo.",
  "Teamo demasiado mi lobita lindaa ❤️.",
];

function Index() {
  const [opened, setOpened] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    if (!opened) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.dataset["visible"] = "true";
        }
      }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [opened]);

  const celebrate = () => {
    setHearts(Array.from({ length: 28 }, (_, index) => index));
    window.setTimeout(() => setHearts([]), 3400);
  };

  if (!opened) {
    return (
      <main className="cover-screen">
        <div className="cover-leaves" aria-hidden="true" />
        <div className="cover-copy animate-fade-in">
          <span className="tiny-kicker">23 · nuestro día</span>
          <div className="moon-seal"><Heart aria-hidden="true" /></div>
          <p className="for-you">Para</p>
          <h1>Mi lobita linda</h1>
          <p className="cover-note">Guardé diez meses de nosotros en este pequeño lugar.</p>
          <GiftButton onClick={() => setOpened(true)}>
            <MailOpen aria-hidden="true" /> Abrir mi regalo
          </GiftButton>
        </div>
        <div className="cover-creatures" aria-hidden="true"><span>🐈</span><span>🦕</span><span>🐺</span></div>
      </main>
    );
  }

  return (
    <main className="gift-page">
      <header className="topbar">
        <a href="#inicio" className="monogram" aria-label="Ir al inicio">D<span>♥</span>L</a>
        <span>10 meses contigo</span>
        <GiftButton kind="icon" onClick={() => setMusicOpen((value) => !value)} aria-label={musicOpen ? "Cerrar nuestra canción" : "Escuchar nuestra canción"} title="Nuestra canción">
          {musicOpen ? <Pause aria-hidden="true" /> : <Music2 aria-hidden="true" />}
        </GiftButton>
      </header>

      {musicOpen && (
        <aside className="music-drawer" aria-label="Nuestra canción">
          <div><Music2 aria-hidden="true" /><span><strong>Nuestra canción</strong>A Pedir Su Mano · Juan Luis Guerra</span></div>
          <a href="https://youtu.be/VQQOemYLu3o" target="_blank" rel="noreferrer"><Play aria-hidden="true" /> Escuchar</a>
        </aside>
      )}

      <section id="inicio" className="hero-section">
        <div className="hero-text" data-reveal>
          <span className="tiny-kicker">Una historia que elijo todos los días</span>
          <h1><em>10</em> meses<br />de nosotros</h1>
          <p>De risas, besos, días bonitos, días difíciles y ese amor que siempre encuentra el camino de vuelta.</p>
          <a href="#recuerdos" className="scroll-note">Baja despacito <span>↓</span></a>
        </div>
        <figure className="hero-photo" data-reveal>
          <span className="tape" aria-hidden="true" />
          <img src={photo04.url} alt="Nosotros sonriendo juntos" />
          <figcaption>Mi lugar favorito es contigo ♡</figcaption>
        </figure>
        <div className="hero-doodle" aria-hidden="true">10<br /><small>mesesitos</small></div>
      </section>

      <section className="promise-band" data-reveal>
        <p>Nos reímos</p><span>✦</span><p>Aprendemos</p><span>✦</span><p>Nos elegimos</p>
      </section>

      <section id="recuerdos" className="memories-section">
        <div className="section-heading" data-reveal>
          <span className="tiny-kicker">Nuestro pequeño universo</span>
          <h2>Diez recuerdos,<br /><em>un solo amor</em></h2>
          <p>Cada foto guarda una versión de nosotros que quiero seguir coleccionando.</p>
        </div>
        <div className="memory-grid">
          {photos.map((photo, index) => (
            <figure className={`memory-card ${photo.shape} tilt-${photo.tilt}`} data-reveal key={photo.src}>
              <span className="photo-number">0{index + 1}</span>
              <img src={photo.src} alt={photo.caption} loading={index > 2 ? "lazy" : "eager"} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="together-section">
        <div className="together-copy" data-reveal>
          <span className="tiny-kicker">Lo verdadero también se construye</span>
          <h2>Incluso cuando<br />no es fácil…</h2>
          <p>Hemos tenido altas y bajas. Nos hemos equivocado. Hemos aprendido a escucharnos, a resolver y a quedarnos.</p>
          <p className="hand-note">Y eso también es amor.</p>
        </div>
        <div className="steps" data-reveal>
          {[["01", "Sentir", "Sin esconder lo que pasa por dentro."], ["02", "Hablar", "Aunque a veces cueste encontrar las palabras."], ["03", "Volver", "A elegirnos con más ternura y más verdad."]].map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </div>
        <div className="secret-friends" data-reveal>
          <GiftButton kind="icon" onClick={celebrate} aria-label="Tocar a la lobita para una sorpresa"><span>🐺</span><small>tu lobita</small></GiftButton>
          <span className="friend-heart">♥</span>
          <GiftButton kind="icon" onClick={celebrate} aria-label="Tocar al dinosaurio para una sorpresa"><span>🦕</span><small>un amor jurásico</small></GiftButton>
          <span className="friend-heart">♥</span>
          <GiftButton kind="icon" onClick={celebrate} aria-label="Tocar al gatito para una sorpresa"><span>🐈</span><small>mimos infinitos</small></GiftButton>
        </div>
      </section>

      <section className="letter-section">
        <div className="letter-intro" data-reveal>
          <Sparkles aria-hidden="true" />
          <span className="tiny-kicker">Escrito desde el corazón</span>
          <h2>Hay algo que<br />quiero decirte</h2>
          <p>Sin filtros, sin adornos. Solo todo lo que siento por ti.</p>
        </div>
        <div className={`envelope-wrap ${letterOpen ? "is-open" : ""}`} data-reveal>
          {!letterOpen ? (
            <div className="envelope">
              <div className="envelope-flap" />
              <div className="wax-seal"><Heart aria-hidden="true" /></div>
              <GiftButton kind="paper" onClick={() => setLetterOpen(true)}><MailOpen aria-hidden="true" /> Abrir mi carta</GiftButton>
            </div>
          ) : (
            <article className="love-letter animate-fade-in">
              <span className="letter-date">Día 23 · Diez meses juntos</span>
              <h3>Mi vida,</h3>
              {letter.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <span className="signature">Siempre tuyo ♡</span>
            </article>
          )}
        </div>
      </section>

      <section className="final-section">
        <div className="final-polaroids" data-reveal>
          <img src={photo01.url} alt="Un beso para mi lobita" />
          <img src={photo09.url} alt="Nosotros juntos en la playa" />
        </div>
        <div className="final-copy" data-reveal>
          <Heart aria-hidden="true" />
          <p>Gracias por estos meses, por tu tiempo, por tu apoyo y por hacerme tan feliz.</p>
          <h2>Te amo demasiado,<br /><em>mi lobita linda.</em></h2>
          <span>Por muchos 23 más.</span>
          <GiftButton onClick={celebrate}><Heart aria-hidden="true" /> Toca aquí, mi amor</GiftButton>
        </div>
      </section>

      <footer>Hecho con todo mi amor · 23 · ♡</footer>
      <div className="heart-rain" aria-hidden="true">
        {hearts.map((heart) => <span key={heart} style={{ "--i": heart } as CSSProperties}>♥</span>)}
      </div>
    </main>
  );
}
