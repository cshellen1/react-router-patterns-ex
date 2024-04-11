import React from 'react'
import './App.css'
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  )
}

export default App
