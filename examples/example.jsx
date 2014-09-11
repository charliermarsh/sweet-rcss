var React = require('react');
var RCSS = require('rcss');

rcss bigRed {
    color: 'red';
    fontSize: '32px'
}

RCSS.injectAll();

var Component = React.createClass({
    render: function() {
        return <div className={bigRed}>Hello, world!</div>;
    }
});

if (typeof window !== 'undefined') {
    React.renderComponent(Component(), document.body);
}
