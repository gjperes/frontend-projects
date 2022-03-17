import React, {Component} from 'react';
import Dice from './Dice';
import RollButton from './RollButton';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceOne: Math.floor(Math.random() * 6) + 1,
            diceTwo: Math.floor(Math.random() * 6) + 1,
            rolling: false,
        }

        this.rollDices = this.rollDices.bind(this);
    }

    rollDices(e) {
        this.setState({rolling: true});
    }

    render() {
        return (
            <div>
                <Dice value={this.state.diceOne} rolling={this.state.rolling}/>
                <Dice value={this.state.diceTwo} rolling={this.state.rolling}/>
                <RollButton rolling={this.state.rolling} onClick={this.rollDices} />
            </div>
        );
    }
}

export default Menu;