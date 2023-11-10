import React from 'react'
import Styles from './SideBar.module.scss';

const Categories: React.FC<{categories: any}> = ({categories}) => {
  return (
    <div className={Styles['category']}>
        {categories['category_name']}
        {categories['childs'] && categories['childs'].length > 0 ? categories['childs'].map((category, index)=>(
            <Categories key={`${category['category_id']}-${index}`} categories={category} />
        )): null}
    </div>
  )
}

export default Categories