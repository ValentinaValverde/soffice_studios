import styles from '../styles/page.module.css';

interface Type {
  title: string;
  subtext?: string;
}

export default function Card({ title, subtext }: Type) {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <p>{subtext}</p>
    </div>
  );
}
