import React, { Component } from 'react';

class FooterNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        const scrollTopBtn = document.querySelector("div.scroll-top-btn");
        const footer = document.querySelector("footer");
        const footerCoords = footer.getBoundingClientRect();
        // scrollTopBtn.style.setProperty("top", `${window.innerHeight - 100}px`);
        // scrollTopBtn.style.setProperty("left", `${window.innerWidth - 100}px`);

        footer.style.setProperty("top", `${window.innerHeight - footerCoords.height}px`)
        console.log({footer, footerCoords})
    };
    render() { 
        return ( 
            <footer>
                <div className="scroll-top-btn">^</div>
            </footer>
         );
    }
}
 
export default FooterNav;