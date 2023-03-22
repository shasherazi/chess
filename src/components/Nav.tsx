import { Outlet, Link } from 'react-router-dom';
import chessLogo from '../assets/images/chessLogo.jpg';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <Link to="/chess" className={styles.navLeft}>
            <img src={chessLogo} alt="chess logo" className={styles.navLogo} />
            <h1 className={styles.navTitle}>Chess</h1>
          </Link>
          <div className={styles.navRight}>
            <li className={styles.navItem}>
              <Link to="/chess" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/chess/board" className={styles.navLink}>Board</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/chess/about" className={styles.navLink}>About</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
