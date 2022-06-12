import React, { Component } from 'react';
import Button from './Button';
import '../assets/css/Menu.scss';

import Logo from '../assets/images/logo.svg';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                {/* Logo to the left and links to the right */}
                <div className="Menu-logo">
                    <img src={Logo} className="Menu-logo-image" alt="Mind the GRAPH" />
                </div>
                <div className="Menu-links">
                    <a href="/" className="Menu-link">
                        <span className="Menu-link-text">Templates</span>
                    </a>
                    <a href="/" className="Menu-link">
                        <span className="Menu-link-text">Pricing</span>
                    </a>
                    <a href="/" className="Menu-link">
                        <span className="Menu-link-text">Blog</span>
                    </a>
                    <a href="/" className="Menu-link">
                        <span className="Menu-link-text">Jobs</span>
                    </a>
                    <Button text="Login" className="button secondary" />
                    <Button text="Sign up free" className="button primary" />
                </div>
            </div>
        );
    }
    // on scroll, change the menu's background color
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        const menu = document.querySelector('.Menu');
        if (window.scrollY > 0) {
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }
    }
}

export default Menu;