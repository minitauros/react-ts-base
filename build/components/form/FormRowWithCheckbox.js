import React from 'react';
// Used to generate unique HTML IDs.
var i = 0;
export var FormRowWithInput = function (props) {
    var classNames = ['form-row'];
    if (props.isRequired && !props.hideAsterisks) {
        classNames.push('required');
    }
    if (props.errMessage !== undefined && props.errMessage !== '') {
        classNames.push('has-error');
    }
    i++;
    var htmlId = "form-input-" + i;
    var onChange = function (e) {
        props.onChange(e.target.value);
    };
    return (React.createElement("div", { className: classNames.join(' ') },
        React.createElement("div", { className: "input-container" },
            React.createElement("input", { required: props.isRequired, id: htmlId, name: props.name, type: props.type || 'checkbox', value: props.value, onChange: onChange, disabled: props.isDisabled || false })),
        React.createElement("label", { htmlFor: htmlId }, props.label),
        props.errMessage !== undefined && props.errMessage !== '' &&
            React.createElement("div", { className: 'error' }, props.errMessage),
        props.comment !== undefined && props.comment !== '' &&
            React.createElement("div", { className: 'comment' }, props.comment),
        props.children));
};
