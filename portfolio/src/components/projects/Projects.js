import React, { Component } from 'react';
import ThumbNail from '../thumb-nail/ThumbNail';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects:[
                    {
                    name:'BarterAnything.com',
                    img: ["#", "#","#","#","#"],
                    desc: 'BarterAnything is a Cashless Ecommerce Platform'   
                    }
            ]
         }
    }

    render() { 
        const { projects } = this.state
        return ( 
            <div>
                <h1>Projects</h1>
                <p>2019</p>
                {projects.map(p => <ThumbNail img={p.img} name={p.name} />)}
            <p>2018</p>
            </div>
         );
    }
}
 
export default Projects;