import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div>
            <button>UX/UI Design</button>
            <button>Project</button>
            <button>About Us</button>
        </div> 
        );
    }
}
 
export default NavBar;