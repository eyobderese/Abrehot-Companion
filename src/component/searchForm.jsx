import React, { useState } from 'react';
import style from './searchForm.module.css'

function SearchInput() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query)
  };

  return (
    <div className={style.form_box}>    
      
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className={style.input}
      />
      <button className={style.searchButton} type="submit" onClick={handleSubmit}>Search</button>
    
    </div>

  );
}

export default SearchInput;