import React, { Component } from 'react';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {/* Quotes can change every few seconds */}
                <button>About Me</button>
                <h1>Genchi Genbutsu</h1>
                <img src={'#'} />
                <button>Enter</button>
            </div>
         );
    }
}
 
export default LandingPage;