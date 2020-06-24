'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useUnmount = function (effect, deps) {
    var tracked = React.useRef();
    React.useEffect(function () {
        tracked.current = deps;
    }, deps);
    React.useEffect(function () {
        return function () {
            effect(tracked.current);
        };
    }, []);
    return;
};

exports.useUnmount = useUnmount;
//# sourceMappingURL=index.js.map
