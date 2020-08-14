import './style.less';
import React from 'react';

export default () => {
  return (
    <div className='flipping-card'>
      <div className='card-container' key={1}>
        <div className='cover'>COVER</div>
        <div className='back'>BACK</div>
      </div>
      ,
      <div className='card-container' key={2}>
        <div className='cover'>COVER</div>
        <div className='back'>BACK</div>
      </div>
      ,
      <div className='card-container' key={3}>
        <div className='cover'>COVER</div>
        <div className='back'>BACK</div>
      </div>
      ,
    </div>
  );
};
