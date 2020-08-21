import React, {useState, useEffect} from 'react';
import './style.less';

export default () => {
  const size = 120;
  const stroke = 10;

  const initialSeconds = 3;

  const radius = size / 2 - stroke / 2;
  const circleOffset = size / 2;
  const circumference = radius * 2 * Math.PI;

  const [percent, setPercent] = useState(100);
  const [progress, setProgress] = useState(0);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isStart, setIsStart] = useState(false);

  const handleStart = () => {
    if (!isStart) {
      setIsStart(true);
    }
  };

  // todo 计算规则
  useEffect(() => {
    let interval;
    if (isStart) {
      interval = setInterval(() => {
        let newPercent = percent - 1 / 5;
        if (newPercent <= 0) {
          clearInterval(interval);
          setIsStart(false);
          setPercent(100);
        } else {
          setPercent(newPercent);
          if (newPercent <= 0.2) {
            setSeconds(0);
            setProgress(circumference);
          } else {
            setSeconds(Math.ceil((newPercent * initialSeconds) / 100));
            setProgress(circumference - (circumference * percent) / 100);
          }
        }
      }, (initialSeconds * 1000) / 100 / 5);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isStart, percent]);

  return (
    <div className='cicle-container'>
      <div className='circle-wrapper'>
        <svg width={size} height={size}>
          <circle
            fill='transparent'
            r={radius}
            cx={circleOffset}
            cy={circleOffset}
            strokeWidth={stroke}
            stroke='#270b58'
          />
          <circle
            id='circle'
            fill='transparent'
            r={radius}
            cx={circleOffset}
            cy={circleOffset}
            strokeWidth={stroke}
            stroke='#f36f21'
            strokeLinecap='round'
            strokeDasharray={circumference}
            strokeDashoffset={progress}
          />
        </svg>
        <span>{seconds}</span>
      </div>
      <button type='button' onClick={handleStart}>
        开始计时
      </button>
    </div>
  );
};
