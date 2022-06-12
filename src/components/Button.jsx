import React, { Component } from 'react';
import '../assets/css/Button.scss';

class Button extends Component {
    render() {
        return (
            <div className="Button">
                <button className={this.props.className}>{this.props.text}</button>
            </div>
        );
    }
}

export default Button;