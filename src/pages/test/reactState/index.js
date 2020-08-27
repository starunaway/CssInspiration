import React, {useState} from 'react';

function Father() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        react
        只会处理处理委托给react处理的数据，如果数据状态是单独管理的，react组件在重新渲染的时候，只能拿到组件的初始状态
      </p>
      <p>组件自己保存的当前状态在react重新渲染的时候会丢失</p>
      <button onClick={() => setValue((v) => v + 1)}> Father click: {value}</button>
      <Child value={value}></Child>
    </div>
  );
}

function Child({value}) {
  let clickTimes = 0;

  const [clickTime, setClickTime] = useState(0);
  const hanldeClick = (event) => {
    clickTimes++;
    document.getElementById('child').innerHTML = `child click ${clickTimes}`;
  };

  return (
    <div>
      <button onClick={() => setClickTime((v) => v + 1)}>useState click: {clickTime}</button>

      <button id='child' onClick={hanldeClick}>
        child click:
      </button>
      <span>father:{value} </span>
    </div>
  );
}

export default Father;
