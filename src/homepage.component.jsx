import React from 'react';

import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HAT</h1>
          <span className='subtitle'>Shop NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKET</h1>
          <span className='subtitle'>Shop NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>SNEAKERS</h1>
          <span className='subtitle'>Shop NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMEENS</h1>
          <span className='subtitle'>Shop NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>MENS</h1>
          <span className='subtitle'>Shop NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;