import styles from "./components.module.css";

const testimonials = [
  {
    quote:
      '"Working with Andrew has been phenomenal. He creates a space for you to deeply reflect on the log jams that have been impeding your professional and personal growth. Andrew knows the right questions at the right time. I\'ve gained a lot since working with him — and my business has as well."',
    attribution: "CEO & Founder · nationally distributed business · $50–70M ARR",
    initials: "CF",
  },
  {
    quote:
      '"As a result of Andrew\'s coaching I have a better understanding of my unique gifts, my leadership style, and the people I work with. And I have a clear, actionable plan for achieving my desired outcomes."',
    attribution: "Steve · Leader of a Non-Profit",
    initials: "S",
  },
  {
    quote:
      '"Andrew is particularly gifted at synthesizing a variety of thoughts into a coherent and helpful framework for decision making. He helped me see things I had been mulling over for weeks in a new light."',
    attribution: "Sprint participant · 2021",
    initials: "SP",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className={styles.testimonialsHeader}>
          <span className="eyebrow">What Clients Say</span>
          <h2 className={styles.testimonialsTitle}>The work speaks.</h2>
        </div>

        <div className={styles.testimonialsStack}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.quoteCard}>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.quoteFooter}>
                <div className={styles.quoteAvatar}>{t.initials}</div>
                <span className={styles.quoteAttribution}>{t.attribution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
