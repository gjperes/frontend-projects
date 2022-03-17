import React, {Component} from 'react';
import './Dice.css';

class Dice extends Component {
    render() {
        const { value } = this.props;
        const numberText = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six"
        }

        return (
            <div>
                <i className={"fa-solid fa-dice-" + numberText[value] + " Dice-ico"} />
            </div>
        );
    }
}

export default Dice;