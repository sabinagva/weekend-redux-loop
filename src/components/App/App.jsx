import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router,Route } from 'react-router-dom';
//importing feedback components
import Feelings from '../Feelings/Feelings'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Understanding from '../Understanding/Understanding'
import FeedbackResult from '../FeedbackResult/FeedbackResult'


function App() {

  return (
  <Router>
    {/* Feelings route(1) */}
    <Route exact path = "/feelings">
      <Feelings/>
    </Route>
    {/* Support route(2) */}
    <Route exact path = "/support">
      <Support/>
    </Route>
    {/* Understanding route(3) */}
    <Route exact path = "/understanding">
      <Understanding/>
    </Route>
    {/* Comments route(4) */}
    <Route exact path = "/comments">
      <Comments/>
    </Route>
    {/* Feedback Result route(1) */}
    <Route exact path = "/feedback">
      <FeedbackResult/>
    </Route>

    {/* <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div> */}
  </Router>

  );
}

export default App;
