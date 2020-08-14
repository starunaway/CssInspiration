import React, {useRef, useState, useEffect} from 'react';
import './style.less';

export default () => {
  const circleRef = useRef();
  const intervalRef = useRef();

  const [percent, setPercent] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const handleStart = () => {
    if (!isStart) {
      setIsStart(true);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      console.log('percent', percent);
      if (percent >= 100) {
        setPercent(0);
        setStrokeDashoffset(0);
        clearInterval(timer);
        timer = null;
        setIsStart(false);
      } else {
        setPercent((state) => state + 0.1);
        setStrokeDashoffset((Math.PI * 2 * 55 * percent) / 100);
      }
    }, 3);

    intervalRef.current = timer;

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [null, isStart]);

  //   const handleStart = () => {
  //     // console.log(timer);
  //     // if (!timer) {
  //     //   timer = setInterval(() => {
  //     //     if (percent >= 100) {
  //     //       setPercent(0);
  //     //       setStrokeDashoffset(0);
  //     //       clearInterval(timer);
  //     //       timer = null;
  //     //     } else {
  //     //       setPercent((state) => state + 0.1);
  //     //       setStrokeDashoffset((Math.PI * 2 * 55 * percent) / 100);
  //     //     }
  //     //   }, 5);
  //     // }

  //     this.circle.classList = [];
  //     setTimeout(() => {
  //       this.circle.classList = ['start'];
  //     });
  //   };

  console.log('render--', percent, strokeDashoffset);

  return (
    <div className='cicle-container'>
      <div className='circle-wrapper'>
        <svg width={120} height={120} ref={circleRef}>
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
            strokeDashoffset={strokeDashoffset}
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
