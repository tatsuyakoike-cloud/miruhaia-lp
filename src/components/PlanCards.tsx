import { siteContent } from "../content/siteContent";
import { isCampaignActive, siteConfig } from "../config/siteConfig";
import { SectionShell } from "./SectionShell";
import "./PlanCards.css";

function formatYen(amount: number): string {
  return `${amount.toLocaleString("ja-JP")}円`;
}

export function PlanCards() {
  const { pricing } = siteContent;
  const campaignActive = isCampaignActive();

  return (
    <SectionShell id="pricing" tone="white" decos={["orbit", "wave"]} labelledBy="pricing-heading">
      <p className="section-label">Pricing</p>
      <h2 id="pricing-heading" className="section-heading">
        {pricing.title}
      </h2>

      <div className="plan-stack">
        {pricing.plans.map((plan) => {
          const featured = "featured" in plan && plan.featured;
          return (
            <article key={plan.id} className={`plan-tile ${featured ? "plan-tile--featured" : ""}`}>
              {featured && <span className="plan-tile__badge">おすすめ</span>}
              <div className="plan-tile__head">
                <h3>{plan.name}</h3>
                <p className="plan-tile__price">
                  月額
                  <strong>{formatYen(plan.monthlyYen)}</strong>
                  {siteConfig.taxLabel && <small>{siteConfig.taxLabel}</small>}
                </p>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="plan-tile__note">{pricing.videoQuantityNote}</p>
            </article>
          );
        })}
      </div>

      {campaignActive && (
        <aside className="campaign-banner">
          <img src="/assets/miruhaia/icons/miruhaia_icon_calendar-contract.svg" alt="" width={32} height={32} />
          <div>
            <h3>初期費用キャンペーン</h3>
            <p>
              通常 {formatYen(siteConfig.campaign.regularSetupFeeYen)} →{" "}
              <strong>{formatYen(siteConfig.campaign.campaignSetupFeeYen)}</strong>
            </p>
          </div>
        </aside>
      )}

      <div className="pricing-cta">
        <a href="#contact" className="btn btn--primary">
          {pricing.cta}
        </a>
      </div>

      <div className="addons-block">
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
