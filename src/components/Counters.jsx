import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    //state = { Counters: [{id:0, val:0}, {id:1, val:0}, {id:2, val:0}] }
    render() { 
        return ( 
        <React.Fragment>
            <button className="btn btn-primary btn-sm m-2" onClick={this.props.Reset}>Reset</button><br/>
            {this.props.Counter.map( (counter) => (
            <Counter key={counter.id} counter={counter}  onDelete={this.props.Delete} onIncrement={this.props.handleIncrement}/> 
            ))}
        </React.Fragment> );
    }

}

export default Counters;