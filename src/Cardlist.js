import React from 'react';
import Card from './card';
const Cardlist=({robots})=>{
	const cardcomponents=robots.map((user,i)=>{
		return <Card  key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
});
return(
<div>
{cardcomponents}
</div>
);
}


export default Cardlist;