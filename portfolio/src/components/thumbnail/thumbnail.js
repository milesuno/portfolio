import React, { Component } from 'react';

class ThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img: this.props.img,
            value: 0
         }
    }

    imgIndex = (imgIndex) => {
        const { onIncrementCarousel, onDecrementCarousel } = this.props;
        //Loop has no img on 5th loop
        if(this.state.value <= this.props.img.length - 1){
            if(onIncrementCarousel){
                const value = this.state.value + 1; 
                this.setState({ value });  
                onIncrementCarousel(imgIndex)  
                console.log('This is state.value Increment', this.state.value)
            }
            if(onDecrementCarousel){
                const value = this.state.value - 1; 
                this.setState({ value });  
                onIncrementCarousel(imgIndex)  
                console.log('This is state.value Increment', this.state.value)
            }
        } else {
            this.setState({ value: 0 });
        }
        
        
        
    }
    render() { 
        const { name } = this.props;
        const { img } = this.state;
        return (
            <div>
                <p>{name}</p>
                <img src={img[this.state.value]}/>
                <button onClick={() => this.imgIndex(img[this.state.value])}>increment</button>
                <button onClick={() => this.imgIndex(img[this.state.value])}>decrement</button>

            </div>
          );
    }
}
 
export default ThumbNail;