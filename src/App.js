import React from 'react'
import './App.css'
import logo from './logo.svg'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import Context from './context/StaticContext'

import { Route, Link } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'

function App() {  
  return (
    <Context.Provider value={{name:'paola', learningReact:true}}>
      <div className="App">
        <section className="App-content">
          <div className="App-header">
            <Link to="/">
              <img width="100" src={logo} alt="Giffy app" />
            </Link>
          </div>
          <GifsContextProvider>
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
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  )
}

export default App
