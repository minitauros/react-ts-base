import React from 'react';
import {setUpFloatingLabels} from 'floating-labels/build';

interface props {
  label: string;
  classNames?: Array<string>;
}

export const FormRowWithSubmitButton: React.FC<props> = function (props: props) {
  setUpFloatingLabels();

  const classNames= ['form-row spacing-top-m'];

  if (props.classNames !== undefined) {
    props.classNames.forEach((className) => {
      classNames.push(className);
    });
  }

  return (
    <div className={classNames.join(' ')}>
      <button className="button-primary">{props.label}</button>
    </div>
  );
};
