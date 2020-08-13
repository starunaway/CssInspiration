import React from 'react';
import './style.less';

export default () => (
  <div className='login-html'>
    <h5>账号登录</h5>
    <div className='input-wrapper'>
      <input type='text' id='username' autoComplete='off' placeholder=' ' />
      <label htmlFor='username'>用户名</label>
    </div>
    <div className='input-wrapper'>
      <input type='text' id='password' autoComplete='off' placeholder=' ' />
      <label htmlFor='password'>密码</label>
    </div>
  </div>
);
