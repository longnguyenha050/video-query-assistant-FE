import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar';
import MainContents from "./components/MainContent/MainContents";
import Examples from "./components/MainContent/Examples.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <MainContents />
      <Examples /> 
    </>
  )
}

export default App
