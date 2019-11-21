import React, { Component } from 'react';
import ThumbNail from '../thumbnail/thumbnail';
import LgThumbNail from '../lg-thumbnail/lg-thumbnail';
import NavBar from '../navbar/nav-bar';
import './ux-designs.css';


class UXDesigns extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //State holds all UX the data for the <ThumbNail /> component. This is passed as a Prop.
            selected: 0,  
            dataFromThumbnail: 0,  
            ux:[
                {
                    id: 1,
                    name:['See Your Future'],
                    img: [
                        "https://images.unsplash.com/photo-1561196643-35c381cb6a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
                        "https://images.unsplash.com/photo-1563923683738-4ad77b43411c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                        "https://images.unsplash.com/photo-1563734956808-602dab25525f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    ],
                    desc: 'See Your Future is a Platform inexperience can use to find out about jobs and opportunities'      
                },
                {
                    id: 2,
                    name:['See Your Past'],
                    img: [
                        "https://images.unsplash.com/photo-1561196643-35c381cb6a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
                        "https://images.unsplash.com/photo-1563923683738-4ad77b43411c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                        "https://images.unsplash.com/photo-1563734956808-602dab25525f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    ],
                    desc: 'See Your Past is a Platform inexperience can use to find out about jobs and opportunities'      
                    },
                {
                    id: 3,
                    name:['See Your Present'],
                    img: [
                        "https://images.unsplash.com/photo-1561196643-35c381cb6a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
                        "https://images.unsplash.com/photo-1563923683738-4ad77b43411c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                        "https://images.unsplash.com/photo-1563734956808-602dab25525f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        ],
                    desc: 'See Your Present is a Platform inexperience can use to find out about jobs and opportunities'      
               } 
            ]   
         }
    };

    getData = (data) => {
        //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
        this.setState({ selected: 1, dataFromThumbnail: data })

    }

    handleCloseLgThumbnail = (update) => {
        console.log('from lg-thumbnail', update)
        this.setState({ selected: update })
    }
    // Fix <lg-thumbnail /> element rendering issue
    render() { 
        const { ux, selected, dataFromThumbnail } = this.state;
        return ( 
            <div className='ux-page-wrapper'>
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
                <main className='ux-main-wrapper'>
                    <h1>UX/UI Designs</h1>
                    <p>2019</p>
                    <div className='ux-element-wrapper'>
                        {ux.map(ux => 
                            <ThumbNail 
                            key={ux.id}
                            ux={ux}
                            img={ux.img}
                            name={ux.name}
                            desc={ux.desc}
                            getData={this.getData}
                            />
                        )}
                    </div>
                </main>
            }
            </div>
         );
    }
}
 
export default UXDesigns;