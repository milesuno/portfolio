import React, { Component } from 'react';
import './thumbnail.css';

//React will apply props object with data passed to from the parent passing it props. This means I do not need to specify or you [square] syntax 


class ThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgIndex: 0,
            name: this.props.name,
            img: this.props.img,
            desc: this.props.desc
        }
    }
       
    handleIncrementCarousel = () => {
        let imgIndex = this.state.imgIndex;
        imgIndex++; 
        
        if(imgIndex >= this.state.img.length){
            imgIndex = 0;
            this.setState({ imgIndex }); 
            console.log(imgIndex)
        }
        this.setState({ imgIndex });        
    }

        
    handleDecrementCarousel = () => {
        let imgIndex = this.state.imgIndex;
        imgIndex--;
        if(imgIndex < 0) {
            imgIndex = this.state.img.length - 1;
            this.setState({ imgIndex });
        }   
            this.setState({ imgIndex });  
    }    

    render() { 
        const { name, desc, img } = this.props;
        const { imgIndex } = this.state;

        return (
            <div className='thumbnail-page-wrapper'>
                <h1>{name}</h1>
                <main className='thumbnail-wrapper'>
                    <img src={img[imgIndex]}/>
                    <p>{desc}</p>
                    <button onClick={this.handleIncrementCarousel}>increment</button>
                    <button onClick={this.handleDecrementCarousel}>decrement</button>
                </main>
            </div>
          );
    }
}
 
export default ThumbNail;