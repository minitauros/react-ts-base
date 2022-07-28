/**
 * Represents a form row with a <select> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */

import React, {ReactNode} from 'react';
import {floatLabelClass, setUpFloatingLabels} from 'floating-labels/build';

export interface selectOptions {
  [key: string]: string | number; // value => label
}

interface props {
  children?: Readonly<ReactNode>;
  isRequired?: boolean;
  hideAsterisks?: boolean; // If true, hides the * from required input labels.
  autofocus?: boolean;
  value: string;
  onChange: (newVal: string) => void;
  label: string;
  name: string; // Seems necessary for autofill options to work.
  options: selectOptions;
  style?: object;
  comment?: string;
  errMessage?: string;
}

let i: number = 0;

export const FormRowWithSelect: React.FC<props> = function (props: props) {
  setUpFloatingLabels();

  const classNames = ['form-row'];

  if (props.isRequired && !props.hideAsterisks) {
    classNames.push('required');
  }

  if (props.value) {
    classNames.push(floatLabelClass);
  }

  if (props.errMessage !== undefined && props.errMessage !== '') {
    classNames.push('has-error');
  }

  i++;
  const htmlId = `form-select-${i}`;

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div className={classNames.join(' ')}>
      <label htmlFor={htmlId}>{props.label}</label>
      <div className="input-container">
        <select
          required={props.isRequired}
          autoFocus={props.autofocus}
          id={htmlId}
          name={props.name}
          value={props.value}
          onChange={onChange}
          style={props.style}
        >
          <option>{/*Show empty option so that the label doesn't merge with the first option.*/}</option>
          {
            Object.keys(props.options).map((key) => {
              return <option key={key} value={key}>{props.options[key]}</option>;
            })
          }
        </select>
      </div>
      {
        props.errMessage !== undefined && props.errMessage !== '' &&
        <div className={'error'}>{props.errMessage}</div>
      }
      {
        props.comment !== undefined && props.comment !== '' &&
        <div className={'comment'}>{props.comment}</div>
      }
      {props.children}
    </div>
  );
};
