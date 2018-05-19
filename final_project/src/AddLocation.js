import React from 'react';
import 'bootstrap';

class AddLocation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
			longitude: '',
			latitude: ''
		};

		this.handleEvent = this.handleEvent.bind(this);
		this.submitHandle = this.submitHandle.bind(this);
	}

	handleEvent(event) {

		this.setState({
			//value:event.target.value

		[event.target.name]: event.target.value
		});

	}


	submitHandle(event) {

		this.props.addToMaps(this.state);
		event.preventDefault();
		this.setState({
			
            longitude: '',
            latitude:''
			
		});

	}


	render() {
		return (

			<div className="container form">

				<h2>Add Parking Location</h2>
				<form onSubmit={this.submitHandle} >
					
					<div className="form-group row">
						<label className="col-sm-0 col-form-label score"> Longitude </label>

						<div className="col-sm-11">
							<input type="number" name="longitude" onChange={(event) => this.handleEvent(event)} className="form-control" value={this.state.longitude} placeholder="0" />
						</div>
					</div>

                    	<div className="form-group row">
						<label className="col-sm-0 col-form-label score"> Latitude </label>

						<div className="col-sm-11">
							<input type="number" name="latitude" onChange={(event) => this.handleEvent(event)} className="form-control" value={this.state.latitude} placeholder="0" />
						</div>
					</div>
					

					<button type="submit" className="btn btn-info btn-block button">Add</button>
				</form>

			</div>



		);
	}


}

export default AddLocation;