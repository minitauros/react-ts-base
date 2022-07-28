/**
 * Represents a form row with an <input> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */

import React, {ReactNode} from 'react';
import {setUpFloatingLabels, floatLabelClass} from 'floating-labels/build';

interface props {
  children?: Readonly<ReactNode>;
  isRequired?: boolean;
  isDisabled?: boolean;
  hideAsterisks?: boolean; // If true, hides the * from required input labels.
  selectAllOnFocus?: boolean; // Select all contents on focus?
  autofocus?: boolean;
  type?: string; // E.g. "text" (default) or "password".
  value: string;
  label: string;
  name: string; // Seems necessary for autofill options to work.
  comment?: React.ReactNode;
  icon?: React.ReactNode; // If given, will display this icon to the left of the input.
  errMessage?: string;
  onChange: (newVal: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// Used to generate unique HTML IDs.
let i: number = 0;

export const FormRowWithInput: React.FC<props> = function (props: props) {
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

  if (props.icon !== undefined) {
    classNames.push('has-icon');
  }

  i++;
  const htmlId = `form-input-${i}`;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (props.onFocus !== undefined) {
      props.onFocus(e);
    }

    if (props.selectAllOnFocus) {
      e.target.select();
    }
  };

  return (
    <div className={classNames.join(' ')}>
      <label htmlFor={htmlId}>{props.label}</label>
      <div className="input-container">
        {
          props.icon !== undefined && (
            <div className="icon-container">
              {props.icon}
            </div>
          )
        }
        <input
          required={props.isRequired}
          autoFocus={props.autofocus}
          id={htmlId}
          name={props.name}
          type={props.type || 'text'}
          value={props.value}
          onChange={onChange}
          onFocus={onFocus}
          disabled={props.isDisabled || false}
        />
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
