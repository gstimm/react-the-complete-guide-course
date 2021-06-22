import React from 'react';

import HeaderCartButton from '../HeaderCartButton';

import mealsImage from '../../../assets/meals.jpg';
import styles from './styles.module.css';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="HeaderImage" />
      </div>
    </>
  );
};

export default Header;
