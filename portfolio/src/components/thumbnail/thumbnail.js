import React, { Component } from 'react';
import './thumbnail.css';
import LgThumbNail from '../lg-thumbnail/lg-thumbnail';

/*
React will apply props object with data passed to from the parent passing it props. 
In this instance ThumbNail as data passed to it from 2 different parents, 
but I do not need to specify or use [square] syntax to access the data passed  
*/


class ThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgIndex: 0,
            selected: 0,
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
    
    thumbNailClick = () => {
        console.log('onClick')
        let selected = this.state.selected;
        
        if(selected == 0){
            selected ++
            this.props.getData(this.state)
            this.setState({ selected })
        } else if (selected == 1) {
            selected --
            this.setState({ selected })
        }

        console.log('Selected', this.state.selected) 
    };

    descCharLimit = () => {
        console.log('desc in limit', this.state.desc)
    };
    render() { 
        const { name, desc, img } = this.props;
        const { imgIndex, selected } = this.state;
        return (
            <div className='thumbnail-page-wrapper'>
                <h1>{name}</h1>
                <main className='thumbnail-wrapper'>
                    <img src={img[imgIndex]} className={'thumbnail-img'} onClick={this.thumbNailClick}/>
                    <p onClick={this.thumbNailClick}>{desc}</p>
                    <div className={'button-container'}>
                        <button onClick={this.handleDecrementCarousel}>{'<'}</button>
                        <button onClick={this.handleIncrementCarousel}>{'>'}</button>
                    </div>
                </main>
            </div>
          );
    }
}
 
export default ThumbNail;