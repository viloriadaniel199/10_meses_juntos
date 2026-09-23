import type { ButtonHTMLAttributes, ReactNode } from "react";

type GiftButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  kind?: "primary" | "paper" | "icon";
  busy?: boolean;
};

export function GiftButton({ children, kind = "primary", className = "", busy = false, disabled, ...props }: GiftButtonProps) {
  const styles = {
    primary: "gift-button gift-button-primary",
    paper: "gift-button gift-button-paper",
    icon: "gift-button gift-button-icon",
  };

  return (
    <button
      className={`${styles[kind]} ${className}`}
      disabled={disabled || busy}
      aria-busy={busy || undefined}
      {...props}
    >
      <span className="gift-button-content">{children}</span>
    </button>
  );
}