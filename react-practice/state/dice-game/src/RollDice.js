import React, {Component} from 'react';
import Dice from './Dice';
import "./RollDice.css"

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

    roll() {
        const rand = () => Math.floor(Math.random() * 6) + 1;

        this.setState({diceOne: rand(), diceTwo: rand(), rolling: true});
        setTimeout(() => this.setState({rolling: false}), 1000);
    }

    render() {
        return (
            <div className="RollDice">
                <Dice value={this.state.diceOne}/>
                <Dice value={this.state.diceTwo}/>

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