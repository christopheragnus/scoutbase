import React from 'react';
import { Router, Link} from "@reach/router";
//import logo from './logo.svg';
//import './App.css';
import Home from "./Home";

function App() {
  return (
    <div>
	<Router>	
	  <Home path = "/" />
	</Router>

    </div>  
  );
}

export default App;
