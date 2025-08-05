import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ 
  onSearch, 
  placeholder = "Search videos...", 
  disabled = false,
  loading = false 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className="search-input"
        />
        
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="clear-button"
            disabled={disabled || loading}
          >
            ✕
          </button>
        )}
        
        <button
          type="submit"
          disabled={!query.trim() || disabled || loading}
          className="search-button"
        >
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle 
                cx="11" 
                cy="11" 
                r="8" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <path 
                d="m21 21-4.35-4.35" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
