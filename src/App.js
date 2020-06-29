import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import SingleGif from './components/SingleGif'
import { Route } from 'wouter'

function App() {  
  return (
    <div className="App">
      <section className="App-content">
        <Route
          path="/gif/:id"
          component={SingleGif}
        />
        <ListOfGifs keyword="peace" />
      </section>
    </div>
  )
}

export default App
