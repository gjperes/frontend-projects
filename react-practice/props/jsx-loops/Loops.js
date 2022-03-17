class Loops extends React.Component {
  render() {
    const { name, hobbies } = this.props;

    return (
        <div>
          <p>I'm {name} and my hobbies are:</p>
          <ul>
            {hobbies.map(item => <li>{item}</li>)}
          </ul>
        </div>
    )
  }
}
