import styles from "./components.module.css";
import Image from "next/image";

const credentials = [
  "Georgetown University · coaching",
  "Former ICF-ACC",
  "15+ years HR & people leadership",
  "Fortune 500 + high-growth startups",
];

export default function About2() {
  return (
    <section className={styles.about2} id="andrew">
      <div className="container">
        <div className={styles.about2Grid}>
          <div className={styles.about2Content}>
            <span className="eyebrow">About Andrew</span>
            <h2 className={styles.about2Title}>
              I've spent 15+ years inside the organizations I now help leaders navigate.
            </h2>
            <p className={styles.about2Body}>
              I led People and HR functions at scaling companies — including
              high-growth startups and Fortune 500 organizations. I've been in
              the room when the org restructures. I've run the layoff. I've
              watched capable leaders get smaller as their companies got larger,
              and helped them find their way back. I've done that work quietly
              for years. The Rockwell Fellowship is where I do it out loud.
            </p>
            <p className={styles.about2Body}>
              I'm Georgetown-trained in executive coaching and formerly
              ICF-ACC certified. More importantly, I've been coaching leaders
              informally for most of my career — in hallways, over coffee, in
              1:1s that went longer than scheduled because something real was
              happening.
            </p>
            <p className={styles.about2Body}>
              I'm direct and warm. I won't cheerleader you. I'll help you think.
            </p>
            <div className={styles.credentialTags}>
              {credentials.map((c) => (
                <span key={c} className={styles.credentialTag}>{c}</span>
              ))}
            </div>
          </div>

          <div className={styles.about2ImageWrapper}>
            <Image
              src="/Andrew-Headshot-Final-transparent.png"
              alt="Andrew Rockwell"
              width={600}
              height={600}
              className={styles.about2Image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

