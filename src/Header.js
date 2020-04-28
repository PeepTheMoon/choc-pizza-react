import React, { Component } from 'react';
import Logo from './Logo.js';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Logo />
                <h1>Delicious</h1>
                <h2>The best food blog on the web</h2>
                <img src="./images/fb-icon.png" alt="facebook icon"/>
                <img src="./images/twit-icon.png" alt="twitter icon"/>
                <img src="./images/gp-icon.png" alt="google plus icon"/>
                <img src="./images/insta-icon.png" alt="instagram icon"/>
                <img src="./images/flic-icon.png" alt="flic icon"/>
                <img src="./images/pint-icon.png" alt="pinterest icon"/>
                <img src="./images/rss-icon.png" alt="rss icon"/>
                <img src="./images/mail-icon.png" alt="mail icon"/>
            </div>
        )
    }
}
