import React from 'react';

var JTHead = React.createClass({
	render : function render(){

		var { headers } = this.props;

		return (
			<thead>
				<tr>
					{headers.map(function(header, i){
						return (<th key={i}>{header}</th>)
					})}
				</tr>
			</thead>
			);
	}
});

export default JTHead;
