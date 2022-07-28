import React, {ReactNode} from 'react';

export enum gridContentPosition {
  center,
}

export enum gridItemAlignment {
  end,
}

interface props {
  children?: Readonly<ReactNode>;
  contentPosition?: gridContentPosition;
  itemAlignment?: gridItemAlignment;
}

export const Grid: React.FC<props> = function (props: props) {
  if (!props.children) {
    return <></>;
  }

  const classNames = ['grid'];

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

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
};
