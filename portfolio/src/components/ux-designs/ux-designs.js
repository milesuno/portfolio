import React, { Component } from 'react';
import ThumbNail from '../thumbnail/thumbnail';

class UXDesigns extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
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
                }
            ]

         }
    };

    incrementCarousel = (imgIndex) => {
        console.log('Increment Carousal', imgIndex);
        // this.state.ux.forEach(ux => {
        //     ux.img.forEach( i => {
        //         if(i === imgIndex && i < ux.img.length){
                    
        //         }
        //     })})
    };

    decrementCarousel = (imgIndex) => {
        console.log('Decrement Carousal', imgIndex)
    }

    render() { 
        const { ux } = this.state;
        return ( 
            <div>
                {this.incrementCarousel()}
                <h1>UX/UI Designs</h1>
                <p>2019</p>
                {ux.map(ux => 
                <ThumbNail 
                key={ux.id} 
                img={ux.img} 
                name={ux.name} 
                onIncrementCarousel={this.incrementCarousel}
                onDecrementCarousel={this.decrementCarousel}
                />
                )}
                <p>2018</p>
            </div>
         );
    }
}
 
export default UXDesigns;