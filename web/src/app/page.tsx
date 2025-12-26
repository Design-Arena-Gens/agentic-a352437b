import styles from "./page.module.css";

export default function Home() {
  const anchorName = "Taylor Reed";
  const now = new Date();
  const updatedDate = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(now);
  const updatedTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(now);

  const segments = [
    {
      id: "politics",
      icon: "🏛️",
      title: "U.S. Politics",
      summary:
        "In Washington today, key developments were reported involving government policy and administration decisions. Officials say these measures are aimed at addressing national priorities and could have a significant impact in the coming days.",
      detail:
        "Political analysts are closely watching the response from lawmakers and the public.",
    },
    {
      id: "economy",
      icon: "💼",
      title: "Economy & Business",
      summary:
        "Turning to the U.S. economy, markets showed notable movement as investors reacted to recent economic data. Experts say current trends indicate cautious optimism, while global factors continue to influence market behavior.",
      detail: "Further updates are expected as trading continues.",
    },
    {
      id: "international",
      icon: "🌍",
      title: "International Update",
      summary:
        "On the international front, the United States remains engaged in discussions with global partners on key diplomatic and security issues.",
      detail:
        "Officials emphasize the importance of cooperation and ongoing dialogue to maintain stability.",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.ticker}>
        <span className={styles.tickerLabel}>Live</span>
        <p className={styles.tickerBody}>
          Developing situation monitored closely — verified updates on the hour.
        </p>
      </div>

      <header className={styles.header}>
        <div className={styles.branding}>
          <span className={styles.network}>United States Update 24×7</span>
          <span className={styles.tagline}>Trusted national reporting, nonstop</span>
        </div>
        <div className={styles.dateline}>
          <span className={styles.timestampLabel}>Updated</span>
          <span className={styles.timestampValue}>
            {updatedDate} • {updatedTime}
          </span>
        </div>
      </header>

      <main className={styles.main}>
        <section className={`${styles.block} ${styles.lead}`}>
          <div className={styles.badge}>🔴 Top Story</div>
          <h1 className={styles.leadTitle}>
            Authorities track a developing situation as investigations continue
          </h1>
          <p className={styles.leadSummary}>
            Officials confirm that investigations are ongoing and additional verified
            details are expected as the situation unfolds. Stay with us for confirmed
            updates as they become available.
          </p>
          <div className={styles.anchorSignOff}>
            Good evening. You’re watching United States Update 24×7. I’m{" "}
            <strong>{anchorName}</strong>.
          </div>
        </section>

        <div className={styles.grid}>
          {segments.map((segment) => (
            <section key={segment.id} className={styles.block}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon} aria-hidden="true">
                  {segment.icon}
                </span>
                <h2 className={styles.sectionTitle}>{segment.title}</h2>
              </div>
              <p className={styles.sectionSummary}>{segment.summary}</p>
              <p className={styles.sectionDetail}>{segment.detail}</p>
            </section>
          ))}

          <section className={`${styles.block} ${styles.developing}`}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon} aria-hidden="true">
                🚨
              </span>
              <h2 className={styles.sectionTitle}>Developing News</h2>
            </div>
            <p className={styles.sectionSummary}>
              This is a developing story. Authorities say more information will be released after
              official confirmation.
            </p>
            <p className={styles.sectionDetail}>
              Our newsroom is tracking the situation closely to deliver verified updates in real time.
            </p>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerBell} aria-hidden="true">
            🔔
          </span>
          <div className={styles.footerCopy}>
            <p>
              That’s all for now. For breaking news, trusted reports, and real-time updates, subscribe
              to United States Update 24×7.
            </p>
            <p className={styles.signOff}>I’m {anchorName}. Thank you for watching.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
