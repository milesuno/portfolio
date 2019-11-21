import React, { Component } from 'react';
import ThumbNail from '../thumbnail/thumbnail';
import LgThumbNail from '../lg-thumbnail/lg-thumbnail';
import NavBar from '../navbar/nav-bar';
import './projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //State holds all UX the data for the <ThumbNail /> component. This is passed as a Prop.
            selected: 0,
            dataFromThumbnail: 0,    
            projects:[
                        {
                            id: 1,
                            name:'BarterAnything.com',
                            img: [
                                    "https://images.unsplash.com/photo-1561196643-35c381cb6a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
                                    "https://images.unsplash.com/photo-1563923683738-4ad77b43411c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                                    "https://images.unsplash.com/photo-1563734956808-602dab25525f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                                    "https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                                    "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                ],
                            desc: 'BarterAnything is a Cashless Ecommerce Platform'   
                        },
                        {
                            id: 2,
                            name:'AnythingBarter.com',
                            img: [
                                    "https://images.unsplash.com/photo-1561196643-35c381cb6a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
                                    "https://images.unsplash.com/photo-1563923683738-4ad77b43411c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                                    "https://images.unsplash.com/photo-1563734956808-602dab25525f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                                    "https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                                    "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                ],
                            desc: 'BarterAnything is a Cashless Ecommerce Platform'   
                        },
                        {
                            id: 2,
                            name:'AnythingBarter.com 2',
                            img: [
                                    "https://images.unsplash.com/photo-1561196643-35c381cb6a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
                                    "https://images.unsplash.com/photo-1563923683738-4ad77b43411c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                                    "https://images.unsplash.com/photo-1563734956808-602dab25525f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                                    "https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                                    "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                ],
                            desc: 'BarterAnything is a Cashless Ecommerce Platform'   
                        }
            ]
         }
    }

    getData = (data) => {
        //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
        this.setState({ selected: 1, dataFromThumbnail: data })

    }
    
    handleCloseLgThumbnail = (update) => {
        console.log('from lg-thumbnail', update)
        this.setState({ selected: update })
    }

    render() { 
        const { projects, selected, dataFromThumbnail } = this.state;
        return ( 
            <div className={'project-page-wrapper'} >
                <NavBar />
                {
                    selected ?
                     <LgThumbNail 
                     name={dataFromThumbnail.name}
                     desc={dataFromThumbnail.desc}
                     img={dataFromThumbnail.img}
                     closeLgThumbnail={this.handleCloseLgThumbnail}
                     />
                    :
                    <main className={'project-main-wrapper'}>
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
                                getData={this.getData}
                                />
                            )}
                        </div>
                        {/*If the thumbnail is clicked the Lg Thumbnail should render */}
                        {/* {projects.map(p => <LgThumbNail key={p.id} img={p.img} name={p.name} />)} */}
                        <p>2018</p>    
                    </main>
                }
                
            </div>
         );
    }
}
 
export default Projects;