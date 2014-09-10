var React = require('react');
var RCSS = require('rcss');

rcss red {
    backgroundColor: 'red'
}

RCSS.injectAll();

var Component = React.createClass({
    render: function() {
        return <div className={red}>Hello, world!</div>;
    }
});

if (typeof window !== 'undefined') {
    React.renderComponent(Component(), document.body);
}
