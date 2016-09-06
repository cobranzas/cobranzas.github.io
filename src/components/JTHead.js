import React from 'react';

var JTHead = React.createClass({
	render : function render(){

		var data = this.props.data || [];

		return (
			<thead>
				<tr>
					{data.map(function(header, i){
						return (<th key={i}>{header}</th>)
					})}
				</tr>
			</thead>
			);
	}
});
JTHead.defaultProps = {
	data : []
}

export default JTHead;
