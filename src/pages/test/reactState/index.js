import React, {useState} from 'react';

function Father() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue((v) => v + 1)}> click: {value}</button>
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
