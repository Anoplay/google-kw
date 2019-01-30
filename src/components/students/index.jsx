import React, { Component } from 'react';
import Student from '../student';

class Students extends Component {
	constructor(props){
		super(props);
		this.state ={
			students : [
				{
					id	 : 1,
					name : 'Anoplay',
					hero : 'Lagmaron',
				},
				{
					id	 : 2,
					name : 'SQwillERZ',
					hero : 'Camilla',
				},
				{
					id	 : 1,
					name : 'Yada',
					hero : 'Zeratu',
				},
			]
		}
	}
	render() {
		// return (
		//  	<div>
		//  		<p>Agung</p>
		//  	</div>
		// );
		const { students } = this.state;
		return (<div>
	    {students.map((sw) => (
	        // <p>{sw.name}  {sw.hero}!</p>
	        <Student name={sw.name} hero={sw.hero} />
	    ))}
	    </div>);
	}
}

export default Students;
