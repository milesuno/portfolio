import React, { Component } from 'react';

class ThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { name, img} = this.props;
        return (
            <div>

                <p>{name}</p>
                <img src={img}/>
            </div>
          );
    }
}
 
export default ThumbNail;