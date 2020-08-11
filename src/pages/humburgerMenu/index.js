import React from 'react';
import './style.less';

export default () => {
  return (
    <div className='menu'>
      <input type='checkbox' id='toggler' />
      <label htmlFor='toggler'>
        <div className='menu-icon'>
          <span className='menu-icon-line-1' />
          <span className='menu-icon-line-2' />
        </div>
      </label>
      <div className='menu-list'>
        {'123456'.split('').map((v) => (
          <li key={v}>
            {v}
            -items
          </li>
        ))}
      </div>
    </div>
  );
};
