import React from 'react';
import PromotionAnimation from './Animation';
import Enroll from './Enroll';


const Promotion = () => {
  return (
    <div className='promotion_wrapper' style={{background: '#ffffff'}}>
      <div className='container'></div>
        <PromotionAnimation/>
        <Enroll/>
    </div>
  );
};
export default Promotion;
