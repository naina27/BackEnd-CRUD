import React, { Component } from 'react';
class Form extends Component{
	render(){
		return(
		
		<form>
		<label>fname<label>
		<input type="text"/><br/>

         label>lname<label>
		<input type="text"/><br/>

		<label>Email<label>
		<input type="email"/><br/>
         
         label>Mobile<label>
		<input type="number"/><br/>

		<input type="submit" value="Send"/>

		</form>
		
		)
	}
}
export default form;