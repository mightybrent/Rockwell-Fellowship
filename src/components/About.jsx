import styles from "./components.module.css";

const profiles = [
  {
    bold: "The exec who built something real,",
    rest: " but now leads 40 people the way they led 4 and can feel the drag.",
  },
  {
    bold: "The VP promoted into a role",
    rest: " that requires something their track record can't fully prepare them for.",
  },
  {
    bold: "The leader who's been losing themselves",
    rest: " to the role and is ready to reclaim some perspective before that gap gets wider.",
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.gridMain}>
          <div className={styles.aboutContent}>
            <span className="eyebrow">The Rockwell Fellowship POV</span>
            <h2 className={styles.aboutTitle}>
              Not Cheerleading. Not Fluff. <br/>
              Real partnership and impact.
            </h2>
            <div className={styles.aboutIntro}>
              <p>
                I coach because I know the toll that growing behind the pace of organizations takes on leaders. 
                I came up inside organizations running HR and talent strategy through hypergrowth, layoffs, 
                leadership transitions, and the kind of ambiguity that doesn't fit in a framework.
              </p>
              <br/>
              <p>
                When you work with me, you get a partner, coach, and advisor who understands 
                organizational reality and won't let you stay comfortable with a story that 
                isn't serving you anymore.
              </p>
            </div>
          </div>

          <div className={styles.aboutSidebar}>
            <h3 className={styles.sidebarTitle}>Who is this actually for?</h3>
            <p className={styles.sidebarSub}>
              You're good at your job. You've been good at it for a while. Something shifted.
            </p>
            <div className={styles.aboutList}>
              {profiles.map((item, i) => (
                <div key={i} className={styles.aboutItem}>
                  <p className={styles.aboutItemText}>
                    <strong>{item.bold}</strong> {item.rest}
                  </p>
                </div>
              ))}
            </div>
            <p className={styles.sidebarFooter}>
              This isn't for people who need to be taught how to lead. It's for people who already know how and have reached the point where more information isn't what's missing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
