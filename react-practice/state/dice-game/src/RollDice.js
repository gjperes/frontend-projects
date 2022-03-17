import React, {Component} from 'react';
import Dice from './Dice';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceOne: Math.floor(Math.random() * 6) + 1,
            diceTwo: Math.floor(Math.random() * 6) + 1,
            rolling: false,
        }

        this.roll = this.roll.bind(this);
    }

    roll(e) {
        const rand = () => Math.floor(Math.random() * 6) + 1;

        this.setState({diceOne: rand(), diceTwo: rand()})
    }

    render() {
        return (
            <div>
                <Dice value={this.state.diceOne} rolling={this.state.rolling}/>
                <Dice value={this.state.diceTwo} rolling={this.state.rolling}/>
                <button>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;