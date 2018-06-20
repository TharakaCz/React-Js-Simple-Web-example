import React, { Component } from 'react';
import './App.css';
import Search  from './components/Search';
import Resultlist  from './components/Resultlist';
import Slidelist  from './components/Slidelist';
class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Search/>
                    <Resultlist/>
                </div>
                <div className="col-md-4">
                    <Slidelist/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
