import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                <img src={'https://warnerwave.com/image/137487-full_you-re-gonna-carry-that-weight-wallpaper-cowboybebop.png'} />
                <Link to='/uxdesigns'>
                    <button>Enter</button>
                </Link>
            </div>
         );
    }
}
 
export default LandingPage;