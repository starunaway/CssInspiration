import React from 'react';
import './style.less';

export default () => [
  <h5 key={1}>账号登录</h5>,
  <div className='input-wrapper' key={2}>
    <input type='text' id='username' autoComplete='off' placeholder=' ' />
    <label htmlFor='username'>用户名</label>
  </div>,
  <div className='input-wrapper' key={3}>
    <input type='text' id='password' autoComplete='off' placeholder=' ' />
    <label htmlFor='password'>密码</label>
  </div>,
];
