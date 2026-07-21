import type { CSSProperties } from "react";
import { iconAsset } from "../lib/assets";
import "./FlowTimeline.css";

export type FlowStep = {
  label: string;
  text?: string;
  icon?: string;
};

type FlowTimelineProps = {
  steps: readonly FlowStep[];
  variant?: "horizontal" | "vertical";
  numbered?: boolean;
};

export function FlowTimeline({ steps, variant = "horizontal", numbered = true }: FlowTimelineProps) {
  const timelineStyle = {
    "--step-count": steps.length,
  } as CSSProperties;

  return (
    <ol className={`flow-timeline flow-timeline--${variant}`} style={timelineStyle}>
      {steps.map((step, index) => (
        <li key={step.label} className="flow-timeline__step">
          <div className="flow-timeline__marker" aria-hidden="true">
            {step.icon ? (
              <img src={iconAsset(step.icon)} alt="" width={32} height={32} />
            ) : (
              <span>{numbered ? index + 1 : "●"}</span>
            )}
          </div>
          <div className="flow-timeline__body">
            <strong>{step.label}</strong>
            {step.text && <p>{step.text}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
