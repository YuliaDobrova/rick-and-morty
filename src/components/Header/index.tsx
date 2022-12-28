import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <Link to={'/'}>
        <h1 className={styles.title}>Rick & Morty characters main page</h1>
      </Link>
    </div>
  );
};

export default Header;
