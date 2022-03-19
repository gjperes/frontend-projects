import React, {Component} from "react";

class Coin extends Component {
    static defaultProps = {
        side: "head",
    }

    render() {
        const brlHead = "https://upload.wikimedia.org/wikipedia/commons/0/01/100_Brazil_real_Second_Obverse.jpg";
        const brlTail = "https://upload.wikimedia.org/wikipedia/commons/3/39/100_Brazil_real_Second_Reverse.jpg";

        return (
            <img src={this.props.side === "head" ? brlHead : brlTail} alt={"100 reais frente ou verso"}/>
        );
    }
}

export default Coin;