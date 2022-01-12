import React, { Component } from 'react';
import './CoinFlipper.css';
import Coin from './Coin';

class CoinFlipper extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            face: 'heads',
            count: 0,
            heads: 0,
            // this was put in state in case wanted to add functionality to CoinFlipper to choose what kind of coin to flip
            imgs:
            {
                heads: 'https://tinyurl.com/react-coin-heads-jpg',
                tails: 'https://tinyurl.com/react-coin-tails-jpg'
            }
        };
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin()
    {
        // either 0 or 1 - 0 for heads, 1 for tails
        const flip = Math.floor(Math.random() * 2);
        flip === 0
            ? this.setState(currState =>
            {
                return { face: 'heads', count: currState.count + 1, heads: currState.heads + 1 };
            })
            : this.setState(currState =>
            {
                return { face: 'tails', count: currState.count + 1 };
            });
    }

    render()
    {
        return (
            <div>
                <h2>Let's flip a coin!</h2>
                <Coin face={this.state.face === 'heads'
                    ? this.state.imgs.heads
                    : this.state.imgs.tails} />
                <button onClick={this.flipCoin}>Flip me!</button>
                <p>Out of {this.state.count} flips, there have been {this.state.heads} heads and {this.state.count - this.state.heads} tails.</p>
            </div>
        );
    }
}

export default CoinFlipper;
