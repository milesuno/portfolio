import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing-page.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='landing-page-page-wrapper'>
                {/* Quotes can change every few seconds */}
                <main className='landing-page-wrapper'>
                    <button>About Me</button>
                    <h1>Genchi Genbutsu</h1>
                    <img className ='landing-page-img' src={'https://warnerwave.com/image/137487-full_you-re-gonna-carry-that-weight-wallpaper-cowboybebop.png'} />
                    <Link to='/uxdesigns'>
                        <button>Enter</button>
                    </Link>
                </main>
            </div>
         );
    }
}
 
export default LandingPage;