import { FaChessPawn } from 'react-icons/fa';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.description}>
        <p className={styles.para}>
          Chess is a webapp for the game of the same name which is created as a fun side project.
          {' '}
        </p>
        <p className={styles.para}>
          The contributor(s) to this project are:
        </p>
        <ul className={styles.contributors}>
          <li className={styles.contributor}>
            <a className={styles.contributorLink} href="https://github.com/shasherazi" target="_blank" rel="noreferrer">
              shasherazi
            </a>
            <FaChessPawn className={styles.contributorIcon} />
          </li>
        </ul>
      </div>
    </div>
  );
}
