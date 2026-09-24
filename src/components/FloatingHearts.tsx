import { useMemo, type CSSProperties } from "react";

type HeartStyle = CSSProperties & {
  "--heart-drift": string;
};

export function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        left: (index * 61 + 13) % 101,
        size: 0.6 + ((index * 17) % 19) / 10,
        opacity: 0.04 + ((index * 7) % 9) / 100,
        duration: 14 + ((index * 11) % 15),
        delay: (index * 13) % 16,
        drift: index % 2 === 0 ? 18 + (index % 4) * 7 : -18 - (index % 4) * 7,
        color: index % 10 < 7 ? "var(--blush)" : "var(--leaf)",
        blurred: index % 10 < 3,
      })),
    [],
  );

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          className="floating-hearts__item"
          key={heart.id}
          style={
            {
              left: `${heart.left}%`,
              color: heart.color,
              fontSize: `${heart.size}rem`,
              opacity: heart.opacity,
              animationDuration: `${heart.duration}s`,
              animationDelay: `-${heart.delay}s`,
              filter: heart.blurred ? "blur(1.5px)" : undefined,
              "--heart-drift": `${heart.drift}px`,
            } as HeartStyle
          }
        >
          ♥
        </span>
      ))}
    </div>
  );
}
