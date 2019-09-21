import React, { Component } from 'react';
import './lg-thumbnail.css';

class LgThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imgIndex: 0,
            img: this.props.img
         }
    }
    // <LgThumbnail /> should increment through img array passed from <Thumbnail />
    handleIncrementCarousel = () => {
        let imgIndex = this.state.imgIndex;
        imgIndex++; 
        
        if(imgIndex >= this.state.img.length){
            imgIndex = 0;
            this.setState({ imgIndex }); 
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

    //Closing window should change selected in parent to 0. This will change the view from <LgThumbnail /> to <Thumbnail />.

    render() { 
        const { imgIndex } = this.state;
        const { name, img, desc } = this.props;
        return ( 
            <div className={'lg-thumbnail-wrapper'}>
                <button 
                className={'lg-thumbnail-button'}
                onClick={() => this.props.closeLgThumbnail(0)}>{'x'}</button>
                <h1 className={'lg-thumbnail-title'}>{name}</h1>
                <img src={img[imgIndex]} className={'lg-thumbnail-img'}/>
                <div className={'lg-thumbnail-desc'}>
                    <div className={'lg-thumbnail-button-container'}>
                        <button onClick={this.handleDecrementCarousel}>{'<'}</button>
                        <button onClick={this.handleIncrementCarousel}>{'>'}</button>
                    </div>
                    <p className={'lg-thumbnail-desc'}>{desc}</p>
                </div>
            </div>
         );
    }
}
 
export default LgThumbNail;