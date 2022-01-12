import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div>
                <img className="Coin-img" src={this.props.face} />
            </div>
        );
    }
}

export default Coin;
