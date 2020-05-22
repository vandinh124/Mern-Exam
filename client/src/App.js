import React from 'react';
import './App.css';
import AllPirates from './views/AllPirates';
import NewPirate from './views/NewPirate';
import Detail from './views/Detail';
import Login from './views/Login';
import {Router, Redirect} from '@reach/router';



function App() {
  return (
    <div className="App">
        <Router>
            <Login path="login" />
            <AllPirates path="pirates" />
            <NewPirate path="pirate/new" />
            <Detail path="pirate/:id"></Detail>
            <Redirect
          from="/"
          to="/pirates"
          noThrow
        />
        </Router>
        

    </div>
  );
}

export default App;
