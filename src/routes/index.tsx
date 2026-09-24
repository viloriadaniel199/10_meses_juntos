import { createFileRoute } from "@tanstack/react-router";
import { Heart, MailOpen, Music2, Pause, Play, Sparkles } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { GiftButton } from "@/components/GiftButton";
import { FloatingHearts } from "@/components/FloatingHearts";
import { LoveSlider } from "@/components/LoveSlider";
import { StoryCreature } from "@/components/StoryCreature";
import { useLenis } from "@/hooks/useLenis";
import { useScrollReveal } from "@/hooks/useScrollReveal";
// Image paths served from /public/images/ — no Lovable asset server needed
const IMG = {
  photo01: "/images/Screenshot_20260923_134213_Gallery.jpg",
  photo02: "/images/Screenshot_20260923_134221_Gallery.jpg",
  photo03: "/images/Screenshot_20260923_134254_Gallery.jpg",
  photo04: "/images/Screenshot_20260923_134309_Gallery.jpg",
  photo05: "/images/Screenshot_20260923_134322_Gallery.jpg",
  photo06: "/images/Screenshot_20260923_134401_Gallery.jpg",
  photo07: "/images/Screenshot_20260923_134423_Gallery.jpg",
  photo08: "/images/Screenshot_20260923_134444_Gallery.jpg",
  photo09: "/images/Screenshot_20260923_134502_Gallery.jpg",
  photo10: "/images/Screenshot_20260923_134727_Gallery.jpg",
} as const;

// Fallback shown when an image fails to load
const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23fdf2f8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='72' fill='%23e8a4c8'%3E%E2%99%A5%3C/text%3E%3C/svg%3E";

function handleImgError(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (img.src !== PLACEHOLDER_SVG) img.src = PLACEHOLDER_SVG;
}

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
  { src: IMG.photo01, caption: "Donde siempre quiero estar",          shape: "portrait",  tilt: "left",  alt: "Los dos juntos, donde siempre quiero estar" },
  { src: IMG.photo02, caption: "Besitos que arreglan el mundo",         shape: "portrait",  tilt: "right", alt: "Un besito tuyo que me arregla el mundo entero" },
  { src: IMG.photo03, caption: "Compartir la mesa, compartir la vida",  shape: "landscape", tilt: "left",  alt: "Compartiendo la mesa y la vida juntos" },
  { src: IMG.photo04, caption: "Tu sonrisa, mi lugar favorito",         shape: "landscape", tilt: "right", alt: "Tu sonrisa, el lugar más bonito del mundo para mí" },
  { src: IMG.photo05, caption: "Todas tus versiones me hacen feliz",    shape: "portrait",  tilt: "left",  alt: "Todas las versiones de ti me hacen inmensamente feliz" },
  { src: IMG.photo06, caption: "Mi niña hermosa y sus locuras",         shape: "portrait",  tilt: "right", alt: "Mi niña hermosa con todas sus locuras que adoro" },
  { src: IMG.photo07, caption: "La vida sabe más bonito contigo",       shape: "landscape", tilt: "left",  alt: "La vida sabe más bonita cuando estamos juntos" },
  { src: IMG.photo08, caption: "Hasta tus caritas serias me encantan",  shape: "portrait",  tilt: "right", alt: "Hasta tus caritas serias me enamoran más cada día" },
  { src: IMG.photo09, caption: "Sol, mar y nosotros",                   shape: "landscape", tilt: "left",  alt: "Nosotros dos bajo el sol junto al mar" },
  { src: IMG.photo10, caption: "Siempre tú, siempre nosotros",          shape: "landscape", tilt: "right", alt: "Siempre tú, siempre nosotros dos" },
];

const letter = [
  "Mi vida hoy que cumplimos 10 mesesitos quiero desearte muchisima salud, sabiduría y muchas ganas para salir adelante conmigo miamor. Quiero agradecerte muchisimo por el hombre tan feliz que me haces ser y sobre todo la gran persona que puedo llegar hacer contigo en mi vida. Se que no hemos tenido siempre buenas actitudes y acciones pero es normal tener altas y bajas en una relación sana y comunicativa como nuestra relación. Te amo y te deseo muchisimo y muchisimas gracias por apoyarme siempre cuando se me ocurre algo, gracias por reirte de mis locuras y sobre todo gracias por darme el placer tan grande de ser tu novio, me complace ser tu novio y dar todo lo mejor de mí para hacerte feliz mi chocolatico lindo.",
  "Eres mi cielito lindo, mi mujer, mi princesita, mi niñita chiquita hermosa, mi musa, mi amante, mi mejor amiga y mi priodidad en esta vida, eres todo lo que siempre quise y gracias por brindarme tu tiempo.",
  "Teamo demasiado mi lobita lindaa ❤️.",
];

function Index() {
  const lenis = useLenis();
  const [opened, setOpened] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [greeting, setGreeting] = useState("Este momento es solo para nosotros");
  const [activeCreature, setActiveCreature] = useState<string | null>(null);
  const [secretTaps, setSecretTaps] = useState(0);
  const [celebrating, setCelebrating] = useState(false);

  useScrollReveal(lenis, opened);

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Buenos días, mi amor" : hour < 18 ? "Esta tarde es solo para nosotros" : "Buenas noches, mi lobita");
  }, []);

  useEffect(() => {
    if (!opened) return;
    const updateProgress = () => {
      const root = document.documentElement;
      const distance = root.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(1, window.scrollY / distance) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [opened]);

  const celebrate = () => {
    if (celebrating) return;
    setCelebrating(true);
    setHearts(Array.from({ length: 28 }, (_, index) => index));
    if (navigator.vibrate) navigator.vibrate(35);
    window.setTimeout(() => {
      setHearts([]);
      setCelebrating(false);
    }, 3800);
  };

  const meetFriend = (friend: string) => {
    setActiveCreature(friend);
    celebrate();
    window.setTimeout(() => setActiveCreature(null), 1400);
  };

  const revealSecret = () => {
    const next = secretTaps + 1;
    setSecretTaps(next);
    if (next === 3) celebrate();
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
        <div className="cover-creatures" aria-hidden="true">
          <StoryCreature kind="cat" /><StoryCreature kind="dinosaur" /><StoryCreature kind="wolf" />
        </div>
      </main>
    );
  }

  return (
    <main className="gift-page">
      <FloatingHearts />
      <div className="story-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <header className="topbar">
        <a href="#inicio" className="monogram" aria-label="Ir al inicio" onClick={revealSecret} title="Nuestro pequeño secreto">D<span>♥</span>A</a>
        <span>10 meses contigo</span>
        <GiftButton kind="icon" onClick={() => setMusicOpen((value) => !value)} aria-label={musicOpen ? "Cerrar nuestra canción" : "Escuchar nuestra canción"} title="Nuestra canción">
          {musicOpen ? <Pause aria-hidden="true" /> : <Music2 aria-hidden="true" />}
        </GiftButton>
      </header>

      {musicOpen && (
        <aside className="music-drawer" aria-label="Nuestra canción" aria-live="polite">
          <div><Music2 aria-hidden="true" /><span><strong>Nuestra canción</strong>A Pedir Su Mano · Juan Luis Guerra</span></div>
          <iframe
            width="100%"
              height="200"
                src="https://www.youtube.com/embed/VQQOemYLu3o"
                  title="Nuestra canción"
                    frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
        </aside>
      )}

      <section id="inicio" className="hero-section" aria-labelledby="story-title">
        <div className="hero-text" data-reveal>
          <span className="tiny-kicker">Una historia que elijo todos los días</span>
          <h1 id="story-title"><em>10</em> meses<br />de nosotros</h1>
          <p>De risas, besos, días bonitos, días difíciles y ese amor que siempre encuentra el camino de vuelta.</p>
          <span className="time-whisper">{greeting} ♡</span>
          <a href="#recuerdos" className="scroll-note">Baja despacito <span>↓</span></a>
        </div>
        <figure className="hero-photo" data-reveal>
          <span className="tape" aria-hidden="true" />
          <img
            src={IMG.photo04}
            alt="Nosotros sonriendo juntos, mi lugar favorito en el mundo"
            width={600}
            height={750}
            style={{ objectFit: "cover", borderRadius: "1rem", width: "100%", height: "auto" }}
            onError={handleImgError}
          />
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
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index > 2 ? "lazy" : "eager"}
                width={index % 2 === 0 ? 600 : 800}
                height={index % 2 === 0 ? 750 : 500}
                style={{ objectFit: "cover", borderRadius: "0.75rem", width: "100%", height: "100%" }}
                onError={handleImgError}
              />
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
        <div className="secret-friends" data-reveal aria-label="Nuestros tres cómplices">
          <GiftButton kind="icon" className={activeCreature === "wolf" ? "is-happy" : ""} onClick={() => meetFriend("wolf")} aria-label="Saludar a tu lobita" title="Saludar a tu lobita"><StoryCreature kind="wolf" /><small>tu lobita</small></GiftButton>
          <span className="friend-heart">♥</span>
          <GiftButton kind="icon" className={activeCreature === "dinosaur" ? "is-happy" : ""} onClick={() => meetFriend("dinosaur")} aria-label="Saludar a nuestro dinosaurio" title="Saludar a nuestro dinosaurio"><StoryCreature kind="dinosaur" /><small>amor jurásico</small></GiftButton>
          <span className="friend-heart">♥</span>
          <GiftButton kind="icon" className={activeCreature === "cat" ? "is-happy" : ""} onClick={() => meetFriend("cat")} aria-label="Saludar a nuestro gatito" title="Saludar a nuestro gatito"><StoryCreature kind="cat" /><small>mimos infinitos</small></GiftButton>
        </div>
        <p className="creature-message" aria-live="polite">{activeCreature ? "¡Te mandó un corazón!" : "Toca a uno de nuestros cómplices"}</p>
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

      <section className="love-slider-section"><LoveSlider /></section>

      <section className="final-section">
        <div className="final-polaroids" data-reveal>
          <img
            src={IMG.photo01}
            alt="Un beso para mi lobita, el primero de muchos más"
            loading="lazy"
            width={400}
            height={500}
            style={{ objectFit: "cover", borderRadius: "0.75rem", width: "100%", height: "auto" }}
            onError={handleImgError}
          />
          <img
            src={IMG.photo09}
            alt="Nosotros juntos en la playa, sol, mar y nuestro amor"
            loading="lazy"
            width={400}
            height={500}
            style={{ objectFit: "cover", borderRadius: "0.75rem", width: "100%", height: "auto" }}
            onError={handleImgError}
          />
        </div>
        <div className="final-copy" data-reveal>
          <Heart aria-hidden="true" />
          <p>Gracias por estos meses, por tu tiempo, por tu apoyo y por hacerme tan feliz.</p>
          <h2>Te amo demasiado,<br /><em>mi lobita linda.</em></h2>
          <span>Por muchos 23 más.</span>
          <GiftButton onClick={celebrate}><Heart aria-hidden="true" /> Celebrar nuestros 10 meses</GiftButton>
        </div>
      </section>

      <footer>Hecho con todo mi amor · 23 · ♡</footer>
      <div className="heart-rain" aria-hidden="true">
        {hearts.map((heart) => <span key={heart} style={{ "--i": heart } as CSSProperties}>♥</span>)}
      </div>
      <span className="sr-only" aria-live="polite">{celebrating ? "Una lluvia de corazones celebra nuestro amor" : ""}</span>
      {secretTaps >= 3 && <div className="secret-note" role="status">Encontraste nuestro secreto: te elegiría en todas las vidas. ♡</div>}
    </main>
  );
}
