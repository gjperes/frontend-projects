import React, {Component} from 'react';
import "./Clicker.css";

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randNum: 1,
        }

        // Importante lembrar de dar bind nos métodos criados
        // para que "this" referencie o objeto correto
        this.generateRandNum = this.generateRandNum.bind(this);
    }

    generateRandNum(e) {
        this.setState({ randNum: Math.floor(Math.random() * 10) + 1});
    }

    render() {
        return (
            <div className="Clicker-flex">
                <h1>Number is {this.state.randNum}</h1>
                {this.state.randNum !== 7
                    ? <button onClick={this.generateRandNum}>Random Number</button>
                    : <h2>YOU WIN!</h2>}
            </div>
        )
    }
}

export default Clicker;