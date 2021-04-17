import React, {ReactNode} from 'react';

interface props {
  children: Readonly<{ children?: ReactNode }>,
  classNames?: Array<string>,
  centerText?: boolean;

  // Column sizes, e.g. "s=12" would mean "spans 12/12 columns on small screens".
  xs?: number;
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
}

export const GridCell: React.FC<props> = function (props: props) {
  if (!props.children) {
    return <></>;
  }

  // Span cannot be lower than 1 or higher than 12.
  const colSpan = (span: number): number => {
    if (span < 1) {
      return 1;
    } else if (span > 12) {
      return 12;
    }
    return span;
  };

  const classNames = [];
  if (props.xs !== undefined) {
    classNames.push(`col-xs-${colSpan(props.xs)}`);
  }
  if (props.s !== undefined) {
    classNames.push(`col-s-${colSpan(props.s)}`);
  }
  if (props.m !== undefined) {
    classNames.push(`col-m-${colSpan(props.m)}`);
  }
  if (props.l !== undefined) {
    classNames.push(`col-l-${colSpan(props.l)}`);
  }
  if (props.xl !== undefined) {
    classNames.push(`col-xl-${colSpan(props.xl)}`);
  }

  if (props.centerText !== undefined && props.centerText) {
    classNames.push('text-center');
  }

  if (props.classNames !== undefined) {
    props.classNames.forEach((className) => {
      classNames.push(className);
    });
  }

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
};
