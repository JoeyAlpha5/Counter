import React, { Component } from "react";
class Counter extends Component {

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 15 }} className={this.deterineClassName()}>
          {this.format()}
        </span>
        <button
          onClick={() => {this.props.onIncrement(this.props.counter.id, this.props.counter.val)}}
          style={this.buttonStyle}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        <br/>
      </React.Fragment>
    );
  }

// renderTags() {
//     if (this.state.numbers.length == 0) {
//       return <p>There are no tags</p>;
//     } else {
//       return (
//         <ul>
//           {this.state.numbers.map(number => (
//             <li key={number}>{number * 2}</li>
//           ))}
//         </ul>
//       );
//     }
//   }

  // constructor() {
  //   super();
  //   console.log(this);
  //   this.handleClick = this.handleClick.bind(this);
  //   this.format = this.format.bind(this);
  // }

 

  //  handleClick = (id) => {
  //   console.log("clicked", "hi");
  //   console.log(this);
  //   this.setState({ count: this.state.count + 1 });
  //   console.log(id);
  // };

  deterineClassName() {
    let classes = "badge badge-";
    if (this.props.counter.val === 0) {
      classes += "warning m-2";
    } else {
      classes += "primary m-2";
    }
    return classes;
  }

  format() {
    let count = this.props.counter.val;
    if (count === 0) {
      return "Zero";
    } else {
      return count;
    }
  }
}

export default Counter;
