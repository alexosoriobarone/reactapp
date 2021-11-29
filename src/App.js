import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Loading} from './components/Loading';

import List from './components/List';
class App extends Component {
  render(){
    return ( <div className = "App" >
        <header className = "App-header" >
        
        <List></List>
        </header>
         </div>
    );
    }
}

export default App;