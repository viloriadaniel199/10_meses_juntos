import type { ButtonHTMLAttributes, ReactNode } from "react";

type GiftButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  kind?: "primary" | "paper" | "icon";
};

export function GiftButton({ children, kind = "primary", className = "", ...props }: GiftButtonProps) {
  const styles = {
    primary: "gift-button gift-button-primary",
    paper: "gift-button gift-button-paper",
    icon: "gift-button gift-button-icon",
  };

  return (
    <button className={`${styles[kind]} ${className}`} {...props}>
      {children}
    </button>
  );
}