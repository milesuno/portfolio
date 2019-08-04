import React, { Component } from 'react';

class ThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <p>Title</p>
                <img src={this.props.img}/>
            </div>
          );
    }
}
 
export default ThumbNail;