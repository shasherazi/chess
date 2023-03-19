import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Link to="/board" className={styles.button}>
        Play now!
      </Link>
    </div>
  );
}
