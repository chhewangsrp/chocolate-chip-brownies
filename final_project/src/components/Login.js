import React from 'react';
import 'bootstrap';
import './index.css';
import Background from "./Background.jpg";




class Login extends React.Component {
	render(){
		var sectionStyle = {
			  width: "100vw",
			  height: "100vh",
			  backgroundImage: "url(" + Background + ")"
		};

		return(
			<section style={ sectionStyle } >

			<div className= "box-container login">
				
				<div className="form-group row">
					<label className="col-sm-0 col-form-label Accuracy"> Username: </label>
						<div className="col-sm-11" >
							<input type="text" className = "form-control" placeholder="Username"/> 
						</div>
				</div>	
					
				<div className="form-group row">
					<label className="col-sm-0 col-form-label Accuracy"> Password: </label>
						<div className="col-sm-11" >
							<input type="password" className = "form-control" placeholder="password"/> 
						</div>
				</div>

				<div className="form-group row login-button">
					<button type="login" className = "btn-primary login-button"> Login </button>
					<a href="#"> Don't have an account? </a>
				</div>


			</div>

		</section>
		);
	}

}

export default Login