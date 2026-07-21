import { useState } from "react";
import { siteContent } from "../content/siteContent";
import { siteConfig } from "../config/siteConfig";
import "./Sections.css";
import "./FaqAccordion.css";
import "./ContactCta.css";
import "./Footer.css";

function iconPath(name: string): string {
  return `/assets/miruhaia/icons/miruhaia_icon_${name}.svg`;
}

export function PainPoints() {
  const { painPoints } = siteContent;
  return (
    <section className="section section--ivory" aria-labelledby="pain-heading">
      <div className="container">
        <h2 id="pain-heading" className="section-heading">
          {painPoints.title}
        </h2>
        <div className="card-grid card-grid--3 card-grid--6">
          {painPoints.items.map((item) => (
            <div key={item.text} className="card icon-card">
              <img src={iconPath(item.icon)} alt="" width={48} height={48} loading="lazy" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarketChallenge() {
  const { market } = siteContent;
  return (
    <section className="section" aria-labelledby="market-heading">
      <div className="container">
        <h2 id="market-heading" className="section-heading">
          {market.title}
        </h2>
        <div className="card-grid card-grid--2">
          {market.stats.map((stat) => (
            <div key={stat.label} className="card stat-card">
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
              <span className="stat-card__source">
                出典：
                <a href={stat.url} target="_blank" rel="noopener noreferrer">
                  {stat.source}
                </a>
              </span>
            </div>
          ))}
        </div>
        <div className="flow-row" style={{ marginTop: 32 }}>
          {market.cycle.map((step, i) => (
            <span key={step}>
              <span className="flow-row__item">{step}</span>
              {i < market.cycle.length - 1 && <span className="flow-row__arrow">→</span>}
            </span>
          ))}
        </div>
        <p className="conclusion">{market.conclusion}</p>
      </div>
    </section>
  );
}

export function CauseSection() {
  const { cause } = siteContent;
  return (
    <section className="section section--ivory" aria-labelledby="cause-heading">
      <div className="container cause-grid">
        <div>
          <h2 id="cause-heading" className="section-heading">
            {cause.title}
          </h2>
          <ul className="cause-list">
            {cause.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="cause-body">{cause.body}</p>
        </div>
        <img
          src="/assets/miruhaia/illustrations/miruhaia_illustration_visible-company.svg"
          alt="会社の魅力を可視化するイラスト"
          className="cause-illust"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export function JobSeekerTrend() {
  const { jobSeeker } = siteContent;
  return (
    <section className="section" aria-labelledby="jobseeker-heading">
      <div className="container">
        <h2 id="jobseeker-heading" className="section-heading">
          {jobSeeker.title}
        </h2>
        <div className="jobseeker-grid">
          <div className="card stat-card">
            <span className="stat-card__value">{jobSeeker.stat}</span>
            <span className="stat-card__label">{jobSeeker.statLabel}</span>
            <span className="stat-card__source">
              出典：
              <a href={jobSeeker.sourceUrl} target="_blank" rel="noopener noreferrer">
                {jobSeeker.source}
              </a>
            </span>
          </div>
          <div className="flow-row">
            {jobSeeker.flow.map((step, i) => (
              <span key={step}>
                <span className="flow-row__item">{step}</span>
                {i < jobSeeker.flow.length - 1 && <span className="flow-row__arrow">→</span>}
              </span>
            ))}
          </div>
        </div>
        <p className="conclusion">{jobSeeker.conclusion}</p>
      </div>
    </section>
  );
}

export function RoleComparison() {
  const { roles } = siteContent;
  return (
    <section className="section section--ivory" aria-labelledby="roles-heading">
      <div className="container">
        <h2 id="roles-heading" className="section-heading">
          {roles.title}
        </h2>
        <div className="card-grid card-grid--2">
          {roles.items.map((item) => (
            <div key={item.label} className="card role-card">
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <p className="conclusion">{roles.conclusion}</p>
      </div>
    </section>
  );
}

export function SolutionSection() {
  const { solution } = siteContent;
  return (
    <section id="features" className="section section--pale" aria-labelledby="solution-heading">
      <div className="container solution-grid">
        <div>
          <h2 id="solution-heading" className="section-heading">
            <span className="section-heading__accent">{solution.title}</span>
          </h2>
          <div className="card-grid card-grid--3">
            {solution.roles.map((role) => (
              <div key={role.title} className="card solution-role">
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </div>
            ))}
          </div>
          <p className="solution-body">{solution.body}</p>
        </div>
        <img
          src="/assets/miruhaia/illustrations/miruhaia_illustration_short-video-recruiting.svg"
          alt="ショート動画採用支援のイラスト"
          className="solution-illust"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export function SupportScope() {
  const { support } = siteContent;
  return (
    <section className="section" aria-labelledby="support-heading">
      <div className="container">
        <h2 id="support-heading" className="section-heading">
          {support.title}
        </h2>
        <div className="support-timeline">
          {support.steps.map((step, i) => (
            <div key={step.label} className="support-step">
              <div className="support-step__icon">
                <img src={iconPath(step.icon)} alt="" width={40} height={40} />
                <span className="support-step__num">{i + 1}</span>
              </div>
              <h3>{step.label}</h3>
              <p>{step.text}</p>
              {i < support.steps.length - 1 && <span className="support-step__arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentFlow() {
  const { contentFlow } = siteContent;
  return (
    <section className="section section--ivory" aria-labelledby="content-heading">
      <div className="container">
        <h2 id="content-heading" className="section-heading">
          {contentFlow.title}
        </h2>
        <div className="category-tags">
          {contentFlow.categories.map((cat) => (
            <span key={cat} className="category-tags__item">
              {cat}
            </span>
          ))}
        </div>
        <div className="flow-row" style={{ marginTop: 24 }}>
          {contentFlow.funnel.map((step, i) => (
            <span key={step}>
              <span className="flow-row__item">{step}</span>
              {i < contentFlow.funnel.length - 1 && <span className="flow-row__arrow">→</span>}
            </span>
          ))}
        </div>
        <p className="conclusion">{contentFlow.note}</p>
      </div>
    </section>
  );
}

export function OperationTeam() {
  const { operation } = siteContent;
  return (
    <section className="section" aria-labelledby="operation-heading">
      <div className="container operation-grid">
        <div>
          <h2 id="operation-heading" className="section-heading">
            {operation.title}
          </h2>
          <h3 className="operation-sub">お客様にお願いすること</h3>
          <ul className="operation-list">
            {operation.clientTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          <h3 className="operation-sub">メリット</h3>
          <ul className="operation-list">
            {operation.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <img
          src="/assets/miruhaia/illustrations/miruhaia_illustration_service-flow.svg"
          alt="支援フローのイラスト"
          className="operation-illust"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export function Differentiators() {
  const { differentiators } = siteContent;
  return (
    <section className="section section--ivory" aria-labelledby="diff-heading">
      <div className="container">
        <h2 id="diff-heading" className="section-heading">
          {differentiators.title}
        </h2>
        <div className="card-grid card-grid--3">
          {differentiators.items.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <p className="conclusion">{differentiators.note}</p>
        <img
          src="/assets/miruhaia/illustrations/miruhaia_illustration_small-company-trial.svg"
          alt="中小企業向けの支援イラスト"
          className="diff-illust"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export function ProcessSteps() {
  const { process } = siteContent;
  return (
    <section className="section" aria-labelledby="process-heading">
      <div className="container">
        <h2 id="process-heading" className="section-heading">
          {process.title}
        </h2>
        <ol className="process-steps">
          {process.steps.map((step, i) => (
            <li key={step}>
              <span className="process-steps__num">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FaqAccordion() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section section--ivory" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="section-heading">
          {faq.title}
        </h2>
        <div className="faq-list">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={item.q} className="faq-item">
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
                <div id={panelId} className={`faq-item__panel ${isOpen ? "faq-item__panel--open" : ""}`} hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
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
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container contact__grid">
        <div>
          <h2 id="contact-heading" className="section-heading">
            {contact.title}
          </h2>
          <a href="#contact-form" className="btn btn--primary">
            {contact.cta}
          </a>
        </div>

        <form id="contact-form" className="contact-form card" onSubmit={handleSubmit} noValidate>
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
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img
          src="/assets/miruhaia/logo/miruhaia_logo_primary_outlined.svg"
          alt="ミルハイア"
          width={120}
          height={36}
        />
        <p className="footer__brand">{siteConfig.brandName}</p>
        <p className="footer__company">運営：{siteConfig.companyName}</p>
        <nav className="footer__nav" aria-label="フッターナビゲーション">
          {siteConfig.privacyPolicyUrl ? (
            <a href={siteConfig.privacyPolicyUrl}>プライバシーポリシー</a>
          ) : (
            <span className="footer__muted">プライバシーポリシー（準備中）</span>
          )}
          <a href="#contact">お問い合わせ</a>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} {siteConfig.companyName}</p>
      </div>
    </footer>
  );
}
