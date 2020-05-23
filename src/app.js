import React,{Component} from 'react';
//import {robots} from './robots';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox.js';
//import './app.css';
import Scroll from './scroll';
class App extends Component{
constructor(){
	super()
	this.state={
		robots:[],
		searchfield:''
	}
}
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(users=>this.setState({robots:users}));
}
onSearchChange=(event)=>
{
	this.setState({searchfield:event.target.value})
		console.log(event);
}
render(){
	const filteredRobots=this.state.robots.filter(robots =>{

		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	
	}
	)
	if(this.state.robots.length===0)
	{
		return <h1>loading</h1>
	}
	else{

return(

<div className='tc'>
<h1 className='f2'> ROBO FRIENDS</h1>
<Searchbox searchChange={this.onSearchChange}/>
<Scroll>
<Cardlist robots={filteredRobots}/>
</Scroll>
</div>
	);
}
}
}
export default App; 