import type { ReactNode } from "react";
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

const decoSrc: Record<Deco, string> = {
  rings: "/assets/miruhaia/decorations/miruhaia_decoration_iris-rings.svg",
  wave: "/assets/miruhaia/decorations/miruhaia_decoration_violet-wave.svg",
  orbit: "/assets/miruhaia/decorations/miruhaia_decoration_brand-orbit.svg",
  beam: "/assets/miruhaia/decorations/miruhaia_decoration_spotlight-beam.svg",
  grid: "/assets/miruhaia/decorations/miruhaia_decoration_dot-grid.svg",
  brackets: "/assets/miruhaia/decorations/miruhaia_decoration_corner-brackets.svg",
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
    <section
      id={id}
      className={`shell shell--${tone} ${className}`.trim()}
      aria-labelledby={labelledBy}
    >
      {decos.map((deco) => (
        <img
          key={deco}
          className={`shell__deco shell__deco--${deco}`}
          src={decoSrc[deco]}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      ))}
      <div className="container shell__inner">{children}</div>
    </section>
  );
}
