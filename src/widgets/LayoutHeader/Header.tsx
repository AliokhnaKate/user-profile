import {FaHome} from 'react-icons/fa';
import styles from '../../App.module.css';

function Header () {
  return (
    <>
      <header className={styles.header}>
        <a className={styles.logo} href={'/'}>
          <FaHome size={24} />
          <div className={styles.logoText}>Логотип</div>
        </a>
        <form action='/search' method="get">
          <input type="text" placeholder="Поиск" />
          <button type="submit">Найти</button>
        </form>
      </header>
    </>
  )
}

export default Header;