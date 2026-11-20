'use client';

import { useState } from 'react';

const FIT = [
  {
    tag: 'Leadership Retainer',
    title: 'A steady partner for the long haul',
    desc: 'Every-other-week coaching for one of your leaders or several, with access between sessions when the moment heats up.',
    shape: ['6 months, every other week', '3-month minimum', 'Inquire for pricing'],
    cta: 'See the retainer',
    target: 'offer-retainer'
  },
  {
    tag: 'The Coaching Sprint',
    title: 'A pressing challenge, focused impact',
    desc: 'A six-week coaching sprint on one specific challenge you need to break through quickly, with a check-in 30 days out to see what held.',
    shape: ['About 6 weeks', 'Intake + 5 sessions + 30-day check-in', '$2,500'],
    cta: 'See the sprint',
    target: 'offer-sprint'
  },
  {
    tag: 'Talent Advisory',
    title: 'Expert advice on a people challenge',
    desc: 'A known gap in your people infrastructure, built with someone who has built it before. Scoped to what you need and delivered on a clear timeline.',
    shape: ['Scoped to the work', 'Clear deliverables and timeline'],
    cta: 'See talent advisory',
    target: 'offer-advisory'
  }
];

export default function Page() {
  const [fitIndex, setFitIndex] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSliderChange = (newIndex) => {
    setAnimating(true);
    setTimeout(() => {
      setFitIndex(Number(newIndex));
      setAnimating(false);
    }, 180);
  };

  const handleCtaClick = (targetId) => {
    const card = document.getElementById(targetId);
    if (card) {
      setTimeout(() => {
        card.classList.add('flash');
        setTimeout(() => card.classList.remove('flash'), 1600);
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('first_name') || '';
    const lastName = formData.get('last_name') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    const subject = (`Inquiry from ${firstName} ${lastName}`).trim() || 'Rockwell Fellowship Inquiry';
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:andrew@rockwellfellowship.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const currentFit = FIT[fitIndex];

  return (
    <>
      {/* 1. NAVIGATION */}
      <nav>
        <a href="#top" className="nav-logo">
          <img src="/images/rockwell-fellowship-logo.png" alt="Rockwell Fellowship" style={{ height: "20px", width: "auto", display: "block" }} />
        </a>
        <ul className="nav-links">
          <li><a href="#approach">Approach</a></li>
          <li><a href="#fit">Find Your Fit</a></li>
          <li><a href="#work">Work Together</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#insights">Insights</a></li>
          <li><a href="#contact" className="nav-cta">Get in Touch</a></li>
        </ul>
      </nav>

      {/* 2. HERO */}
      <header className="hero" id="top">
        <div className="hero-left">
          <span className="hero-eyebrow">Leadership Coaching and Talent Advisory</span>
          <h1 className="hero-headline">When the role gets bigger than the person who's in it.</h1>
          <p className="hero-sub">I coach senior leaders just below the executive team, directors and VPs, through the transitions that ask more of them than their last role did: a company scaling, a strategy shifting, a new era of leadership.</p>
          <div className="hero-actions">
            <a href="#work" className="btn-primary">See how we work</a>
            <a href="#about" className="btn-ghost">Learn about Andrew</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-bg"></div>
          <div className="hero-photo-overlay"></div>
          <div className="hero-content">
            <div className="hero-quote-mark">&ldquo;</div>
            <p className="hero-quote">My work usually starts when an executive can feel that a couple of their leaders are being asked for more than they've had to give before. The cost of not helping them grow into it is material to their business.</p>
            <p className="hero-quote-attr">— Andrew Smith, Founder</p>
            <div className="hero-stat-row">
              <div>
                <div className="hero-stat-num">15+</div>
                <div className="hero-stat-label">Years in org leadership</div>
              </div>
              <div>
                <div className="hero-stat-num">Fortune 500</div>
                <div className="hero-stat-label">to venture-backed startups</div>
              </div>
              <div>
                <div className="hero-stat-num">Georgetown &amp; ICF</div>
                <div className="hero-stat-label">Credentialed executive coach</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. POV STRIP */}
      <div className="pov-strip" id="approach">
        <div className="pov-photo-bg"></div>
        <div className="pov-photo-overlay"></div>
        <div className="pov-inner">
          <div>
            <span className="section-eyebrow">Approach</span>
            <div className="gold-rule"></div>
            <h2 className="pov-headline">Real partnership. <em>Real impact.</em></h2>
          </div>
          <div>
            <p className="pov-body">I coach because I know the toll that growing behind the pace of organizations takes on leaders. I came up inside organizations running HR and talent strategy through hypergrowth, layoffs, leadership transitions, and the kind of ambiguity that doesn't fit in a framework.</p>
            <p className="pov-body" style={{ marginTop: "16px" }}>When you work with me, you get a partner, coach, and an operator who understands organizational reality and won't let you stay comfortable with a story that isn't serving you anymore.</p>
          </div>
        </div>
      </div>

      {/* 3b. WHO IT IS FOR */}
      <section className="who-section">
        <div className="who-photo-bg"></div>
        <div className="who-photo-overlay"></div>
        <div className="who-inner">
          <span className="section-eyebrow">Right Fit</span>
          <h2 className="section-headline">Who this is <em>actually</em> for.</h2>
          <p style={{ fontSize: "17px", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7, maxWidth: "100%", margin: "0 0 48px", textAlign: "left" }}>
            You're good at your job. You've been good at it for a while. Something shifted.<br /><br />
            This isn't for people who need to be taught how to lead. It's for people who already know how, and have reached the point where more information isn't what's missing.
          </p>
          <div className="who-grid">
            <div className="who-col"><span className="who-num">1</span><p className="who-text">You've been promoted into a role your track record hasn't fully prepared you for.</p></div>
            <div className="who-col"><span className="who-num">2</span><p className="who-text">You're running a bigger mandate the way you ran the old one, and you can feel the gap.</p></div>
            <div className="who-col"><span className="who-num">3</span><p className="who-text">You're at a transition or decision point and need real space to think it through.</p></div>
            <div className="who-col"><span className="who-num">4</span><p className="who-text">You've been losing perspective to the role, and you want it back.</p></div>
          </div>
        </div>
      </section>

      {/* 4. FIND YOUR FIT */}
      <section className="fit-section" id="fit">
        <div className="section-inner">
          <span className="section-eyebrow">Find Your Fit</span>
          <h2 className="section-headline">What kind of support do you, or your leaders, <em>need right now?</em></h2>
          <p className="fit-sub">Slide to where you are. Each stop points to the way we would work together.</p>

          <div className="fit-stops" role="tablist" aria-label="Type of support">
            <button
              type="button"
              className={`fit-stop ${fitIndex === 0 ? 'active' : ''}`}
              onClick={() => handleSliderChange(0)}
              role="tab"
              aria-selected={fitIndex === 0}
            >
              <strong>Ongoing partner</strong>
              <small style={{ display: "block", fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>For a sustained transition</small>
            </button>
            <button
              type="button"
              className={`fit-stop ${fitIndex === 1 ? 'active' : ''}`}
              onClick={() => handleSliderChange(1)}
              role="tab"
              aria-selected={fitIndex === 1}
            >
              <strong>Focused sprint</strong>
              <small style={{ display: "block", fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>For one pressing challenge</small>
            </button>
            <button
              type="button"
              className={`fit-stop ${fitIndex === 2 ? 'active' : ''}`}
              onClick={() => handleSliderChange(2)}
              role="tab"
              aria-selected={fitIndex === 2}
            >
              <strong>Talent advisory</strong>
              <small style={{ display: "block", fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>For an organizational need</small>
            </button>
          </div>

          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={fitIndex}
            onChange={(e) => handleSliderChange(e.target.value)}
            className="fit-range"
            style={{ '--fill': `${(fitIndex / 2) * 100}%` }}
            aria-label="Support type slider"
          />

          <div className={`fit-result ${animating ? 'swap' : ''}`} id="fitResult">
            <div>
              <span className="fit-tag">{currentFit.tag}</span>
              <h3 className="fit-title">{currentFit.title}</h3>
              <p className="fit-desc">{currentFit.desc}</p>
            </div>
            <div className="fit-shape">
              <span className="fit-shape-label">Engagement shape</span>
              <ul className="fit-shape-list">
                {currentFit.shape.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
              <a
                href={`#${currentFit.target}`}
                className="fit-cta"
                onClick={() => handleCtaClick(currentFit.target)}
              >
                {currentFit.cta} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WORK TOGETHER */}
      <section className="offers-section" id="work">
        <div className="section-inner">
          <span className="section-eyebrow">Work Together</span>
          <h2 className="section-headline">Three ways to <em>engage.</em></h2>
          <div className="offers-grid">

            <div className="offer-card" id="offer-retainer">
              <div className="offer-card-header">
                <span className="offer-tag">Leadership Retainer</span>
                <h3 className="offer-title">A steady partner for the long haul.</h3>
              </div>
              <p className="offer-desc">Most engagements start with an executive about what challenges they or their leaders are tackling, and what elevating their leadership unlocks for the rest of the company. I coach those leaders one-on-one, every other week, with access between sessions when the moment heats up. You can bring me in for one leader or several.</p>
              <ul className="offer-specs">
                <li>6 months, every other week</li>
                <li>3-month minimum</li>
                <li>Inquire for pricing</li>
                <li>One leader or several</li>
              </ul>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ03GH7zfPXwtbkP7fxLzX6XoDsNbObBWvnwwSnmONOUmGvme6EjUYUzloeZ-drtIQX_kvVIrUDx"
                target="_blank"
                rel="noopener noreferrer"
                className="offer-cta"
              >
                Start a conversation &rarr;
              </a>
            </div>

            <div className="offer-card featured" id="offer-sprint">
              <div className="offer-badge">Popular</div>
              <div className="offer-card-header">
                <span className="offer-tag">The Coaching Sprint</span>
                <h3 className="offer-title">A pressing challenge, focused impact.</h3>
              </div>
              <p className="offer-desc">When there's a specific leadership hurdle you or a leader on your team needs to break through, and six months feels like the wrong container. Six weeks, focused on one thing. We diagnose, sprint, and check back 30 days later to see what held.</p>
              <ul className="offer-specs">
                <li>About 6 weeks</li>
                <li>Intake + 5 sessions + 30-day check-in</li>
                <li>$2,500</li>
                <li>Focused on one specific challenge</li>
              </ul>
              <p className="offer-note">Want to keep going? Sprint clients who continue within 30 days can roll into a six-month engagement at a reduced rate.</p>
              <a
                href="https://calendar.app.google/SoSykW6EBNPYzrJy5"
                target="_blank"
                rel="noopener noreferrer"
                className="offer-cta"
              >
                Book a sprint intro call &rarr;
              </a>
            </div>

            <div className="offer-card" id="offer-advisory">
              <div className="offer-card-header">
                <span className="offer-tag">Talent Advisory</span>
                <h3 className="offer-title">Expert advice on a people challenge.</h3>
              </div>
              <p className="offer-desc">For founders and executives who need an experienced people leader in their corner without hiring a full-time executive. Org design, performance management, executive team dynamics, or navigating high-stakes talent decisions.</p>
              <ul className="offer-specs">
                <li>Scoped to the work</li>
                <li>Clear deliverables and timeline</li>
              </ul>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ03GH7zfPXwtbkP7fxLzX6XoDsNbObBWvnwwSnmONOUmGvme6EjUYUzloeZ-drtIQX_kvVIrUDx"
                target="_blank"
                rel="noopener noreferrer"
                className="offer-cta"
              >
                Talk through your challenge &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ABOUT */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-photo-box">
            <img src="/images/Andrew-Headshot-Final-transparent.png" alt="Andrew Smith, founder of The Rockwell Fellowship" />
            <div className="about-accent-bar"></div>
          </div>
          <div>
            <span className="section-eyebrow">About</span>
            <div className="gold-rule"></div>
            <h2 className="about-name">Andrew Smith</h2>
            <span className="about-title">Founder, The Rockwell Fellowship</span>
            <div className="about-body">
              <p>I led People and HR teams at scaling companies, including high-growth startups and Fortune 500 organizations. I've been in the room when the organization restructures. I've run the layoff. I've watched capable leaders get smaller as their companies got larger, and helped them find their way back. I've done that work quietly for years. The Rockwell Fellowship is where I do it out loud.</p>
              <p>I'm Georgetown-certified in executive coaching and ICF credentialed - PCC. More importantly, I've coached leaders externally for years, and recently internally as a senior HR leader with an operator’s experience. I know the impact leaders have when they break through what’s holding them back and their teams and businesses flourish as a result.</p>
              <p>I'm honest, direct, and I’m in your corner. I won’t just tell you what you want to hear. I'll push you to grow.</p>
            </div>
            <div className="about-credentials">
              <span className="credential-pill">Georgetown-Certified Executive Coach</span>
              <span className="credential-pill">ICF Professional Certified Coach (PCC)</span>
              <span className="credential-pill">M.S. Industrial-Organizational Psychology</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="section-inner">
          <span className="section-eyebrow">What Clients Say</span>
          <h2 className="section-headline">Not before-and-after. <em>During and after.</em></h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-text">Working with Andrew has been phenomenal. He creates a space for you to deeply reflect on the logjams that have been impeding your professional and personal growth. He knows the right questions at the right time to guide you through a constructive process of self-discovery.</p>
              <p className="testimonial-attr">David</p><p className="testimonial-role">CEO and Founder</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-text">As a result of Andrew's coaching I have a better understanding of my unique gifts, leadership skills, and capabilities. I have a clearer sense of those with whom I work — and how to work with them more effectively. And I have a clear, actionable plan for achieving my desired outcomes.</p>
              <p className="testimonial-attr">Steve</p><p className="testimonial-role">Non-profit leader</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-text">For anyone who desires not a list of the latest steps and tips but instead real transformation, I highly recommend Andrew Smith.</p>
              <p className="testimonial-attr">Susannah</p><p className="testimonial-role">Founder and CEO, Non-profit</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-text">Andrew was vital before, during, and after my role transition. He helped me develop my True North, which served as an anchor for my leadership without losing my authentic edge. Five years later, his strategic guidance and ability to hold space remain essential.</p>
              <p className="testimonial-attr">Jesse</p><p className="testimonial-role">COO</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-text">With Andrew's help, I was able to find and build a solution 2–3 times faster than I would have on my own. We also explored ways to utilize my strengths to make a greater impact with my team.</p>
              <p className="testimonial-attr">Isaac</p><p className="testimonial-role">Founder + CEO, Small business</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-text">Andrew's approach to coaching helps me solve challenges, and also helps me evolve my own thought processes and frameworks.</p>
              <p className="testimonial-attr">Cat</p><p className="testimonial-role">CTO, Scaling startup</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7b. ROCKWELL INSIGHTS (Substack) */}
      <section className="insights-section" id="insights">
        <div className="insights-inner">
          <span className="section-eyebrow">Rockwell Fellowship Insights</span>
          <h2 className="section-headline">Writing from the <em>layer below the top.</em></h2>
          <p className="section-body" style={{ maxWidth: "100%" }}>Insights for the leaders carrying the next era of a company, and the executives deciding whether to bet on them. Sometimes personal. Sometimes professional. Rarely boring.</p>
          <div className="insights-grid">
            <div>
              <a className="insights-card" id="startHere" href="https://rockwellfellowship.substack.com/p/the-paradoxes-of-that-shiny-new-role" target="_blank" rel="noopener noreferrer">
                <span className="insights-card-tag">Start here</span>
                <h3 className="insights-card-title">The Paradoxes of That Shiny New Role</h3>
                <p className="insights-card-desc">Four tensions next-level leaders run into when the job gets bigger than the last one.</p>
                <span className="insights-card-link">Read the essay &rarr;</span>
              </a>
              <a className="insights-archive" href="https://rockwellfellowship.substack.com/archive" target="_blank" rel="noopener noreferrer">Browse all essays &rarr;</a>
            </div>
            <div className="insights-subscribe">
              <span className="insights-sub-label">Subscribe</span>
              <h3 className="insights-sub-title">New essays in your inbox.</h3>
              <p className="insights-sub-desc">Free, on Substack. Unsubscribe any time.</p>
              <form className="insights-form" action="https://rockwellfellowship.substack.com/subscribe" method="get" target="_blank">
                <label className="form-label" htmlFor="sub-email" style={{ position: "absolute", left: "-9999px" }}>Email</label>
                <input id="sub-email" name="email" type="email" placeholder="you@company.com" required />
                <button type="submit">Subscribe &rarr;</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="gold-rule" style={{ margin: "0 auto 20px" }}></div>
          <h2 className="contact-headline">Ready to stop <em>circling?</em></h2>
          <p className="contact-sub">
            {submitted ? "Thanks. Your note is in, and I'll be in touch soon." : "Book a 30-minute intro call, or send a note about what's on your mind."}
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ03GH7zfPXwtbkP7fxLzX6XoDsNbObBWvnwwSnmONOUmGvme6EjUYUzloeZ-drtIQX_kvVIrUDx"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-book"
          >
            Book a 30-minute intro call
          </a>
          <div className="contact-or">or send a note</div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="f-first">First Name</label>
                <input id="f-first" name="first_name" type="text" required />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="f-last">Last Name</label>
                <input id="f-last" name="last_name" type="text" />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" required />
            </div>
            <div className="form-field form-textarea">
              <label className="form-label" htmlFor="f-msg">What's on your mind?</label>
              <textarea id="f-msg" name="message" rows={4}></textarea>
            </div>
            <div className="form-submit">
              <button type="submit">Send a note &rarr;</button>
            </div>
          </form>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer>
        <img src="/images/rockwell-fellowship-logo.png" alt="Rockwell Fellowship" style={{ height: "20px", width: "auto", display: "block" }} />
        <div className="footer-links">
          <a href="https://rockwellfellowship.substack.com/" target="_blank" rel="noopener noreferrer">Rockwell Insights on Substack</a>
          <span className="footer-note">© 2026 · rockwellfellowship.com</span>
        </div>
      </footer>
    </>
  );
}
