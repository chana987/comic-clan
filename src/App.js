import React from 'react'
import './App.css'
import Catalog from './components/Catalog'
import BookDetail from './components/BookDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import book from './assets/book.png'
import logo from './assets/logo.png'
import ComicClanState from './context/comicClan/comicClanState'
import AlertState from './context/alert/AlertState'

function App() {
  return (
    <ComicClanState>
      <AlertState>
        <Router>
          <header>
            <img src={book} alt="" className="logo-icon" />
            <img src={logo} alt="" className="logo" />
          </header>
          <div className="app">
            <Switch>
              <Route exact path="/catalog" component={Catalog} />
              <Route exact path="/book/:name" component={BookDetail} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </ComicClanState>
  )
}

export default App
