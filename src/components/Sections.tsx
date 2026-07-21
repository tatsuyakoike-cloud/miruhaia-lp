import { useState } from "react";
import { siteContent } from "../content/siteContent";
import { siteConfig } from "../config/siteConfig";
import { BrandLogo } from "./BrandLogo";
import { ContentMosaic } from "./ContentMosaic";
import { FlowTimeline } from "./FlowTimeline";
import { SectionShell } from "./SectionShell";
import { iconAsset, illustrationAsset, photos } from "../lib/assets";
import "./Sections.css";
import "./FaqAccordion.css";
import "./ContactCta.css";
import "./Footer.css";

export function PainPoints() {
  const { painPoints } = siteContent;
  return (
    <SectionShell tone="white" decos={["grid"]} labelledBy="pain-heading">
      <p className="section-label">お悩み</p>
      <h2 id="pain-heading" className="section-heading">
        {painPoints.title}
      </h2>
      <div className="pain-scroll">
        {painPoints.items.map((item) => (
          <div key={item.text} className="pain-bubble">
            <div className="pain-bubble__icon">
              <img src={iconAsset(item.icon)} alt="" width={40} height={40} loading="lazy" />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function MarketChallenge() {
  const { market } = siteContent;
  return (
    <SectionShell className="market-section" tone="spotlight" decos={["rings"]} labelledBy="market-heading">
      <p className="section-label">市場</p>
      <h2 id="market-heading" className="section-heading">
        {market.title}
      </h2>
      <div className="stat-blobs">
        {market.stats.map((stat, index) => (
          <div key={stat.label} className="stat-blob">
            {index === 0 ? (
              <div className="stat-ring" aria-label={stat.value}>
                <span>{stat.value}</span>
              </div>
            ) : (
              <div className="stat-bars" aria-label={stat.value}>
                <div className="stat-bars__row">
                  <span>求人件数</span>
                  <strong>188.7%</strong>
                  <i style={{ width: "100%" }} />
                </div>
                <div className="stat-bars__row">
                  <span>応募数</span>
                  <strong>127.7%</strong>
                  <i style={{ width: "68%" }} />
                </div>
              </div>
            )}
            <span className="stat-blob__label">{stat.label}</span>
            <a className="stat-blob__source" href={stat.url} target="_blank" rel="noopener noreferrer">
              出典：{stat.source}
            </a>
          </div>
        ))}
      </div>
      <FlowTimeline
        steps={market.cycle.map((label) => ({ label }))}
        variant="horizontal"
        numbered={false}
      />
      <p className="conclusion">{market.conclusion}</p>
    </SectionShell>
  );
}

export function CauseSection() {
  const { cause } = siteContent;
  return (
    <SectionShell tone="ivory" decos={["beam"]} labelledBy="cause-heading">
      <div className="split-feature">
        <div>
          <p className="section-label">原因</p>
          <h2 id="cause-heading" className="section-heading">
            {cause.title}
          </h2>
          <ul className="check-list">
            {cause.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="feature-body">{cause.body}</p>
        </div>
        <img
          src={illustrationAsset("visible-company")}
          alt="会社の魅力を可視化するイラスト"
          className="split-feature__art"
          loading="lazy"
        />
      </div>
    </SectionShell>
  );
}

export function JobSeekerTrend() {
  const { jobSeeker } = siteContent;
  return (
    <SectionShell tone="violet" decos={["orbit"]} labelledBy="jobseeker-heading">
      <div className="jobseeker-layout">
        <div>
          <p className="section-label">求職者</p>
          <h2 id="jobseeker-heading" className="section-heading">
            {jobSeeker.title}
          </h2>
          <div className="mega-stat">
            <span className="mega-stat__num">{jobSeeker.stat}</span>
            <span className="mega-stat__label">{jobSeeker.statLabel}</span>
            <a className="mega-stat__source" href={jobSeeker.sourceUrl} target="_blank" rel="noopener noreferrer">
              出典：{jobSeeker.source}
            </a>
          </div>
        </div>
        <img
          className="jobseeker-layout__art"
          src={illustrationAsset("growth-spotlight")}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="jobseeker-flow">
        <FlowTimeline
          steps={jobSeeker.flow.map((label) => ({ label }))}
          variant="horizontal"
          numbered={false}
        />
        <p className="conclusion">{jobSeeker.conclusion}</p>
      </div>
    </SectionShell>
  );
}

export function RoleComparison() {
  const { roles } = siteContent;
  return (
    <SectionShell tone="white" labelledBy="roles-heading">
      <p className="section-label">比較</p>
      <h2 id="roles-heading" className="section-heading">
        {roles.title}
      </h2>
      <div className="role-duo">
        {roles.items.map((item, i) => (
          <div key={item.label} className={`role-duo__item role-duo__item--${i}`}>
            <img
              src={i === 0 ? iconAsset("profile-document") : iconAsset("short-video-phone")}
              alt=""
              width={48}
              height={48}
            />
            <span className="role-duo__label">{item.label}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <p className="conclusion">{roles.conclusion}</p>
    </SectionShell>
  );
}

export function SolutionSection() {
  const { solution } = siteContent;
  return (
    <SectionShell id="features" tone="spotlight" decos={["brackets"]} labelledBy="solution-heading">
      <div className="solution-layout">
        <div>
          <p className="section-label">解決策</p>
          <h2 id="solution-heading" className="section-heading">
            {solution.title}
          </h2>
          <div className="promise-row">
            {solution.roles.map((role) => (
              <div key={role.title} className="promise-chip">
                <strong>{role.title}</strong>
                <span>{role.text}</span>
              </div>
            ))}
          </div>
          <p className="feature-body">{solution.body}</p>
        </div>
        <img
          src={illustrationAsset("short-video-recruiting")}
          alt="ショート動画採用支援のイラスト"
          className="solution-layout__art"
          loading="lazy"
        />
      </div>
    </SectionShell>
  );
}

export function SupportScope() {
  const { support } = siteContent;
  return (
    <SectionShell tone="ivory" decos={["wave"]} labelledBy="support-heading">
      <p className="section-label">支援範囲</p>
      <h2 id="support-heading" className="section-heading">
        {support.title}
      </h2>
      <p className="section-lead">6つのステップを、専任チームが伴走。</p>
      <FlowTimeline
        steps={support.steps.map((s) => ({ label: s.label, text: s.text, icon: s.icon }))}
        variant="horizontal"
      />
    </SectionShell>
  );
}

export function ContentFlow() {
  const { contentFlow } = siteContent;
  return (
    <SectionShell tone="white" decos={["beam"]} labelledBy="content-heading">
      <ContentMosaic title={contentFlow.title} note={contentFlow.note} />
    </SectionShell>
  );
}

export function OperationTeam() {
  const { operation } = siteContent;
  const clientSteps = operation.clientTasks.map((label) => ({ label }));
  const teamRoles = [
    { label: "ディレクター", icon: "strategy-target" },
    { label: "企画", icon: "planning-lightbulb" },
    { label: "撮影・編集", icon: "camera-shooting" },
    { label: "分析", icon: "analytics-chart" },
  ];

  return (
    <SectionShell tone="violet" decos={["rings"]} labelledBy="operation-heading">
      <p className="section-label">運用体制</p>
      <h2 id="operation-heading" className="section-heading">
        {operation.title}
      </h2>

      <div className="team-flow">
        <div className="team-flow__panel">
          <h3>お客様にお願いすること</h3>
          <FlowTimeline steps={clientSteps} variant="vertical" />
        </div>

        <div className="team-flow__center">
          <img
            src={illustrationAsset("service-flow")}
            alt="ミルハイアの支援フロー"
            className="team-flow__diagram"
            loading="lazy"
          />
          <div className="team-flow__roles">
            {teamRoles.map((role) => (
              <span key={role.label} className="team-flow__role">
                <img src={iconAsset(role.icon)} alt="" width={24} height={24} />
                {role.label}
              </span>
            ))}
          </div>
        </div>

        <div className="team-flow__panel team-flow__panel--photo">
          <img src={photos.teamWide} alt="チームで協力する社員" loading="lazy" />
          <div>
            <h3>続けるメリット</h3>
            <ul className="benefit-list">
              {operation.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function Differentiators() {
  const { differentiators } = siteContent;
  return (
    <SectionShell tone="spotlight" decos={["orbit"]} labelledBy="diff-heading">
      <div className="diff-layout">
        <div>
          <p className="section-label">選ばれる理由</p>
          <h2 id="diff-heading" className="section-heading">
            {differentiators.title}
          </h2>
          <div className="value-stack">
            {differentiators.items.map((item, i) => (
              <div key={item.title} className="value-stack__item">
                <span className="value-stack__num">0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="feature-body">{differentiators.note}</p>
        </div>
        <img
          src={illustrationAsset("small-company-trial")}
          alt="中小企業向けの支援イラスト"
          className="diff-layout__art"
          loading="lazy"
        />
      </div>
    </SectionShell>
  );
}

export function ProcessSteps() {
  const { process } = siteContent;
  return (
    <SectionShell className="process-section" tone="white" labelledBy="process-heading">
      <p className="section-label">開始まで</p>
      <h2 id="process-heading" className="section-heading">
        {process.title}
      </h2>
      <FlowTimeline
        steps={process.steps.map((label) => ({ label }))}
        variant="horizontal"
      />
    </SectionShell>
  );
}

export function FaqAccordion() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq" tone="ivory" decos={["grid"]} labelledBy="faq-heading">
      <p className="section-label">FAQ</p>
      <h2 id="faq-heading" className="section-heading">
        {faq.title}
      </h2>
      <div className="faq-list">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div key={item.q} className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
              <button
                type="button"
                className="faq-item__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.q}
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              <div id={panelId} className="faq-item__panel" hidden={!isOpen}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function ContactCta() {
  const { contact } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (siteConfig.contactUrl) {
      window.location.href = siteConfig.contactUrl;
      return;
    }
    setSubmitted(true);
  };

  return (
    <SectionShell id="contact" tone="violet" decos={["beam", "rings"]} labelledBy="contact-heading">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="section-label">相談</p>
          <h2 id="contact-heading" className="section-heading">
            {contact.title}
          </h2>
          <a href="#contact-form" className="btn btn--primary">
            {contact.cta}
          </a>
          <img className="contact-copy__photo" src={photos.laptop} alt="" loading="lazy" />
        </div>

        <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__field">
            <label htmlFor="company">会社名</label>
            <input id="company" name="company" type="text" required autoComplete="organization" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="name">氏名</label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">メールアドレス</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="phone">電話番号（任意）</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="message">相談内容</label>
            <textarea id="message" name="message" rows={4} required />
          </div>
          <label className="contact-form__consent">
            <input type="checkbox" required />
            個人情報の取り扱いに同意します
          </label>
          {submitted ? (
            <p className="contact-form__message" role="status">
              {contact.formPendingMessage}
            </p>
          ) : (
            <button type="submit" className="btn btn--primary contact-form__submit">
              送信する
            </button>
          )}
        </form>
      </div>
    </SectionShell>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <BrandLogo variant="tagline" />
        <p className="footer__tagline">見える会社は、選ばれる。</p>
        <nav className="footer__nav" aria-label="フッターナビゲーション">
          {siteConfig.privacyPolicyUrl ? (
            <a href={siteConfig.privacyPolicyUrl}>プライバシーポリシー</a>
          ) : (
            <span className="footer__muted">プライバシーポリシー（準備中）</span>
          )}
          <a href="#contact">お問い合わせ</a>
          <a href="#videos">動画事例</a>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} {siteConfig.companyName}</p>
      </div>
    </footer>
  );
}
