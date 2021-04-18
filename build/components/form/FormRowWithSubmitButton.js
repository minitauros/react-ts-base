import React from 'react';
import { setUpFloatingLabels } from 'floating-labels/build';
export var FormRowWithSubmitButton = function (props) {
    setUpFloatingLabels();
    var classNames = ['form-row spacing-top-m'];
    if (props.classNames !== undefined) {
        props.classNames.forEach(function (className) {
            classNames.push(className);
        });
    }
    return (React.createElement("div", { className: classNames.join(' ') },
        React.createElement("button", { className: "button-primary" }, props.label)));
};
