import {FaHome} from 'react-icons/fa';
import styles from './Header.module.css';
import {useRef, useState, type ChangeEvent, type FormEvent} from 'react';
import {useMatch, useNavigate} from 'react-router-dom';
import {useCurrentRoute} from '../../../shared/lib/hooks/useCurrentRoute';
import {ROUTES} from '../lib/constants';

export interface HeaderProps {
    children: React.ReactNode;
}

function Header ({children}: HeaderProps) {
  const [newSearchText, setNewSearchText] = useState('');

  const userMatch = useMatch(ROUTES.USER);
  const albumMatch = useMatch(ROUTES.ALBUM);

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handle = useCurrentRoute();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSearchText(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newSearchText && handle?.searchPattern && userMatch) {
      const userId = userMatch?.params.id;
      const searchUrl = handle.searchPattern.replace(':id', userId!);
      navigate(`${searchUrl}?query=${newSearchText}`);
    } else if (newSearchText && handle?.searchPattern && albumMatch) {
      const albumId = albumMatch?.params.id;
      const searchUrl = handle.searchPattern.replace(':id', albumId!);
      navigate(`${searchUrl}?query=${newSearchText}`);
    } else {
      const searchUrl = handle?.searchPattern;
      navigate(`${searchUrl}?query=${newSearchText}`);
    }
  }
  return (
      <header className={styles.header}>
        <a className={styles.logo} href={'/'}>
          <FaHome size={24} />
          <div className={styles.logoText}>Логотип</div>
        </a>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} value={newSearchText} type="text" name='query' placeholder="Поиск" onChange={handleChange} />
          <button type="submit">Поиск</button>
        </form>
        <div>
          {children}
        </div>
      </header>
  )
}

export default Header;