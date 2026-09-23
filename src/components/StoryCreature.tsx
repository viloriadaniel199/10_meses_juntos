type CreatureKind = "wolf" | "dinosaur" | "cat";

type StoryCreatureProps = {
  kind: CreatureKind;
};

const sharedProps = {
  viewBox: "0 0 120 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
} as const;

export function StoryCreature({ kind }: StoryCreatureProps) {
  if (kind === "wolf") {
    return (
      <svg {...sharedProps} className="story-creature-svg" data-creature="wolf">
        <path className="creature-fill" d="M28 42 21 17l25 14c9-4 19-4 28 0l25-14-7 26c7 9 11 20 11 32 0 24-18 38-43 38S17 99 17 75c0-13 4-24 11-33Z" />
        <path className="creature-soft" d="M31 36 27 25l12 8m50 3 4-11-12 8M43 88c9 8 25 8 34 0" />
        <path className="creature-line" d="M28 42 21 17l25 14c9-4 19-4 28 0l25-14-7 26c7 9 11 20 11 32 0 24-18 38-43 38S17 99 17 75c0-13 4-24 11-33Z" />
        <path className="creature-line" d="M38 61c5-5 10-5 15 0m14 0c5-5 10-5 15 0M54 78c4 4 8 4 12 0m-6 1v9" />
        <path className="creature-accent" d="M60 72c-4 0-7 2-7 5 0 4 7 8 7 8s7-4 7-8c0-3-3-5-7-5Z" />
      </svg>
    );
  }

  if (kind === "dinosaur") {
    return (
      <svg {...sharedProps} className="story-creature-svg" data-creature="dinosaur">
        <path className="creature-fill" d="M20 85c0-17 12-29 28-31 3-25 15-39 33-39 17 0 28 12 28 27 0 14-9 23-22 27v17c0 17-13 27-34 27-20 0-33-10-33-28Z" />
        <path className="creature-soft" d="m49 53-10-12 15-1-4-15 15 7 5-15 11 11" />
        <path className="creature-line" d="M20 85c0-17 12-29 28-31 3-25 15-39 33-39 17 0 28 12 28 27 0 14-9 23-22 27v17c0 17-13 27-34 27-20 0-33-10-33-28Zm30 0c8 5 19 5 28 0" />
        <circle className="creature-accent" cx="83" cy="39" r="3.5" />
        <path className="creature-line" d="M91 50c-4 4-10 5-15 2M38 105l-4 9m43-9 4 9" />
        <path className="creature-accent" d="M61 68c-4-5-11-2-11 3 0 6 11 12 11 12s11-6 11-12c0-5-7-8-11-3Z" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps} className="story-creature-svg" data-creature="cat">
      <path className="creature-fill" d="M29 44 23 18l25 14c8-3 16-3 24 0l25-14-6 26c8 9 12 20 12 32 0 23-18 37-43 37S17 99 17 76c0-12 4-23 12-32Z" />
      <path className="creature-soft" d="M31 36 27 25l12 8m50 3 4-11-12 8" />
      <path className="creature-line" d="M29 44 23 18l25 14c8-3 16-3 24 0l25-14-6 26c8 9 12 20 12 32 0 23-18 37-43 37S17 99 17 76c0-12 4-23 12-32Z" />
      <path className="creature-line" d="M37 62c5-4 10-4 15 0m16 0c5-4 10-4 15 0M54 78h12m-6 0v8m0 0c-5 0-8-2-10-5m10 5c5 0 8-2 10-5M38 75 18 70m20 12-21 3m65-10 20-5m-20 12 21 3" />
      <path className="creature-accent" d="M60 73c-4 0-7 2-7 5 0 4 7 8 7 8s7-4 7-8c0-3-3-5-7-5Z" />
    </svg>
  );
}