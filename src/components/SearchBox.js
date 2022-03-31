import React from 'react';
import CounterButton from './CounterButton';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <div className='ma3 pa2'>
        <CounterButton className="tc"></CounterButton>
      </div>
      <input
        aria-label='Search Robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;