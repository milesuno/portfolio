import React, { Component } from 'react';

class SocialMediaNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <p>Social Media</p>
                <label>
                    FaceBook
                    <img src={'#'} />
                </label>
                <label>
                    LinkedIn
                    <img src={'#'} />
                </label>
                <label>
                    YouTube
                    <img src={'#'} />
                </label>
            </div>
        );
    }
}
 
export default SocialMediaNav;