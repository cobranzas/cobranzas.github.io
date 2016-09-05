'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _JTHeadJs = require('./JTHead.js');

var _JTHeadJs2 = _interopRequireDefault(_JTHeadJs);

var _JTBodyJs = require('./JTBody.js');

var _JTBodyJs2 = _interopRequireDefault(_JTBodyJs);

var JTable = _react2['default'].createClass({
	displayName: 'JTable',

	render: function render() {
		return _react2['default'].createElement(
			'table',
			null,
			_react2['default'].createElement(_JTHeadJs2['default'], { data: this.props.headers }),
			_react2['default'].createElement(_JTBodyJs2['default'], { data: this.props.data })
		);
	}
});

JTable.defaultProps = {
	headers: [],
	data: []
};

exports['default'] = JTable;
module.exports = exports['default'];