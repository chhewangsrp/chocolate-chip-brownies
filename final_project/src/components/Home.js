import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Maps from "./Maps";
import SearchBox from "./SearchBox";


class Home extends React.Component {

	render(){
		return(
		<div className = "container">	
			<Maps /> 	
			<SearchBox />		
		</div>	

		);		

	}
}	
export default Home;
