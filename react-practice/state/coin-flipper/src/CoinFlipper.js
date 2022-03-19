import React, {Component} from "react";
import Coin from "./Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: "head",
            countFlips: {
                total: 0,
                head: 0,
                tail: 0,
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }

    generateRand() {
        return Math.floor(Math.random() * 2);
    }

    handleClick() {
        const result = this.generateRand();
        const sideNames = ["head", "tail"];
        const countFlips = this.state.countFlips;

        countFlips.total++;
        result === 0 ? countFlips.head++ : countFlips.tail++;

        this.setState({side: sideNames[result]});
    }

    render() {
        return (
            <div className={"CoinFlipper"}>
                <h1>Let's flip a coin!</h1>
                <Coin side={this.state.side}/>
                <p>
                    Out of {this.state.countFlips.total} flips,
                    there have been {this.state.countFlips.head} heads
                    and {this.state.countFlips.tail} tails.
                </p>
                <button onClick={this.handleClick}>Flip here</button>
            </div>
        );
    }
}

export default CoinFlipper;