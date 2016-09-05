'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var JTBody = _react2['default'].createClass({
	displayName: 'JTBody',

	render: function render() {
		var data = this.props.data;

		return _react2['default'].createElement(
			'tbody',
			null,
			data.map(function (row, i) {
				return _react2['default'].createElement(
					'tr',
					{ key: i },
					Object.keys(row).map(function (key, i) {
						var value = row[key];
						return _react2['default'].createElement(
							'td',
							{ key: i, title: key },
							value
						);
					})
				);
			})
		);
	}
});

exports['default'] = JTBody;
module.exports = exports['default'];