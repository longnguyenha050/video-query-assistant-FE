import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults"
function App() {

  return (
    <React.Fragment>
      <Header />
      <SearchResults />
    </React.Fragment>
  )
}

export default App