import React, {ReactNode} from 'react';

interface props {
  children?: Readonly<ReactNode>;
}

export const ErrorMessage: React.FC<props> = function (props: props) {
  if (!props.children) {
    return <></>;
  }

  return (
    <p className="error">{props.children}</p>
  );
};
