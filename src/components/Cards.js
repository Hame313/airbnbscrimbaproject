import React from 'react'
import Card from '../components/Card';
import data from './data.json';
// import img from './images/image 12.png'
// import img1 from './images/wedding-photography 1.png';
// import img2 from './images/mountain-bike 1.png';
const Cards = () => {
  let cards=data.cards.map((card,index)=>{
    return <Card key={card.id} item={card} />;
  });
  return (
    <div className='cards'>
      {cards}
    </div>
  )
}

export default Cards