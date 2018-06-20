import React, { Component } from 'react';
import './App.css';
import Search  from './components/Search';
import Resultlist  from './components/Resultlist';
import Slidelist  from './components/Slidelist';
class App extends Component {

     constructor(props){
         super(props)
         this.state ={
             results:{}
         }
     }

     updateState(value){
        this.setState({
            result:newPlaces
        })
     }
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Search callUpdate={this.updateState.bind(this)}/>
                    <Resultlist resultPlaces={this.state.results}/>
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
