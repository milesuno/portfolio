import React, { Component } from 'react';
import ThumbNail from '../thumbnail/thumbnail';
import LgThumbNail from '../lg-thumbnail/lg-thumbnail';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects:[
                    {
                    id: 1,
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
                {projects.map(p => <ThumbNail key={projects.id} img={p.img} name={p.name} />)}
                {/*If the thumbnail is clicked the Lg Thumbnail should render */}
                {projects.map(p => <LgThumbNail key={projects.id} img={p.img} name={p.name} />)}
            <p>2018</p>
            </div>
         );
    }
}
 
export default Projects;