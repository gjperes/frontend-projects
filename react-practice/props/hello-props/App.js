class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Slot Machines</h1>
            <Machine
              slot1="Y"
              slot2="Z"
              slot3="Y"
            />
            <Machine
              slot1="X"
              slot2="X"
              slot3="X"
            />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
