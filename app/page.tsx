import styles from './styles/page.module.css';
import Card, { ComingSoonCard } from './components/Card';

export default function Home() {
  return (
    <main>
      <div className={styles.landing}>
        <div />
        <div>
          <h1>Soffice Studios</h1>
          <p>
            By{' '}
            <a href="https://www.linkedin.com/in/valentina-valverde-1a179227a/">
              Val
            </a>
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#FFFFFF"
        >
          <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
        </svg>
      </div>

      <div className={styles.cardContainer}>
        <Card title={'Calculator'} link="/projects/calculator" />
        <Card title={'To-Do'} link="/projects/to-do" />
        <ComingSoonCard />
      </div>
    </main>
  );
}
