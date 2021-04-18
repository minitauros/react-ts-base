import React from 'react';
export var SuccessMessage = function (props) {
    if (!props.children) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("p", { className: "success" }, props.children));
};
