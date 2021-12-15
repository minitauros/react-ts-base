import React, { ReactNode } from 'react';
interface props {
    children: Readonly<{
        children?: ReactNode;
    }>;
    classNames?: Array<string>;
    centerText?: boolean;
    xs?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
    hide?: Array<HideOption>;
}
export declare enum HideOption {
    xs = 0,
    s = 1,
    m = 2,
    l = 3,
    xl = 4,
    xsOnly = 5,
    sOnly = 6,
    mOnly = 7,
    lOnly = 8,
    xlOnly = 9
}
export declare const GridCell: React.FC<props>;
export {};
