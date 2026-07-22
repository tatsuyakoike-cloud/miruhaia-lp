import { siteContent } from "../content/siteContent";
import { iconAsset } from "../lib/assets";
import { SectionShell } from "./SectionShell";
import "./PlanCards.css";

export function PlanCards() {
  const { pricing } = siteContent;
  const planLabels = ["撮影を抑えて開始", "実写 × AI", "継続発信"];
  const planIcons = [
    ["camera-shooting", "short-video-phone"],
    ["camera-shooting", "planning-lightbulb", "short-video-phone"],
    ["calendar-contract", "camera-shooting", "posting-send"],
  ] as const;

  return (
    <SectionShell id="pricing" tone="white" decos={["orbit", "wave"]} labelledBy="pricing-heading">
      <p className="section-label">Pricing</p>
      <h2 id="pricing-heading" className="section-heading">
        {pricing.title}
      </h2>

      <div className="pricing-campaign">
        <span className="pricing-campaign__label">導入キャンペーン</span>
        <p>
          初期費用 <strong>0円</strong>
        </p>
        <span>適用条件の詳細は、ご相談時にご案内します。</span>
      </div>

      <div className="plan-stack">
        {pricing.plans.map((plan, index) => {
          const featured = "featured" in plan && plan.featured;
          return (
            <article key={plan.id} className={`plan-tile ${featured ? "plan-tile--featured" : ""}`}>
              {featured && <span className="plan-tile__badge">おすすめ</span>}
              <div className="plan-tile__head">
                <span className="plan-tile__type">{planLabels[index]}</span>
                <h3>{plan.name}</h3>
              </div>
              <div className="plan-tile__visual" aria-hidden="true">
                {planIcons[index].map((icon) => (
                  <span key={icon}>
                    <img src={iconAsset(icon)} alt="" width={34} height={34} />
                  </span>
                ))}
              </div>
              <div className="plan-tile__shooting-note">
                <img src={iconAsset("camera-shooting")} alt="" width={20} height={20} />
                <small>撮影</small>
                <span>{plan.shooting}</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="pricing-cta">
        <a href="#contact" className="btn btn--primary">
          {pricing.cta}
        </a>
        <a href="#contact" className="btn btn--secondary">
          {pricing.performanceCta}
          <span className="pricing-cta__aside">別途ご相談</span>
        </a>
      </div>

      <div className="addons-block">
        <p className="section-label">Options</p>
        <h3>{pricing.addonsTitle}</h3>
        <div className="addons-block__tags">
          {pricing.addons.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p>料金・条件は個別見積もりまたはご相談となります。</p>
      </div>
    </SectionShell>
  );
}
