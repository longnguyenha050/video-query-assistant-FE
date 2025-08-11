import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { Space } from 'antd';

const HomePage = () => {
    return (
        <>
        <SearchBar />
        <div></div>
        <br />
        <SearchResults />
        </>
    );
}

export default HomePage;
