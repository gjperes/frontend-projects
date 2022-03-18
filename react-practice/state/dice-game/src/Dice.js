import React, {Component} from 'react';
import './Dice.css';

class Dice extends Component {
    render() {
        const numberText = ["one", "two", "three", "four", "five", "six"]

        return (
            <div className="Dice">
                <i className={`fa-solid fa-dice-${numberText[this.props.value]}
                              ${this.props.rolling ? 'Dice-rolling' : ''}`} />
            </div>
        );
    }
}

export default Dice;