import React from 'react';
import './style.less';
export default () => (
  <div className='success-tick-wrapper'>
    <svg width='400' height='400'>
      <circle
        className='circle'
        transform={'rotate(-90 200 200)'}
        fill='none'
        stroke='#68e534'
        strokeWidth='20'
        strokeLinecap='round'
        cx='200'
        cy='200'
        r='190'
      ></circle>
      <polyline
        fill='none'
        stroke='#68e534'
        strokeWidth='24'
        points='88,214 173,284 304,138'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='tick'
      ></polyline>
    </svg>

    <h2>Success</h2>
  </div>
);
