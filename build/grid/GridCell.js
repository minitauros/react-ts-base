import React from 'react';
export var GridCell = function (props) {
    if (!props.children) {
        return React.createElement(React.Fragment, null);
    }
    // Span cannot be lower than 1 or higher than 12.
    var colSpan = function (span) {
        if (span < 1) {
            return 1;
        }
        else if (span > 12) {
            return 12;
        }
        return span;
    };
    var classNames = [];
    if (props.xs !== undefined) {
        classNames.push("col-xs-" + colSpan(props.xs));
    }
    if (props.s !== undefined) {
        classNames.push("col-s-" + colSpan(props.s));
    }
    if (props.m !== undefined) {
        classNames.push("col-m-" + colSpan(props.m));
    }
    if (props.l !== undefined) {
        classNames.push("col-l-" + colSpan(props.l));
    }
    if (props.xl !== undefined) {
        classNames.push("col-xl-" + colSpan(props.xl));
    }
    if (props.centerText !== undefined && props.centerText) {
        classNames.push('text-center');
    }
    if (props.classNames !== undefined) {
        props.classNames.forEach(function (className) {
            classNames.push(className);
        });
    }
    return (React.createElement("div", { className: classNames.join(' ') }, props.children));
};
