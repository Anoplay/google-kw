import React, { Component } from 'react';

class Student extends Component {


	render() {
		const { name, hero } = this.props;

		return (
			<div>
				<p> Name: {name} </p>
				<p> Hero: {hero} </p>
			</div>
		)
		
	}
}

export default Student;
