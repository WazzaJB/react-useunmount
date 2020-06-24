import { useRef, useEffect } from 'react';

var useUnmount = function (effect, deps) {
    var tracked = useRef();
    useEffect(function () {
        tracked.current = deps;
    }, deps);
    useEffect(function () {
        return function () {
            effect(tracked.current);
        };
    }, []);
    return;
};

export { useUnmount };
//# sourceMappingURL=index.es.js.map
