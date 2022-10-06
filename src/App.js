import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
// import { render } from '@testing-library/react';
import DisplayContent from "./components/display";


function App() {
  const [searchTerm, setSearchTerm] = useState('react');
  
  const handleSearchChange = key => {
    //update the search term when user type in the search bar
    setSearchTerm(key);
    console.log("handleSearchChange:",key,searchTerm);
  }

  return (
    <div>
      <SearchBar initSearch={searchTerm} onSearchChange={handleSearchChange}></SearchBar>
      <div className="jumbotron">
        <DisplayContent search={searchTerm}></DisplayContent>
        <hr className="my-4"></hr>
        <a href="https://www.linkedin.com/in/hans-w-a03a94247/"><h5 className="float-right">by Hans Wang</h5></a>
      </div>
    </div>
  );
}

export default App;
