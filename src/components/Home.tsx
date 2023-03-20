import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('background');

    return () => {
      document.body.classList.remove('background');
    };
  }, []);

  return (
    <div className={styles.home}>
      <Link to="/board" className={styles.button}>
        Play now!
      </Link>
    </div>
  );
}
