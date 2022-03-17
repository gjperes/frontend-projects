class App extends React.Component {
    render() {
        return (
          <div>
            <h1>JSX Loops</h1>
            <DefaultProps
                hobbies={["Gaming", "Anime", "Folk Music"]}
            />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
