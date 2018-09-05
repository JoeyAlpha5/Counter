import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Counters from './components/Counters';
class App extends Component {
  state = { Counters: [{id:0, val:0}, {id:1, val:0}, {id:2, val:0}] }
  render() {
    return (
      <React.Fragment>
        <NavBar Counters={this.state.Counters.filter( (counter) => (counter.val !== 0)).length}/>
        <Counters Delete={this.Delete} Counter={this.state.Counters} handleIncrement={this.handleIncrement} Reset={this.Reset}/>
        </React.Fragment>
    );
  }

  // getItems(){
  //   let count = 0;
  //   const Counter =  this.state.Counters.length
  //   for(var i =0; i < Counter; i++){
  //     if(Counter[i].val != 0){
  //       count +1; 
  //     }

  //   }
  //   console.log(count);
  //   return count;


  // }

  Delete = (id) =>{

    const NewCounter = this.state.Counters.filter((c) => (c.id !== id) );
    console.log(NewCounter);
    this.setState({Counters: NewCounter});
    console.log(id);
  }


  Reset = ()=> {

    const Counters = this.state.Counters.map( (counter) => {counter.val = 0; return counter} );
    console.log(Counters);
    this.setState({Counters});

  }

  
  handleIncrement = (id, val) =>{

    const CounterArray = [...this.state.Counters];
    CounterArray[id].val++;
    console.log(CounterArray);
    this.setState({Counters: CounterArray});


  }

}

export default App;
