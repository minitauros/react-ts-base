/**
 * Represents a form row with a <select> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */
import React from 'react';
import { floatLabelClass, setUpFloatingLabels } from 'floating-labels/build';
var i = 0;
export var FormRowWithSelect = function (props) {
    setUpFloatingLabels();
    var classNames = ['form-row'];
    if (props.isRequired && !props.hideAsterisks) {
        classNames.push('required');
    }
    if (props.value) {
        classNames.push(floatLabelClass);
    }
    if (props.errMessage !== undefined && props.errMessage !== '') {
        classNames.push('has-error');
    }
    i++;
    var htmlId = "form-select-".concat(i);
    var onChange = function (e) {
        props.onChange(e.target.value);
    };
    return (React.createElement("div", { className: classNames.join(' ') },
        React.createElement("label", { htmlFor: htmlId }, props.label),
        React.createElement("div", { className: "input-container" },
            React.createElement("select", { required: props.isRequired, autoFocus: props.autofocus, id: htmlId, name: props.name, value: props.value, onChange: onChange, style: props.style },
                React.createElement("option", null),
                Object.keys(props.options).map(function (key) {
                    return React.createElement("option", { key: key, value: key }, props.options[key]);
                }))),
        props.errMessage !== undefined && props.errMessage !== '' &&
            React.createElement("div", { className: 'error' }, props.errMessage),
        props.comment !== undefined && props.comment !== '' &&
            React.createElement("div", { className: 'comment' }, props.comment),
        props.children));
};
