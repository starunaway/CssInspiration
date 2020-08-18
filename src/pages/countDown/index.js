import React, {useRef, useState, useEffect} from 'react';
import './style.less';

export default () => {
  const circleRef = useRef();
  const intervalRef = useRef();

  const [percent, setPercent] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleStart = () => {
    if (!isStart) {
      setIsStart(true);
    }
  };

  // 先使用类组件完成
  //    hook 调用时机
  useEffect(() => {
    console.log(isStart);
    if (isStart && !timer) {
      let interval = setInterval(() => {
        console.log('percent', percent);
        if (percent >= 100) {
          setPercent(0);
          setStrokeDashoffset(0);
          clearInterval(timer);
          setTimer(null);
          setIsStart(false);
        } else {
          setPercent(percent + 0.1);
          setStrokeDashoffset((Math.PI * 2 * 55 * percent) / 100);
        }
      }, 3);

      setTimer(interval);

      //   intervalRef.current = timer;
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isStart]);

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
