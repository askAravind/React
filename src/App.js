import React from 'react';

import './App.css';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Body from './components/Body';
import UserContextProvider from './context api/UserContext';

function App() {
  return (
    <UserContextProvider>
    <Router>
    <div className="App">
      <Header />
      <Body />
    </div>
    </Router>
    </UserContextProvider>
  );
}

export default App;
