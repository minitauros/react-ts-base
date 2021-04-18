import React from 'react';
export var ErrorMessage = function (props) {
    if (!props.children) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("p", { className: "error" }, props.children));
};
