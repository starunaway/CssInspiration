import React, {useState, useEffect} from 'react';
import './style.less';

export default () => {
  const [percent, setPercent] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const handleStart = () => {
    if (!isStart) {
      setPercent(0);
      setStrokeDashoffset(0);
      setIsStart(true);
    }
  };

  useEffect(() => {
    console.log(isStart);

    let interval;
    if (isStart) {
      interval = setInterval(() => {
        console.log(isStart, percent);
        if (percent >= 100) {
          clearInterval(interval);
          setIsStart(false);
        } else {
          setPercent(percent + 0.1);
          setStrokeDashoffset((Math.PI * 2 * 55 * percent) / 100);
        }
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isStart, percent]);

  return (
    <div className='cicle-container'>
      <div className='circle-wrapper'>
        <svg width={120} height={120}>
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
