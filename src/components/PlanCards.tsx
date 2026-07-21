import { siteContent } from "../content/siteContent";
import { SectionShell } from "./SectionShell";
import "./PlanCards.css";

export function PlanCards() {
  const { pricing } = siteContent;
  const planLabels = ["AI活用", "素材活用", "定期撮影"];

  return (
    <SectionShell id="pricing" tone="white" decos={["orbit", "wave"]} labelledBy="pricing-heading">
      <p className="section-label">Pricing</p>
      <h2 id="pricing-heading" className="section-heading">
        {pricing.title}
      </h2>

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
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="plan-tile__link">
                詳細を相談する
                <span aria-hidden="true">→</span>
              </a>
            </article>
          );
        })}
      </div>

      <div className="pricing-cta">
        <a href="#contact" className="btn btn--primary">
          {pricing.cta}
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
