import { Outlet, Link } from 'react-router-dom';
import chessLogo from '../assets/images/chessLogo.png';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <div className={styles.navLeft}>
            <li className={styles.navItem}>
              <div className={styles.imgDiv}>
                <img src={chessLogo} alt="chess logo" className={styles.navLogo} />
              </div>
            </li>
          </div>
          <div className={styles.navRight}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/board" className={styles.navLink}>Board</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>About</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
