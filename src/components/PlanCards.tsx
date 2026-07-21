import { siteContent } from "../content/siteContent";
import { isCampaignActive, siteConfig } from "../config/siteConfig";
import "./PlanCards.css";

function formatYen(amount: number): string {
  return `${amount.toLocaleString("ja-JP")}円`;
}

export function PlanCards() {
  const { pricing } = siteContent;
  const campaignActive = isCampaignActive();

  return (
    <section id="pricing" className="section" aria-labelledby="pricing-heading">
      <div className="container">
        <h2 id="pricing-heading" className="section-heading">
          {pricing.title}
        </h2>

        <div className="card-grid card-grid--3 plan-grid">
          {pricing.plans.map((plan) => (
            <article
              key={plan.id}
              className={`card plan-card ${"featured" in plan && plan.featured ? "plan-card--featured" : ""}`}
            >
              {"featured" in plan && plan.featured && <span className="plan-card__badge">おすすめ</span>}
              <h3 className="plan-card__name">{plan.name}</h3>
              <p className="plan-card__price">
                月額<span>{formatYen(plan.monthlyYen)}</span>
                {siteConfig.taxLabel && <small>{siteConfig.taxLabel}</small>}
              </p>
              <ul className="plan-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="plan-card__note">{pricing.videoQuantityNote}</p>
            </article>
          ))}
        </div>

        {campaignActive && (
          <aside className="campaign-panel" aria-label="初期費用キャンペーン">
            <h3>初期費用キャンペーン</h3>
            <p>
              通常 {formatYen(siteConfig.campaign.regularSetupFeeYen)} →{" "}
              <strong>{formatYen(siteConfig.campaign.campaignSetupFeeYen)}</strong>
            </p>
            <p className="campaign-panel__reason">{siteConfig.campaign.reason}</p>
          </aside>
        )}

        <div className="pricing-cta">
          <a href="#contact" className="btn btn--primary">
            {pricing.cta}
          </a>
        </div>

        <div className="addons">
          <h3>{pricing.addonsTitle}</h3>
          <ul className="addons__list">
            {pricing.addons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="addons__note">料金・条件は個別見積もりまたはご相談となります。</p>
        </div>
      </div>
    </section>
  );
}
