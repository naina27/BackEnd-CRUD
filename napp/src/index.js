import React from 'react';
import ReactDOM from 'react-dom';

/*ReactDOM.render(<h1>hello nainsi!!!</h1>,
    document.getElementById("root"));*/


class EmployeeComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			employee:{
				name:'',
				Location:'',
				Salary:''
		}
		};
	};
	changehandlername=(e)=>{
		this.setstate({name:e.target.value});
	};
	changehandlerLocation=(e)=>{
		this.setstate({Location:e.target.value});
	};
	changehandlerSalary=(e)=>{
		this.setstate({Salary:e.target.value});
	};
	onCreateEmployee=()=>{
		console.log(this.state.employee.name)		
	};
	render(){
		return(
          <div>
          <h2>Employee Form</h2>
          <form>
           Name:<input type="text" name="name" value={this.state.employee.name} onchange={this.changehandlername}/><br/>

           Location:<input type="text" name="Location" value={this.state.employee.Location} onchange={this.changehandler}/><br/>

           Salary:<input type="text" name="Salary" value={this.state.employee.Salary} onchange={this.changehandler}/><br/>

           <button onclick={this.onCreateEmployee}>submit</button><br/>
          </form>
          </div>
			)
	};
};

  const element=<EmployeeComponent></EmployeeComponent>
  ReactDOM.render(element,document.getElementById("root"));
 
  