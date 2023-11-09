import React from 'react';
import Styles from './SideBar.module.scss';

const SideBar: React.FC = () => {
  return (
    <div className={Styles['side-bar-content']}>SideBar</div>
  )
}

export default SideBar