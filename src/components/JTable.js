import React from 'react';

import JTHead from './JTHead.js';
import JTBody from './JTBody.js';

var JTable = React.createClass({
	render : function render(){
		return (
			<table>
				<JTHead data={this.props.headers}/>
				<JTBody data={this.props.data}/>
			</table>
			);
	}
});

JTable.defaultProps = {
	headers : [],
	data : []
}

export default JTable;
