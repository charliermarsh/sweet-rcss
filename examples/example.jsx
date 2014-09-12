var React = require('react');
var RCSS = require('rcss');

rcss big {
    fontSize: '32px';
}

rcss red {
    color: 'red';
}

rcss bigRed {
    big;
    red;
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
