class App extends React.Component {
  render() {
    return <ProgressTracker />
  }
}

class ProgressTracker extends React.Component {
  render() {
    return <p><input id="target" type="text" /></p>
  }
}

ReactDOM.render(<App />, document.getElementById("app"));