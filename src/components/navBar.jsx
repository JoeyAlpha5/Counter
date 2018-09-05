import React, { Component } from 'react';
class Nav extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <div className="navBar">
                    <span>{this.props.Counters}</span>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Nav;