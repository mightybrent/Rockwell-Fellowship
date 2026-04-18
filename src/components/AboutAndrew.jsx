import styles from "./components.module.css";
import Image from "next/image";

const credentials = [
  "Georgetown University Coach",
  "15+ Years People Leadership",
  "Fortune 500 & Startup Background",
  "Strategic Thinking Partner",
];

export default function AboutAndrew() {
  return (
    <section className={styles.about2} id="andrew">
      <div className="container">
        <div className={styles.gridMain}>
          <div className={styles.about2Visual}>
            <div className={styles.headshotWrapper}>
              <Image
                src="/Andrew-Headshot-Final-transparent.png"
                alt="Andrew Rockwell"
                fill
                className={styles.headshotImg}
                priority
              />
            </div>
          </div>

          <div className={styles.about2Content}>
            <span className="eyebrow">The strategy and the soul</span>
            <h2 className={styles.about2Title}>
              I’ve spent 15+ years inside the organizations I now help leaders navigate.
            </h2>
            <div className={styles.about2Body}>
              <p>
                I led People and HR functions at scaling companies — from high-growth startups 
                to Fortune 500 organizations. I’ve been in the room when the org restructures. 
                I’ve run the layoff. I’ve watched capable leaders get smaller as their 
                companies got larger, and helped them find their way back.
              </p>
              <br/>
              <p>
                The Rockwell Fellowship is where I do that work out loud. I’m Georgetown-trained 
                in executive coaching and formerly ICF-ACC certified. More importantly, 
                I’ve been coaching leaders informally for most of my career — in hallways, 
                over coffee, and in those 1:1s that went longer than scheduled because 
                something real was happening.
              </p>
              <br/>
              <p>
                I’m direct and warm. I won’t cheerleader you. I’ll help you think.
              </p>
            </div>
            
            <div className={styles.credentialGrid}>
              {credentials.map((c) => (
                <div key={c} className={styles.credentialItem}>
                  <div className={styles.credentialDot} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
