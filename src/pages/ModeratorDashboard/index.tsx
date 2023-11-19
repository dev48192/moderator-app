import React from 'react';
// components
import TopNavBar from '../../components/TopNavBar';
import SideBar from '../../components/SideBar';
import ProductSuggestions from '../../components/ProductSuggestions';
// styles
import Styles from './ModeratorDashboard.module.scss';

const ModeratorDashboard: React.FC = () => {
  console.log('Lalakaskajskj----->', process.env.BASE_URL)
  return (
    <div className={Styles['content']}>
      <div className={Styles['top-nav-bar']}>
        <TopNavBar/>
      </div>
      <div className={Styles['body-content']}>
        <div className={Styles['side-bar']}>
          <SideBar/>
        </div>
        <ProductSuggestions/>
      </div>
    </div>
  )
}

export default ModeratorDashboard