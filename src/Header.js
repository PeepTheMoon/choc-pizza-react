import React, { Component } from 'react';
import Logo from './Logo.js';
import fb from './images/fb-icon.png';
import twit from './images/twit-icon.png';
import gp from './images/gp-icon.png';
import insta from './images/insta-icon.png';
import flic from './images/flic-icon.png';
import pint from './images/pint-icon.png';
import rss from './images/rss-icon.png';
import mail from './images/mail-icon.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Logo />
                <h1>Delicious</h1>
                <h2>The best food blog on the web</h2>
                <img src={fb} alt="facebook icon"/>
                <img src={twit} alt="twitter icon"/>
                <img src={gp} alt="google plus icon"/>
                <img src={insta} alt="instagram icon"/>
                <img src={flic} alt="flic icon"/>
                <img src={pint} alt="pinterest icon"/>
                <img src={rss} alt="rss icon"/>
                <img src={mail} alt="mail icon"/>
            </div>
        )
    }
}
