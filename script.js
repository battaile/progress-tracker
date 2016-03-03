class App extends React.Component {
	render() {
		return  <div className="container"><ProgressTracker category="Dev" targetVal="32"/ >
		 <ProgressTracker category="BJJ" targetVal="18"/ >
		 <ProgressTracker category="Guitar" targetVal="7"/ >
		 <ProgressTracker category="Spanish" targetVal="3"/ ></div>
	}
}

class ProgressTracker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actual: 0,
			targetVal: props.targetVal
		};
	};
	handleActualChange(event) {
		this.setState({actual: event.target.value});
	};
	handleTargetChange(event) {
		this.setState({targetVal: event.target.value});
	};
	render() {
		return <div className="row" > 
			<div className="col-sm-3"> {this.props.category} </div>
			<div className="col-sm-3"> < input type="text" value={this.state.actual} onChange={this.handleActualChange.bind(this)} / > </div>
			<div className="col-sm-3"> < input type="text" value={this.state.targetVal} onChange={this.handleTargetChange.bind(this)} / > </div>
		 	<div className="col-sm-3"> {this.state.targetVal > 0 ? this.state.actual/this.state.targetVal : 0} </div>
		 < /div>
	}
}

ReactDOM.render( < App / > , document.getElementById("app"));