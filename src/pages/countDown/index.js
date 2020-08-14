import React, {useRef, useState, useEffect} from 'react';
import './style.less';

export default () => {
  const circleRef = useRef();

  const handleStart = () => {
    console.log(this.timer);
    this.timer = 100;
    if (!this.timer) {
      this.timer = setInterval(() => {
        const {percent} = this.state;
        console.log(percent);
        if (percent >= 100) {
          console.log('end', percent);
          this.setState({percent: 0, strokeDashoffset: 0}, () => {
            const a = this.state;
            console.log('reset', a.percent);
          });

          clearInterval(this.timer);
          this.timer = null;
        } else {
          this.setState({
            percent: percent + 0.1,
            strokeDashoffset: (Math.PI * 2 * 55 * percent) / 100,
          });
        }
      }, 5);
    }

    this.circle.classList = [];
    setTimeout(() => {
      this.circle.classList = ['start'];
    });
  };

  return (
    <div className='cicle-container'>
      <div className='circle-wrapper'>
        <svg
          width={120}
          height={120}
          ref={(ref) => {
            this.circle = ref;
          }}
        >
          <circle fill='transparent' r={55} cx={60} cy={60} strokeWidth={5} stroke='red' />
          <circle
            id='circle'
            fill='transparent'
            r={55}
            cx={60}
            cy={60}
            strokeWidth={5}
            strokeLinecap='round'
            stroke='#303131'
            strokeDasharray={Math.PI * 2 * 55}
            strokeDashoffset={0}
          />
        </svg>
        <span className='time' />
      </div>
      <button type='button' onClick={handleStart}>
        开始计时
      </button>
    </div>
  );
};
