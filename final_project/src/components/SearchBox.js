import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class SearchBox extends React.Component 
{
	render () {
		return(
			<div className = "container box-container">
				<div className="col-sm-10 input-box" >	
						<input type="text" name= "location" className="form-control" placeholder="Enter a location "/> 
				</div>
				<hr/>
			</div>
		);
	}
}

export default SearchBox;