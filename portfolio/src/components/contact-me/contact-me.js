import React, { Component } from 'react';
import Helmet from "react-helmet";
import NavBar from "../navbar/nav-bar"
import FooterNav from '../footer-nav/footer-nav';

class ContactMe extends Component {
    state = {};
    render() {
        return (
            <>
                <Helmet>
                    <title>Portfolio - Contact</title>
                    <meta
                        name="description"
                        content="About me page, highlighting resume achievements and channels to contact me"
                    />
                </Helmet>
                <div className="page-wrapper">
                    <div className="page-width">
                        <header>
                            <NavBar />
                        </header>
                        <main className="main-wrapper">
                            <h1>Contact</h1>
                            <h2>Additional Socials:</h2>
                            <h2>Email:</h2>
                            <h2>Enquiries:</h2>
                            <h2>Download CV</h2>
                        </main>
                        <footer>
                            <FooterNav />
                        </footer>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactMe;