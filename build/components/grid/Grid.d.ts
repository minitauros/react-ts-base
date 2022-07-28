import React, { ReactNode } from 'react';
export declare enum gridContentPosition {
    center = 0
}
export declare enum gridItemAlignment {
    end = 0
}
interface props {
    children?: Readonly<ReactNode>;
    contentPosition?: gridContentPosition;
    itemAlignment?: gridItemAlignment;
}
export declare const Grid: React.FC<props>;
export {};
