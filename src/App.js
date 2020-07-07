import React from 'react'
import './App.css'
import logo from './logo.svg'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import { Route, Link } from 'wouter'

function App() {  
  return (
    <div className="App">
      <section className="App-content">
        <div className="App-header">
          <Link to="/">
            <img width="100" src={logo} alt="Giffy app" />
          </Link>
        </div>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />
        <Route
          path="/gif/:id"
          component={Detail}
        />
      </section>
    </div>
  )
}

export default App
