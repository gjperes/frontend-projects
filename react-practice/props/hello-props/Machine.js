class Machine extends React.Component {
  render() {
    // const { s1, s2, s3 } = this.props;

    const propNames = this.props;
    const slots = [];

    for (let propName in propNames) {
      slots.push(this.props[propName]);
    }

    const isWinner = slots.every(item => item === slots[0]);

    return (
      <div>
        <h2>{isWinner ? "Winner!" : "Loser..."}</h2>
        <p>{slots}</p>
      </div>
    )
    // return <p>{this.props.slot1}{this.props.slot2}{this.props.slot3}</p>
  }
}
