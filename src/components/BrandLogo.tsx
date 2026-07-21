import { logos } from "../lib/assets";
import "./BrandLogo.css";

type BrandLogoProps = {
  variant?: "tagline" | "primary" | "symbol";
  className?: string;
};

export function BrandLogo({ variant = "tagline", className = "" }: BrandLogoProps) {
  const src =
    variant === "symbol"
      ? logos.symbol
      : variant === "primary"
        ? logos.primary
        : logos.tagline;

  const width = variant === "symbol" ? 40 : variant === "primary" ? 160 : 220;
  const height = variant === "symbol" ? 40 : variant === "primary" ? 34 : 48;

  return (
    <img
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
      src={src}
      alt="ミルハイア by CONNECTED MATERIAL"
      width={width}
      height={height}
      loading="eager"
    />
  );
}
