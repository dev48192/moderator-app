import React from 'react'
import StartFillIcon from '../../assets/StarFillIcon';
import StarHalfIcon from '../../assets/StarHalfIcon';
import StarIcon from '../../assets/StarIcon';
import Styles from './RatingCount.module.scss';

const RatingCount: React.FC<{id: string; rating: number; rating_count:number}> = ({id, rating, rating_count}) => {
    const fullStar = Math.floor(rating);
    const halfStar = Math.ceil(rating) - Math.floor(rating);
    const remainingStar = 5 - (fullStar + halfStar);

    const getFormattedNumber = (number: number) => {
        return number.toLocaleString('en-US', {
            maximumFractionDigits: 0,
          })
    } ;
  return (
    <div title={`${rating} out of 5 stars`} className={Styles['rating-container']}>
        {[...Array(fullStar)].map((_v,index)=>(
            <StartFillIcon key={`fill-${id}-${index}`} className={Styles['star-icon']} />
        ))}
        {[...Array(halfStar)].map((_v,index)=>(
            <StarHalfIcon key={`half-${id}-${index}`} className={Styles['star-icon']} />
        ))}
        {[...Array(remainingStar)].map((_v, index)=>(
            <StarIcon key={`empty-${id}-${index}`} className={Styles['star-icon']} />
        ))}
        <div className={Styles['rating-count']}>{getFormattedNumber(rating_count)}</div>
    </div>
  )
}

export default RatingCount