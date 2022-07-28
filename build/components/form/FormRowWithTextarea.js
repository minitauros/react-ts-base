/**
 * Represents a form row with a <textarea> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */
import React from 'react';
import { floatLabelClass, setUpFloatingLabels } from 'floating-labels/build';
var i = 0;
export var FormRowWithTextarea = function (props) {
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
    if (props.label === undefined) {
        classNames.push('has-no-label');
    }
    i++;
    var htmlId = "form-textarea-".concat(i);
    var onChange = function (e) {
        props.onChange(e.target.value);
    };
    var onFocus = function (e) {
        if (props.onFocus !== undefined) {
            props.onFocus(e);
        }
        if (props.selectAllOnFocus) {
            e.target.select();
        }
    };
    return (React.createElement("div", { className: classNames.join(' ') },
        props.label !== undefined && React.createElement("label", { htmlFor: htmlId }, props.label),
        React.createElement("div", { className: "input-container" },
            React.createElement("textarea", { required: props.isRequired, autoFocus: props.autofocus, id: htmlId, name: props.name, value: props.value, onChange: onChange, onFocus: onFocus, style: props.style, placeholder: props.placeholder !== undefined ? props.placeholder : '' })),
        props.errMessage !== undefined && props.errMessage !== '' &&
            React.createElement("div", { className: 'error' }, props.errMessage),
        props.comment !== undefined && props.comment !== '' &&
            React.createElement("div", { className: 'comment' }, props.comment),
        props.children));
};
