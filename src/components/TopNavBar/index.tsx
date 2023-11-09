import React from 'react';
import Styles from './TopNavBar.module.scss';

const TopNavBar: React.FC = () => {
  return (
    <div className={Styles['top-bar-content']}>
      <img width="170" height="40" src="https://simpleghar.com/wp-content/uploads/2021/12/simpleghar-Logo.jpg" />
      <div></div>
    </div>
  )
}

export default TopNavBar