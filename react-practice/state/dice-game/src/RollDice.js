import React, {Component} from 'react';
import Dice from './Dice';
import "./RollDice.css"

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceOne: Math.floor(Math.random() * 6),
            diceTwo: Math.floor(Math.random() * 6),
            rolling: false,
        }

        this.roll = this.roll.bind(this);
    }

    roll() {
        const rand = () => Math.floor(Math.random() * 6);

        this.setState({diceOne: rand(), diceTwo: rand(), rolling: true});
        setTimeout(() => this.setState({rolling: false}), 1000);
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-dices">
                    <Dice value={this.state.diceOne}/>
                    <Dice value={this.state.diceTwo}/>
                </div>

                <button
                    onClick={this.roll}
                    disabled={this.state.rolling}
                >
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice;