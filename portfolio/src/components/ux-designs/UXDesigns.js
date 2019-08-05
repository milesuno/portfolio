import React, { Component } from 'react';
import ThumbNail from '../thumb-nail/ThumbNail';

class UXDesigns extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
            ux:[
                {
                name:['See Your Future'],
                img: ["#", "#","#","#","#"],
                desc: 'See Your Future is a Platform inexperience can use to find out about jobs and opportunities'      
                }
            ]

         }
    }

    render() { 
        const { ux } = this.state;
        return ( 
            <div>
                <h1>UX/UI Designs</h1>
                <p>2019</p>
                {ux.map(ux => <ThumbNail img={ux.img} name={ux.name} />)}
                <p>2018</p>
            </div>
         );
    }
}
 
export default UXDesigns;