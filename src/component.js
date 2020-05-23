import React,{Component} from 'react';
class Errorboundary extends Component{
	constructor()
	{
		super(props);
		this.state={
			hasError:false
		}
	}
	componentDidCatch(error,info){
		this.setState(hasError:true);
	}
	render(){
		if(this.state.hasError)
		{
			return <h1> oops.Not good</h1>
		}
return this.props.children
}