import React from 'react';
import { AppButton } from '../..';

import './SearchInput.scss';

import ic_search from '../../../images/ic_search.png';

const SearchInput = ({ onSearch, ...rest }) => {
  return (
    <div className='search-input-wrapper'>
      <input type ='text' className='search-input' placeholder='Search...' {...rest}/>
      <AppButton className='search-input-btn' onClick={onSearch}>
        <img src={ic_search} alt='search'></img>
      </AppButton>
    </div>
  );
}

export default SearchInput;