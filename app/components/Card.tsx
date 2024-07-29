import styles from '../styles/page.module.css';

interface Type {
  title: string;
  subtext?: string;
  link: string;
}

export default function Card({ title, subtext, link }: Type) {
  return (
    <a href={link} className={styles.card}>
      <p>{title}</p>
      <p>{subtext}</p>
    </a>
  );
}
