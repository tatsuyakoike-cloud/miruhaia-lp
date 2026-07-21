import type { ReactNode } from "react";
import { decorationAsset } from "../lib/assets";
import "./SectionShell.css";

type Deco = "rings" | "wave" | "orbit" | "beam" | "grid" | "brackets";

type SectionShellProps = {
  id?: string;
  className?: string;
  tone?: "ivory" | "white" | "violet" | "spotlight";
  decos?: Deco[];
  labelledBy?: string;
  children: ReactNode;
};

const decoMap: Record<Deco, string> = {
  rings: "iris-rings",
  wave: "violet-wave",
  orbit: "brand-orbit",
  beam: "spotlight-beam",
  grid: "dot-grid",
  brackets: "corner-brackets",
};

export function SectionShell({
  id,
  className = "",
  tone = "ivory",
  decos = [],
  labelledBy,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={`shell shell--${tone} ${className}`.trim()} aria-labelledby={labelledBy}>
      {decos.map((deco) => (
        <img
          key={deco}
          className={`shell__deco shell__deco--${deco}`}
          src={decorationAsset(decoMap[deco])}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      ))}
      <div className="container shell__inner">{children}</div>
    </section>
  );
}
