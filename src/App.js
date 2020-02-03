import React from 'react'
import './App.css'
import Catalog from './components/Catalog'
import BookDetail from './components/BookDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import logo from './assets/logo.png'
import ComicClanState from './context/comicClan/comicClanState'

function App() {
  return (
    <ComicClanState>
      <Router>
        <header>
          <img src={logo} alt="" className="logo" />
        </header>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route exact path="/catalog/:category" component={Catalog} />
            <Route exact path="/book/:name" component={BookDetail} />
          </Switch>
        </div>
      </Router>
    </ComicClanState>
  )
}

export default App
