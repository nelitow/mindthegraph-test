import React, { Component } from 'react';
import '../assets/css/Card.scss';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.image} alt=""/>
                <div className="card-text">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    </div>
                    {this.props.button && <button className="link"><span className='chevron'></span>{this.props.button}</button>}
            </div>
        );
    }
}

export default Card;