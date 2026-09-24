import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as MailOpen, i as Music2, n as Play, o as Heart, r as Pause, t as Sparkles } from "../_libs/lucide-react.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cs474N-x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GiftButton({ children, kind = "primary", className = "", busy = false, disabled, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: `${{
			primary: "gift-button gift-button-primary",
			paper: "gift-button gift-button-paper",
			icon: "gift-button gift-button-icon"
		}[kind]} ${className}`,
		type: props.type ?? "button",
		disabled: disabled || busy,
		"aria-busy": busy || void 0,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gift-button-content",
			children
		})
	});
}
function FloatingHearts() {
	const hearts = (0, import_react.useMemo)(() => Array.from({ length: 14 }, (_, index) => ({
		id: index,
		left: (index * 61 + 13) % 101,
		size: .6 + index * 17 % 19 / 10,
		opacity: .04 + index * 7 % 9 / 100,
		duration: 14 + index * 11 % 15,
		delay: index * 13 % 16,
		drift: index % 2 === 0 ? 18 + index % 4 * 7 : -18 - index % 4 * 7,
		color: index % 10 < 7 ? "var(--blush)" : "var(--leaf)",
		blurred: index % 10 < 3
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "floating-hearts",
		"aria-hidden": "true",
		children: hearts.map((heart) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "floating-hearts__item",
			style: {
				left: `${heart.left}%`,
				color: heart.color,
				fontSize: `${heart.size}rem`,
				opacity: heart.opacity,
				animationDuration: `${heart.duration}s`,
				animationDelay: `-${heart.delay}s`,
				filter: heart.blurred ? "blur(1.5px)" : void 0,
				"--heart-drift": `${heart.drift}px`
			},
			children: "♥"
		}, heart.id))
	});
}
var sharedProps = {
	viewBox: "0 0 120 120",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": true
};
function StoryCreature({ kind }) {
	if (kind === "wolf") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...sharedProps,
		className: "story-creature-svg",
		"data-creature": "wolf",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-fill",
				d: "M28 42 21 17l25 14c9-4 19-4 28 0l25-14-7 26c7 9 11 20 11 32 0 24-18 38-43 38S17 99 17 75c0-13 4-24 11-33Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-soft",
				d: "M31 36 27 25l12 8m50 3 4-11-12 8M43 88c9 8 25 8 34 0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-line",
				d: "M28 42 21 17l25 14c9-4 19-4 28 0l25-14-7 26c7 9 11 20 11 32 0 24-18 38-43 38S17 99 17 75c0-13 4-24 11-33Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-line",
				d: "M38 61c5-5 10-5 15 0m14 0c5-5 10-5 15 0M54 78c4 4 8 4 12 0m-6 1v9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-accent",
				d: "M60 72c-4 0-7 2-7 5 0 4 7 8 7 8s7-4 7-8c0-3-3-5-7-5Z"
			})
		]
	});
	if (kind === "dinosaur") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...sharedProps,
		className: "story-creature-svg",
		"data-creature": "dinosaur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-fill",
				d: "M20 85c0-17 12-29 28-31 3-25 15-39 33-39 17 0 28 12 28 27 0 14-9 23-22 27v17c0 17-13 27-34 27-20 0-33-10-33-28Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-soft",
				d: "m49 53-10-12 15-1-4-15 15 7 5-15 11 11"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-line",
				d: "M20 85c0-17 12-29 28-31 3-25 15-39 33-39 17 0 28 12 28 27 0 14-9 23-22 27v17c0 17-13 27-34 27-20 0-33-10-33-28Zm30 0c8 5 19 5 28 0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				className: "creature-accent",
				cx: "83",
				cy: "39",
				r: "3.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-line",
				d: "M91 50c-4 4-10 5-15 2M38 105l-4 9m43-9 4 9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-accent",
				d: "M61 68c-4-5-11-2-11 3 0 6 11 12 11 12s11-6 11-12c0-5-7-8-11-3Z"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...sharedProps,
		className: "story-creature-svg",
		"data-creature": "cat",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-fill",
				d: "M29 44 23 18l25 14c8-3 16-3 24 0l25-14-6 26c8 9 12 20 12 32 0 23-18 37-43 37S17 99 17 76c0-12 4-23 12-32Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-soft",
				d: "M31 36 27 25l12 8m50 3 4-11-12 8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-line",
				d: "M29 44 23 18l25 14c8-3 16-3 24 0l25-14-6 26c8 9 12 20 12 32 0 23-18 37-43 37S17 99 17 76c0-12 4-23 12-32Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-line",
				d: "M37 62c5-4 10-4 15 0m16 0c5-4 10-4 15 0M54 78h12m-6 0v8m0 0c-5 0-8-2-10-5m10 5c5 0 8-2 10-5M38 75 18 70m20 12-21 3m65-10 20-5m-20 12 21 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "creature-accent",
				d: "M60 73c-4 0-7 2-7 5 0 4 7 8 7 8s7-4 7-8c0-3-3-5-7-5Z"
			})
		]
	});
}
var sparks = Array.from({ length: 12 }, (_, index) => ({
	angle: index * 30,
	distance: 28 + index % 3 * 9
}));
var confetti = Array.from({ length: 30 }, (_, index) => ({
	id: index,
	left: index * 37 % 100,
	delay: index % 8 * .06,
	rotation: index * 43 % 360,
	type: index % 3 === 0 ? "heart" : index % 2 === 0 ? "pink" : "green"
}));
function getMood(value) {
	if (value === 1) return "sad";
	if (value <= 100) return "shy";
	if (value <= 300) return "smiling";
	if (value <= 700) return "inLove";
	if (value < 1e3) return "ecstatic";
	return "epic";
}
function LoveSlider() {
	const [value, setValue] = (0, import_react.useState)(1);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [epic, setEpic] = (0, import_react.useState)(false);
	const prefersReducedMotion = useReducedMotion();
	const previousValue = (0, import_react.useRef)(1);
	const mood = getMood(value);
	const percentage = (value - 1) / 999 * 100;
	(0, import_react.useEffect)(() => {
		if (value === 1e3 && previousValue.current !== 1e3) {
			setEpic(true);
			if (!prefersReducedMotion) navigator.vibrate?.(80);
			const timeout = window.setTimeout(() => setEpic(false), 2e3);
			previousValue.current = value;
			return () => window.clearTimeout(timeout);
		}
		previousValue.current = value;
	}, [prefersReducedMotion, value]);
	const handleChange = (event) => {
		setValue(Number(event.currentTarget.value));
	};
	const trackStyle = { "--value": `${percentage}%` };
	const heartStyle = { left: `${percentage}%` };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `love-slider ${epic && !prefersReducedMotion ? "is-epic" : ""}`,
		style: { "--love-progress": percentage },
		children: [epic && !prefersReducedMotion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "love-confetti",
			"aria-hidden": "true",
			children: confetti.map((piece) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `love-confetti--${piece.type}`,
				style: {
					left: `${piece.left}%`,
					animationDelay: `${piece.delay}s`,
					transform: `rotate(${piece.rotation}deg)`
				},
				children: piece.type === "heart" ? "♥" : ""
			}, piece.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "love-slider__content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "love-slider__eyebrow",
					children: "Una pregunta importante"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "love-slider__title",
					children: "¿Qué tanto me amas amor?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "love-slider__value",
					initial: prefersReducedMotion ? false : {
						scale: .86,
						opacity: .4
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						type: "spring",
						stiffness: 420,
						damping: 22
					},
					"aria-live": "polite",
					children: [value, "%"]
				}, value),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "love-slider__birds",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "love-slider__bird love-slider__bird--left",
						children: "◖"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "love-slider__bird love-slider__bird--right",
						children: "◗"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `love-slider__control ${dragging ? "is-dragging" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "love-slider__track",
						style: trackStyle,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "love-slider__fill" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: `love-slider__heart love-slider__heart--${mood}`,
								style: { left: `${percentage}%` },
								animate: prefersReducedMotion ? { scale: 1 } : {
									scale: [
										1,
										1.12,
										1
									],
									transition: {
										duration: Math.max(.3, 1.1 - value / 1200),
										repeat: Infinity
									}
								},
								children: "♥"
							}),
							dragging && !prefersReducedMotion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "love-slider__sparks",
								style: heartStyle,
								"aria-hidden": "true",
								children: sparks.map((spark) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
									className: "love-slider__spark",
									style: {
										"--angle": `${spark.angle}deg`,
										"--distance": `${spark.distance}px`
									}
								}, spark.angle))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "love-slider__input",
								type: "range",
								min: "1",
								max: "1000",
								value,
								"aria-label": "¿Qué tanto me amas amor?",
								onChange: handleChange,
								onPointerDown: () => setDragging(true),
								onPointerUp: () => setDragging(false),
								onPointerCancel: () => setDragging(false),
								onKeyDown: () => setDragging(true),
								onKeyUp: () => setDragging(false)
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "love-slider__scale",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1%" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100%" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "500%" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1000%" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `love-slider__cat-area love-slider__cat-area--${mood}`,
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: `love-slider__cat love-slider__cat--${mood}`,
						...epic && !prefersReducedMotion ? { animate: {
							x: [
								0,
								-5,
								5,
								-4,
								4,
								0
							],
							y: [
								0,
								-5,
								0,
								-4,
								0
							],
							rotate: [
								0,
								-2,
								2,
								-1,
								0
							]
						} } : {},
						transition: { duration: .8 },
						children: [
							mood === "sad" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "love-slider__tear love-slider__tear--left" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "love-slider__tear love-slider__tear--right" })] }),
							mood === "inLove" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "love-slider__eye-hearts",
								children: "♥ ♥"
							}),
							mood === "epic" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "love-slider__cat-hearts",
								children: "♥ ♥ ♥"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCreature, { kind: "cat" })
						]
					})
				}),
				value === 1e3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "love-slider__message",
					children: "Sabía que sí. Te amo 1000% también. ❤️"
				})
			]
		})]
	});
}
var lenisOptions = {
	duration: 1.2,
	easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
	smoothWheel: true,
	smoothTouch: false
};
function useLenis() {
	const [lenis, setLenis] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		let cleanupLenis;
		const setupLenis = () => {
			cleanupLenis?.();
			if (mediaQuery.matches) {
				setLenis(null);
				cleanupLenis = void 0;
				return;
			}
			const instance = new Lenis(lenisOptions);
			let animationFrame = 0;
			const raf = (time) => {
				instance.raf(time);
				animationFrame = window.requestAnimationFrame(raf);
			};
			animationFrame = window.requestAnimationFrame(raf);
			setLenis(instance);
			cleanupLenis = () => {
				window.cancelAnimationFrame(animationFrame);
				instance.destroy();
				setLenis(null);
			};
		};
		const handleMotionPreferenceChange = () => setupLenis();
		setupLenis();
		mediaQuery.addEventListener("change", handleMotionPreferenceChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
			cleanupLenis?.();
		};
	}, []);
	return lenis;
}
var scrollTriggerRegistered = false;
function registerScrollTrigger() {
	if (scrollTriggerRegistered) return;
	gsapWithCSS.registerPlugin(ScrollTrigger);
	scrollTriggerRegistered = true;
}
function useScrollReveal(lenis, enabled = true) {
	(0, import_react.useEffect)(() => {
		if (!enabled || !lenis) return;
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		registerScrollTrigger();
		const elements = gsapWithCSS.utils.toArray("[data-reveal]");
		if (mediaQuery.matches) {
			gsapWithCSS.set(elements, {
				opacity: 1,
				x: 0,
				y: 0,
				scale: 1
			});
			return;
		}
		const context = gsapWithCSS.context(() => {
			gsapWithCSS.set(elements, {
				opacity: 0,
				y: 22,
				scale: .992,
				willChange: "transform, opacity"
			});
			ScrollTrigger.batch(elements, {
				start: "top 88%",
				once: true,
				onEnter: (batch) => {
					gsapWithCSS.to(batch, {
						opacity: 1,
						y: 0,
						scale: 1,
						duration: .7,
						ease: "power3.out",
						stagger: .08,
						clearProps: "willChange"
					});
				}
			});
		});
		const updateScrollTrigger = () => ScrollTrigger.update();
		lenis.on("scroll", updateScrollTrigger);
		ScrollTrigger.refresh();
		return () => {
			lenis.off("scroll", updateScrollTrigger);
			context.revert();
		};
	}, [enabled, lenis]);
}
var IMG = {
	photo01: "/images/Screenshot_20260923_134213_Gallery.jpg",
	photo02: "/images/Screenshot_20260923_134221_Gallery.jpg",
	photo03: "/images/Screenshot_20260923_134254_Gallery.jpg",
	photo04: "/images/Screenshot_20260923_134309_Gallery.jpg",
	photo05: "/images/Screenshot_20260923_134322_Gallery.jpg",
	photo06: "/images/Screenshot_20260923_134401_Gallery.jpg",
	photo07: "/images/Screenshot_20260923_134423_Gallery.jpg",
	photo08: "/images/Screenshot_20260923_134444_Gallery.jpg",
	photo09: "/images/Screenshot_20260923_134502_Gallery.jpg",
	photo10: "/images/Screenshot_20260923_134727_Gallery.jpg"
};
var PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23fdf2f8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='72' fill='%23e8a4c8'%3E%E2%99%A5%3C/text%3E%3C/svg%3E";
function handleImgError(e) {
	const img = e.currentTarget;
	if (img.src !== PLACEHOLDER_SVG) img.src = PLACEHOLDER_SVG;
}
var photos = [
	{
		src: IMG.photo01,
		caption: "Donde siempre quiero estar",
		shape: "portrait",
		tilt: "left",
		alt: "Los dos juntos, donde siempre quiero estar"
	},
	{
		src: IMG.photo02,
		caption: "Besitos que arreglan el mundo",
		shape: "portrait",
		tilt: "right",
		alt: "Un besito tuyo que me arregla el mundo entero"
	},
	{
		src: IMG.photo03,
		caption: "Compartir la mesa, compartir la vida",
		shape: "landscape",
		tilt: "left",
		alt: "Compartiendo la mesa y la vida juntos"
	},
	{
		src: IMG.photo04,
		caption: "Tu sonrisa, mi lugar favorito",
		shape: "landscape",
		tilt: "right",
		alt: "Tu sonrisa, el lugar más bonito del mundo para mí"
	},
	{
		src: IMG.photo05,
		caption: "Todas tus versiones me hacen feliz",
		shape: "portrait",
		tilt: "left",
		alt: "Todas las versiones de ti me hacen inmensamente feliz"
	},
	{
		src: IMG.photo06,
		caption: "Mi niña hermosa y sus locuras",
		shape: "portrait",
		tilt: "right",
		alt: "Mi niña hermosa con todas sus locuras que adoro"
	},
	{
		src: IMG.photo07,
		caption: "La vida sabe más bonito contigo",
		shape: "landscape",
		tilt: "left",
		alt: "La vida sabe más bonita cuando estamos juntos"
	},
	{
		src: IMG.photo08,
		caption: "Hasta tus caritas serias me encantan",
		shape: "portrait",
		tilt: "right",
		alt: "Hasta tus caritas serias me enamoran más cada día"
	},
	{
		src: IMG.photo09,
		caption: "Sol, mar y nosotros",
		shape: "landscape",
		tilt: "left",
		alt: "Nosotros dos bajo el sol junto al mar"
	},
	{
		src: IMG.photo10,
		caption: "Siempre tú, siempre nosotros",
		shape: "landscape",
		tilt: "right",
		alt: "Siempre tú, siempre nosotros dos"
	}
];
var letter = [
	"Mi vida hoy que cumplimos 10 mesesitos quiero desearte muchisima salud, sabiduría y muchas ganas para salir adelante conmigo miamor. Quiero agradecerte muchisimo por el hombre tan feliz que me haces ser y sobre todo la gran persona que puedo llegar hacer contigo en mi vida. Se que no hemos tenido siempre buenas actitudes y acciones pero es normal tener altas y bajas en una relación sana y comunicativa como nuestra relación. Te amo y te deseo muchisimo y muchisimas gracias por apoyarme siempre cuando se me ocurre algo, gracias por reirte de mis locuras y sobre todo gracias por darme el placer tan grande de ser tu novio, me complace ser tu novio y dar todo lo mejor de mí para hacerte feliz mi chocolatico lindo.",
	"Eres mi cielito lindo, mi mujer, mi princesita, mi niñita chiquita hermosa, mi musa, mi amante, mi mejor amiga y mi priodidad en esta vida, eres todo lo que siempre quise y gracias por brindarme tu tiempo.",
	"Teamo demasiado mi lobita lindaa ❤️."
];
function Index() {
	const lenis = useLenis();
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [letterOpen, setLetterOpen] = (0, import_react.useState)(false);
	const [musicOpen, setMusicOpen] = (0, import_react.useState)(false);
	const [hearts, setHearts] = (0, import_react.useState)([]);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [greeting, setGreeting] = (0, import_react.useState)("Este momento es solo para nosotros");
	const [activeCreature, setActiveCreature] = (0, import_react.useState)(null);
	const [secretTaps, setSecretTaps] = (0, import_react.useState)(0);
	const [celebrating, setCelebrating] = (0, import_react.useState)(false);
	useScrollReveal(lenis, opened);
	(0, import_react.useEffect)(() => {
		const hour = (/* @__PURE__ */ new Date()).getHours();
		setGreeting(hour < 12 ? "Buenos días, mi amor" : hour < 18 ? "Esta tarde es solo para nosotros" : "Buenas noches, mi lobita");
	}, []);
	(0, import_react.useEffect)(() => {
		if (!opened) return;
		const updateProgress = () => {
			const distance = document.documentElement.scrollHeight - window.innerHeight;
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
	const meetFriend = (friend) => {
		setActiveCreature(friend);
		celebrate();
		window.setTimeout(() => setActiveCreature(null), 1400);
	};
	const revealSecret = () => {
		const next = secretTaps + 1;
		setSecretTaps(next);
		if (next === 3) celebrate();
	};
	if (!opened) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "cover-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cover-leaves",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cover-copy animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tiny-kicker",
						children: "23 · nuestro día"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "moon-seal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "for-you",
						children: "Para"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Mi lobita linda" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cover-note",
						children: "Guardé diez meses de nosotros en este pequeño lugar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GiftButton, {
						onClick: () => setOpened(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailOpen, { "aria-hidden": "true" }), " Abrir mi regalo"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cover-creatures",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCreature, { kind: "cat" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCreature, { kind: "dinosaur" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCreature, { kind: "wolf" })
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "gift-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingHearts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "story-progress",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { transform: `scaleX(${progress})` } })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#inicio",
						className: "monogram",
						"aria-label": "Ir al inicio",
						onClick: revealSecret,
						title: "Nuestro pequeño secreto",
						children: [
							"D",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♥" }),
							"A"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10 meses contigo" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftButton, {
						kind: "icon",
						onClick: () => setMusicOpen((value) => !value),
						"aria-label": musicOpen ? "Cerrar nuestra canción" : "Escuchar nuestra canción",
						title: "Nuestra canción",
						children: musicOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { "aria-hidden": "true" })
					})
				]
			}),
			musicOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "music-drawer",
				"aria-label": "Nuestra canción",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Nuestra canción" }), "A Pedir Su Mano · Juan Luis Guerra"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://youtu.be/VQQOemYLu3o",
					target: "_blank",
					rel: "noreferrer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { "aria-hidden": "true" }), " Escuchar"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "inicio",
				className: "hero-section",
				"aria-labelledby": "story-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-text",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tiny-kicker",
								children: "Una historia que elijo todos los días"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								id: "story-title",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "10" }),
									" meses",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"de nosotros"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "De risas, besos, días bonitos, días difíciles y ese amor que siempre encuentra el camino de vuelta." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "time-whisper",
								children: [greeting, " ♡"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#recuerdos",
								className: "scroll-note",
								children: ["Baja despacito ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↓" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "hero-photo",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tape",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMG.photo04,
								alt: "Nosotros sonriendo juntos, mi lugar favorito en el mundo",
								width: 600,
								height: 750,
								style: {
									objectFit: "cover",
									borderRadius: "1rem",
									width: "100%",
									height: "auto"
								},
								onError: handleImgError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "Mi lugar favorito es contigo ♡" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-doodle",
						"aria-hidden": "true",
						children: [
							"10",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "mesesitos" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "promise-band",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nos reímos" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Aprendemos" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nos elegimos" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "recuerdos",
				className: "memories-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tiny-kicker",
							children: "Nuestro pequeño universo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Diez recuerdos,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "un solo amor" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cada foto guarda una versión de nosotros que quiero seguir coleccionando." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "memory-grid",
					children: photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `memory-card ${photo.shape} tilt-${photo.tilt}`,
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "photo-number",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photo.src,
								alt: photo.alt,
								loading: index > 2 ? "lazy" : "eager",
								width: index % 2 === 0 ? 600 : 800,
								height: index % 2 === 0 ? 750 : 500,
								style: {
									objectFit: "cover",
									borderRadius: "0.75rem",
									width: "100%",
									height: "100%"
								},
								onError: handleImgError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: photo.caption })
						]
					}, photo.src))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "together-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "together-copy",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tiny-kicker",
								children: "Lo verdadero también se construye"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Incluso cuando",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"no es fácil…"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hemos tenido altas y bajas. Nos hemos equivocado. Hemos aprendido a escucharnos, a resolver y a quedarnos." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hand-note",
								children: "Y eso también es amor."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "steps",
						"data-reveal": true,
						children: [
							[
								"01",
								"Sentir",
								"Sin esconder lo que pasa por dentro."
							],
							[
								"02",
								"Hablar",
								"Aunque a veces cueste encontrar las palabras."
							],
							[
								"03",
								"Volver",
								"A elegirnos con más ternura y más verdad."
							]
						].map(([number, title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: number }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy })] })] }, number))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "secret-friends",
						"data-reveal": true,
						"aria-label": "Nuestros tres cómplices",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GiftButton, {
								kind: "icon",
								className: activeCreature === "wolf" ? "is-happy" : "",
								onClick: () => meetFriend("wolf"),
								"aria-label": "Saludar a tu lobita",
								title: "Saludar a tu lobita",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCreature, { kind: "wolf" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "tu lobita" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "friend-heart",
								children: "♥"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GiftButton, {
								kind: "icon",
								className: activeCreature === "dinosaur" ? "is-happy" : "",
								onClick: () => meetFriend("dinosaur"),
								"aria-label": "Saludar a nuestro dinosaurio",
								title: "Saludar a nuestro dinosaurio",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCreature, { kind: "dinosaur" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "amor jurásico" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "friend-heart",
								children: "♥"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GiftButton, {
								kind: "icon",
								className: activeCreature === "cat" ? "is-happy" : "",
								onClick: () => meetFriend("cat"),
								"aria-label": "Saludar a nuestro gatito",
								title: "Saludar a nuestro gatito",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCreature, { kind: "cat" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "mimos infinitos" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "creature-message",
						"aria-live": "polite",
						children: activeCreature ? "¡Te mandó un corazón!" : "Toca a uno de nuestros cómplices"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "letter-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "letter-intro",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { "aria-hidden": "true" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tiny-kicker",
							children: "Escrito desde el corazón"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Hay algo que",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"quiero decirte"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sin filtros, sin adornos. Solo todo lo que siento por ti." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `envelope-wrap ${letterOpen ? "is-open" : ""}`,
					"data-reveal": true,
					children: !letterOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "envelope",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "envelope-flap" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "wax-seal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GiftButton, {
								kind: "paper",
								onClick: () => setLetterOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailOpen, { "aria-hidden": "true" }), " Abrir mi carta"]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "love-letter animate-fade-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "letter-date",
								children: "Día 23 · Diez meses juntos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Mi vida," }),
							letter.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "signature",
								children: "Siempre tuyo ♡"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "love-slider-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoveSlider, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "final-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "final-polaroids",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.photo01,
						alt: "Un beso para mi lobita, el primero de muchos más",
						loading: "lazy",
						width: 400,
						height: 500,
						style: {
							objectFit: "cover",
							borderRadius: "0.75rem",
							width: "100%",
							height: "auto"
						},
						onError: handleImgError
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.photo09,
						alt: "Nosotros juntos en la playa, sol, mar y nuestro amor",
						loading: "lazy",
						width: 400,
						height: 500,
						style: {
							objectFit: "cover",
							borderRadius: "0.75rem",
							width: "100%",
							height: "auto"
						},
						onError: handleImgError
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "final-copy",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gracias por estos meses, por tu tiempo, por tu apoyo y por hacerme tan feliz." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Te amo demasiado,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "mi lobita linda." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Por muchos 23 más." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GiftButton, {
							onClick: celebrate,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" }), " Celebrar nuestros 10 meses"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { children: "Hecho con todo mi amor · 23 · ♡" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "heart-rain",
				"aria-hidden": "true",
				children: hearts.map((heart) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { "--i": heart },
					children: "♥"
				}, heart))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				"aria-live": "polite",
				children: celebrating ? "Una lluvia de corazones celebra nuestro amor" : ""
			}),
			secretTaps >= 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "secret-note",
				role: "status",
				children: "Encontraste nuestro secreto: te elegiría en todas las vidas. ♡"
			})
		]
	});
}
//#endregion
export { Index as component };
