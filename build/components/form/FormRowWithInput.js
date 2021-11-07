/**
 * Represents a form row with an <input> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */
import React from 'react';
import { setUpFloatingLabels, floatLabelClass } from 'floating-labels/build';
// Used to generate unique HTML IDs.
var i = 0;
export var FormRowWithInput = function (props) {
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
    if (props.icon !== undefined) {
        classNames.push('has-icon');
    }
    i++;
    var htmlId = "form-input-" + i;
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
        React.createElement("label", { htmlFor: htmlId }, props.label),
        React.createElement("div", { className: "input-container" },
            props.icon !== undefined && (React.createElement("div", { className: "icon-container" }, props.icon)),
            React.createElement("input", { required: props.isRequired, autoFocus: props.autofocus, id: htmlId, name: props.name, type: props.type || 'text', value: props.value, onChange: onChange, onFocus: onFocus, disabled: props.isDisabled || false })),
        props.errMessage !== undefined && props.errMessage !== '' &&
            React.createElement("div", { className: 'error' }, props.errMessage),
        props.comment !== undefined && props.comment !== '' &&
            React.createElement("div", { className: 'comment' }, props.comment),
        props.children));
};
