import React, {useState} from 'react';
import ReactState from './reactState';

// const A = () => <div>dsfsdfsdf</div>;

export default () => {
  const [codeSnap, setCodeSnap] = useState();

  return (
    <div>
      <span>代码测试片段</span>
      <button onClick={() => setCodeSnap('ReactState')}>ReactState</button>
      <div>{codeSnap === 'ReactState' && <ReactState></ReactState>}</div>
    </div>
  );
};

// export default () => <div>test</div>;
