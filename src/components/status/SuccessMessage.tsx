import React, {ReactNode} from 'react';

interface props {
  children?: Readonly<ReactNode>;
}

export const SuccessMessage: React.FC<props> = function (props: props) {
  if (!props.children) {
    return <></>;
  }

  return (
    <p className="success">{props.children}</p>
  );
};
