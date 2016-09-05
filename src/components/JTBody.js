import React from 'react';

var JTBody = React.createClass({
	render : function render(){

		var { data } = this.props;

		return (
			<tbody>
				{data.map(function(row, i){
					return (
						<tr key={i}>
							{Object.keys(row).map(function(key, i){
								var value = row[key];
								return (<td key={i} title={key}>{value}</td>);
							})}
						</tr>
						);
				})}
			</tbody>
			);
	}
});

export default JTBody;
