import React from 'react';
import star from './images/star.svg';

const Card = ( {item}) => {
  
 let badgeText;
 if (item.openSpots === 0){
  badgeText="SOLD OUT"
 }else if(item.online === "online"){
  badgeText="ONLINE"
 }
  return (
    <section>
   <div className='card'>
    {badgeText && <div className='openSpots'>{ badgeText}</div>}
    <img className='card__img' src={`../images/${item.img}`} alt="img" />
    <div className='card__stats'>
        <p className='card__stat-rating'>
        <img src={star} alt="star" />
        <span className='card__rating'>{item.rating}</span>
        <span className='card__number'>{item.number}</span>
        <span className="card__country">{item.country}</span>
        <span className='card__online' >{item.online}</span>
        </p>
        <p className='card__info'>{item.info}</p>
    <p className="card__price"><span className='card__bold'>{item.price}</span> / person</p>
    </div>
   </div>
   </section>
  )
}

export default Card