'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var JTHead = _react2['default'].createClass({
	displayName: 'JTHead',

	render: function render() {

		var data = this.props.data || [];

		return _react2['default'].createElement(
			'thead',
			null,
			_react2['default'].createElement(
				'tr',
				null,
				data.map(function (header, i) {
					return _react2['default'].createElement(
						'th',
						{ key: i },
						header
					);
				})
			)
		);
	}
});
JTHead.defaultProps = {
	data: []
};

exports['default'] = JTHead;
module.exports = exports['default'];