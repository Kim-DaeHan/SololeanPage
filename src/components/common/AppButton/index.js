import React from 'react';

import './AppButton.scss';

const AppButton = ({ className, ...rest }) => {
  return (
    <button className={`appbutton ${className}`} {...rest} />
  );
}

export default AppButton;