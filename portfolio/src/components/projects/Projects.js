import React, { Component } from 'react';
import ThumbNail from '../thumbnail/thumbnail';
import LgThumbNail from '../lg-thumbnail/lg-thumbnail';
import NavBar from '../navbar/nav-bar';
import './projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'test', 
            projects:[
                    {
                        id: 1,
                        name:'BarterAnything.com',
                        img: ["#", "#","#","#","#"],
                        desc: 'BarterAnything is a Cashless Ecommerce Platform'   
                    },
                    {
                        id: 2,
                        name:'AnythingBarter.com',
                        img: ["#", "#","#","#","#"],
                        desc: 'BarterAnything is a Cashless Ecommerce Platform'   
                    }
            ]
         }
    }

    render() { 
        const { projects } = this.state;
        return ( 
            <div className='page-wrapper'>
                {/* <NavBar /> */}
                <main className='main-wrapper'>
                <h1>Projects</h1>
                <p>2019</p>
                <div className={'project-element-wrapper'}>
                    {projects.map(project => 
                        <ThumbNail 
                        key={project.id} 
                        projects={project}
                        img={project.img}
                        name={project.name}
                        desc={project.desc}
                        />
                    )}
                </div>
                {/*If the thumbnail is clicked the Lg Thumbnail should render */}
                {/* {projects.map(p => <LgThumbNail key={p.id} img={p.img} name={p.name} />)} */}
            <p>2018</p>    
                </main>
                
            </div>
         );
    }
}
 
export default Projects;