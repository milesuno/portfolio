import React, { Component } from 'react';

class LgThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { name, img } = this.props;
        return ( 
            <div>
                <p>{name}</p>
                <img src={img} className={'thumbnail-img'}/>
            </div>
         );
    }
}
 
export default LgThumbNail;