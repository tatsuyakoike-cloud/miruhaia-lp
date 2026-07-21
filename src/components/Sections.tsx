import { useState } from "react";
import { siteContent } from "../content/siteContent";
import { siteConfig } from "../config/siteConfig";
import { SectionShell } from "./SectionShell";
import "./Sections.css";
import "./FaqAccordion.css";
import "./ContactCta.css";
import "./Footer.css";

function iconPath(name: string): string {
  return `/assets/miruhaia/icons/miruhaia_icon_${name}.svg`;
}

function FlowTrack({ items, highlightLast = false }: { items: readonly string[]; highlightLast?: boolean }) {
  return (
    <div className="flow-track">
      {items.map((step, i) => (
        <span key={step} style={{ display: "contents" }}>
          <span
            className={`flow-pill ${highlightLast && i === items.length - 1 ? "flow-pill--violet" : ""}`}
          >
            {step}
          </span>
          {i < items.length - 1 && <span className="flow-arrow">→</span>}
        </span>
      ))}
    </div>
  );
}

export function PainPoints() {
  const { painPoints } = siteContent;
  return (
    <SectionShell tone="white" decos={["grid"]} labelledBy="pain-heading">
      <p className="section-label">Problem</p>
      <h2 id="pain-heading" className="section-heading">
        {painPoints.title}
      </h2>
      <div className="pain-scroll">
        {painPoints.items.map((item) => (
          <div key={item.text} className="pain-bubble">
            <div className="pain-bubble__icon">
              <img src={iconPath(item.icon)} alt="" width={40} height={40} loading="lazy" />
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
    <SectionShell tone="spotlight" decos={["rings"]} labelledBy="market-heading">
      <p className="section-label">Market</p>
      <h2 id="market-heading" className="section-heading">
        {market.title}
      </h2>
      <div className="stat-blobs">
        {market.stats.map((stat) => (
          <div key={stat.label} className="stat-blob">
            <span className="stat-blob__value">{stat.value}</span>
            <span className="stat-blob__label">{stat.label}</span>
            <a className="stat-blob__source" href={stat.url} target="_blank" rel="noopener noreferrer">
              {stat.source}
            </a>
          </div>
        ))}
      </div>
      <FlowTrack items={market.cycle} />
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
          <p className="section-label">Insight</p>
          <h2 id="cause-heading" className="section-heading">
            採用が難しい本当の理由は、
            <br />
            <em className="text-violet">会社が見えていない</em>こと。
          </h2>
          <ul className="check-list">
            {cause.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="feature-body">{cause.body}</p>
        </div>
        <img
          src="/assets/miruhaia/illustrations/miruhaia_illustration_visible-company.svg"
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
          <p className="section-label">Trend</p>
          <h2 id="jobseeker-heading" className="section-heading">
            {jobSeeker.title}
          </h2>
          <div className="mega-stat">
            <span className="mega-stat__num">{jobSeeker.stat}</span>
            <span className="mega-stat__label">{jobSeeker.statLabel}</span>
            <a className="mega-stat__source" href={jobSeeker.sourceUrl} target="_blank" rel="noopener noreferrer">
              {jobSeeker.source}
            </a>
          </div>
        </div>
        <img
          className="jobseeker-layout__art"
          src="/assets/miruhaia/illustrations/miruhaia_illustration_growth-spotlight.svg"
          alt=""
          loading="lazy"
        />
      </div>
      <FlowTrack items={jobSeeker.flow} highlightLast />
      <p className="conclusion">{jobSeeker.conclusion}</p>
    </SectionShell>
  );
}

export function RoleComparison() {
  const { roles } = siteContent;
  return (
    <SectionShell tone="white" labelledBy="roles-heading">
      <p className="section-label">Compare</p>
      <h2 id="roles-heading" className="section-heading">
        {roles.title}
      </h2>
      <div className="role-duo">
        {roles.items.map((item, i) => (
          <div key={item.label} className={`role-duo__item role-duo__item--${i}`}>
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
    <SectionShell id="features" tone="spotlight" decos={["brackets", "wave"]} labelledBy="solution-heading">
      <div className="solution-layout">
        <div>
          <p className="section-label">Solution</p>
          <h2 id="solution-heading" className="section-heading">
            <span className="spot">ミルハイア</span>は、会社のリアルを
            <br />
            ショート動画で可視化します。
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
          src="/assets/miruhaia/illustrations/miruhaia_illustration_short-video-recruiting.svg"
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
    <SectionShell tone="ivory" decos={["grid"]} labelledBy="support-heading">
      <p className="section-label">Scope</p>
      <h2 id="support-heading" className="section-heading">
        {support.title}
      </h2>
      <div className="support-rail">
        {support.steps.map((step, i) => (
          <div key={step.label} className="support-node">
            <div className="support-node__icon">
              <img src={iconPath(step.icon)} alt="" width={36} height={36} />
              <span>{i + 1}</span>
            </div>
            <h3>{step.label}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function ContentFlow() {
  const { contentFlow } = siteContent;
  return (
    <SectionShell tone="white" decos={["beam"]} labelledBy="content-heading">
      <p className="section-label">Content</p>
      <h2 id="content-heading" className="section-heading">
        {contentFlow.title}
      </h2>
      <div className="category-cloud">
        {contentFlow.categories.map((cat) => (
          <span key={cat} className="category-cloud__item">
            {cat}
          </span>
        ))}
      </div>
      <FlowTrack items={contentFlow.funnel} highlightLast />
      <p className="conclusion">{contentFlow.note}</p>
    </SectionShell>
  );
}

export function OperationTeam() {
  const { operation } = siteContent;
  return (
    <SectionShell tone="violet" decos={["rings"]} labelledBy="operation-heading">
      <div className="operation-layout">
        <div>
          <p className="section-label">Team</p>
          <h2 id="operation-heading" className="section-heading">
            {operation.title}
          </h2>
          <div className="duo-list">
            <div>
              <h3>お客様にお願いすること</h3>
              <ul>
                {operation.clientTasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>メリット</h3>
              <ul>
                {operation.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <img
          src="/assets/miruhaia/illustrations/miruhaia_illustration_service-flow.svg"
          alt="支援フローのイラスト"
          className="operation-layout__art"
          loading="lazy"
        />
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
          <p className="section-label">Why us</p>
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
          src="/assets/miruhaia/illustrations/miruhaia_illustration_small-company-trial.svg"
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
    <SectionShell tone="white" labelledBy="process-heading">
      <p className="section-label">Start</p>
      <h2 id="process-heading" className="section-heading">
        {process.title}
      </h2>
      <ol className="process-orbit">
        {process.steps.map((step, i) => (
          <li key={step}>
            <span>{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
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
          <p className="section-label">Contact</p>
          <h2 id="contact-heading" className="section-heading">
            {contact.title}
          </h2>
          <a href="#contact-form" className="btn btn--primary">
            {contact.cta}
          </a>
          <img
            className="contact-copy__photo"
            src="/assets/miruhaia/photos/employee-working-laptop-4x5.jpg"
            alt=""
            loading="lazy"
          />
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
        <img
          src="/assets/miruhaia/logo/miruhaia_logo_primary_outlined.svg"
          alt="ミルハイア"
          width={130}
          height={38}
        />
        <p className="footer__brand">{siteConfig.brandName}</p>
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
