var _a;
import React from 'react';
export var HideOption;
(function (HideOption) {
    HideOption[HideOption["xs"] = 0] = "xs";
    HideOption[HideOption["s"] = 1] = "s";
    HideOption[HideOption["m"] = 2] = "m";
    HideOption[HideOption["l"] = 3] = "l";
    HideOption[HideOption["xl"] = 4] = "xl";
    HideOption[HideOption["xsOnly"] = 5] = "xsOnly";
    HideOption[HideOption["sOnly"] = 6] = "sOnly";
    HideOption[HideOption["mOnly"] = 7] = "mOnly";
    HideOption[HideOption["lOnly"] = 8] = "lOnly";
    HideOption[HideOption["xlOnly"] = 9] = "xlOnly";
})(HideOption || (HideOption = {}));
var classNamesByHideOption = (_a = {},
    _a[HideOption.xs] = 'hidden-xs',
    _a[HideOption.s] = 'hidden-s',
    _a[HideOption.m] = 'hidden-m',
    _a[HideOption.l] = 'hidden-l',
    _a[HideOption.xl] = 'hidden-xl',
    _a[HideOption.xsOnly] = 'hidden-xs-only',
    _a[HideOption.sOnly] = 'hidden-s-only',
    _a[HideOption.mOnly] = 'hidden-m-only',
    _a[HideOption.lOnly] = 'hidden-l-only',
    _a[HideOption.xlOnly] = 'hidden-xl-only',
    _a);
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
    if (props.hide) {
        props.hide.forEach(function (hideOption) {
            classNames.push(classNamesByHideOption[hideOption]);
        });
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
