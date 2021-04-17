import React from 'react';
export var gridContentPosition;
(function (gridContentPosition) {
    gridContentPosition[gridContentPosition["center"] = 0] = "center";
})(gridContentPosition || (gridContentPosition = {}));
export var gridItemAlignment;
(function (gridItemAlignment) {
    gridItemAlignment[gridItemAlignment["end"] = 0] = "end";
})(gridItemAlignment || (gridItemAlignment = {}));
export var Grid = function (props) {
    if (!props.children) {
        return React.createElement(React.Fragment, null);
    }
    var classNames = ['grid'];
    if (props.contentPosition !== undefined) {
        switch (props.contentPosition) {
            case gridContentPosition.center:
                classNames.push('flex-content-center');
        }
    }
    if (props.itemAlignment !== undefined) {
        switch (props.itemAlignment) {
            case gridItemAlignment.end:
                classNames.push('flex-items-end');
        }
    }
    return (React.createElement("div", { className: classNames.join(' ') }, props.children));
};
