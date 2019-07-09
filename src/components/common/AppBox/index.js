import React from 'react';

import './AppBox.scss';

const AppBox = ({ children, title, className = '', ...rest }) => {
  return (
    <div className={`appbox ${className}`} {...rest}>
      <h2 className='appbox-title'>{title}</h2>
      <div className='appbox-body'>{children}</div>
    </div>
  )
}

export default AppBox;