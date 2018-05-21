import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./Logo1.png"
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './index.css'
import Home from './Home';

class Main extends React.Component 
{
	

	render() {
		
    return (
    	
    	<BrowserRouter>

       <div className = "container form"> 
       

        <nav className="navbar navbar-expand-lg ">	
                <ul className="navbar-nav">
                	<li className= "nav-item">
                		<img className= "logo" src={logo}/> 
                	</li>
                    <li className="nav-item">
                        <NavLink to={"/"} className="nav-link" href="#">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">How it works</a>
                    </li>
   				<li className = "nav-item">
   					<NavLink to={"/Login"} className="nav-link" href = "#"> Login </NavLink>
   				</li>
   			</ul>
			</nav>
				
				  <div className="content">
                        <Route exact path ="/" render = {()=> <Home/>} />                 
                 </div>  
		</div>

		</BrowserRouter>
	

		);

	}
}

export default Main;
