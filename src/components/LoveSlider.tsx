import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { StoryCreature } from "@/components/StoryCreature";

const sparks = Array.from({ length: 12 }, (_, index) => ({
  angle: index * 30,
  distance: 28 + (index % 3) * 9,
}));

const confetti = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: (index * 37) % 100,
  delay: (index % 8) * 0.06,
  rotation: (index * 43) % 360,
  type: index % 3 === 0 ? "heart" : index % 2 === 0 ? "pink" : "green",
}));

type SliderVars = CSSProperties & Record<`--${string}`, string | number>;

function getMood(value: number) {
  if (value === 1) return "sad";
  if (value <= 100) return "shy";
  if (value <= 300) return "smiling";
  if (value <= 700) return "inLove";
  if (value < 1000) return "ecstatic";
  return "epic";
}

export function LoveSlider() {
  const [value, setValue] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [epic, setEpic] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const previousValue = useRef(1);
  const mood = getMood(value);
  const percentage = ((value - 1) / 999) * 100;

  useEffect(() => {
    if (value === 1000 && previousValue.current !== 1000) {
      setEpic(true);
      if (!prefersReducedMotion) navigator.vibrate?.(80);
      const timeout = window.setTimeout(() => setEpic(false), 2000);
      previousValue.current = value;
      return () => window.clearTimeout(timeout);
    }
    previousValue.current = value;
    return undefined;
  }, [prefersReducedMotion, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.currentTarget.value));
  };

  const trackStyle = { "--value": `${percentage}%` } as SliderVars;
  const heartStyle = { left: `${percentage}%` } as SliderVars;

  return (
    <div
      className={`love-slider ${epic && !prefersReducedMotion ? "is-epic" : ""}`}
      style={{ "--love-progress": percentage } as SliderVars}
    >
      {epic && !prefersReducedMotion && (
        <div className="love-confetti" aria-hidden="true">
          {confetti.map((piece) => (
            <span
              className={`love-confetti--${piece.type}`}
              key={piece.id}
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                transform: `rotate(${piece.rotation}deg)`,
              }}
            >
              {piece.type === "heart" ? "♥" : ""}
            </span>
          ))}
        </div>
      )}
      <div className="love-slider__content">
        <span className="love-slider__eyebrow">Una pregunta importante</span>
        <h2 className="love-slider__title">¿Qué tanto me amas amor?</h2>
        <motion.div
          className="love-slider__value"
          key={value}
          initial={prefersReducedMotion ? false : { scale: 0.86, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
          aria-live="polite"
        >
          {value}%
        </motion.div>

        <div className="love-slider__birds" aria-hidden="true">
          <span className="love-slider__bird love-slider__bird--left">◖</span>
          <span className="love-slider__bird love-slider__bird--right">◗</span>
        </div>

        <div className={`love-slider__control ${dragging ? "is-dragging" : ""}`}>
          <div className="love-slider__track" style={trackStyle}>
            <span className="love-slider__fill" />
            <motion.span
              className={`love-slider__heart love-slider__heart--${mood}`}
              style={{ left: `${percentage}%` }}
              animate={
                prefersReducedMotion
                  ? { scale: 1 }
                  : {
                      scale: [1, 1.12, 1],
                      transition: { duration: Math.max(0.3, 1.1 - value / 1200), repeat: Infinity },
                    }
              }
            >
              ♥
            </motion.span>
            {dragging && !prefersReducedMotion && (
              <span className="love-slider__sparks" style={heartStyle} aria-hidden="true">
                {sparks.map((spark) => (
                  <i
                    className="love-slider__spark"
                    key={spark.angle}
                    style={
                      {
                        "--angle": `${spark.angle}deg`,
                        "--distance": `${spark.distance}px`,
                      } as SliderVars
                    }
                  />
                ))}
              </span>
            )}
            <input
              className="love-slider__input"
              type="range"
              min="1"
              max="1000"
              value={value}
              aria-label="¿Qué tanto me amas amor?"
              onChange={handleChange}
              onPointerDown={() => setDragging(true)}
              onPointerUp={() => setDragging(false)}
              onPointerCancel={() => setDragging(false)}
              onKeyDown={() => setDragging(true)}
              onKeyUp={() => setDragging(false)}
            />
          </div>
          <div className="love-slider__scale" aria-hidden="true">
            <span>1%</span>
            <span>100%</span>
            <span>500%</span>
            <span>1000%</span>
          </div>
        </div>

        <div className={`love-slider__cat-area love-slider__cat-area--${mood}`} aria-hidden="true">
          <motion.div
            className={`love-slider__cat love-slider__cat--${mood}`}
            {...(epic && !prefersReducedMotion
              ? {
                  animate: {
                    x: [0, -5, 5, -4, 4, 0],
                    y: [0, -5, 0, -4, 0],
                    rotate: [0, -2, 2, -1, 0],
                  },
                }
              : {})}
            transition={{ duration: 0.8 }}
          >
            {mood === "sad" && (
              <>
                <span className="love-slider__tear love-slider__tear--left" />
                <span className="love-slider__tear love-slider__tear--right" />
              </>
            )}
            {mood === "inLove" && <span className="love-slider__eye-hearts">♥ ♥</span>}
            {mood === "epic" && <span className="love-slider__cat-hearts">♥ ♥ ♥</span>}
            <StoryCreature kind="cat" />
          </motion.div>
        </div>

        {value === 1000 && (
          <p className="love-slider__message">Sabía que sí. Te amo 1000% también. ❤️</p>
        )}
      </div>
    </div>
  );
}
