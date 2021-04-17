/**
 * Represents a form row with a <textarea> field.
 *
 * This is a component so that we can abstract things like animation of the label.
 */

import React, {ReactNode} from 'react';
import {setUpFloatingLabels} from '../../util/floating_label';

interface props {
  isRequired?: boolean;
  hideAsterisks?: boolean; // If true, hides the * from required input labels.
  autofocus?: boolean;
  type?: string;
  value: string;
  onChange: (newVal: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

  // We can choose if we want to use either a label or a placeholder.
  // Sometimes a label contains too much text to be displayed nicely.
  label?: string;
  placeholder?: string;

  name: string; // Seems necessary for autofill options to work.
  children?: Readonly<{children?: ReactNode}>;
  style?: object;
  comment?: string;
  errMessage?: string;
}

let i: number = 0;

export const FormRowWithTextarea: React.FC<props> = function (props: props) {
  setUpFloatingLabels();

  const classNames = ['form-row'];

  if (props.isRequired && !props.hideAsterisks) {
    classNames.push('required');
  }

  if (props.value) {
    classNames.push('has-input-value');
  }

  if (props.errMessage !== undefined && props.errMessage !== '') {
    classNames.push('has-error');
  }

  if (props.label === undefined) {
    classNames.push('has-no-label');
  }

  i++;
  const htmlId = `form-textarea-${i}`;

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.value);
  };

  const onFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (props.onFocus !== undefined) {
      props.onFocus(e);
    }
  };

  return (
    <div className={classNames.join(' ')}>
      {
        props.label !== undefined && <label htmlFor={htmlId}>{props.label}</label>
      }
      <div className="input-container">
        <textarea
          required={props.isRequired}
          autoFocus={props.autofocus}
          id={htmlId}
          name={props.name}
          value={props.value}
          onChange={onChange}
          onFocus={onFocus}
          style={props.style}
          placeholder={props.placeholder !== undefined ? props.placeholder : ''}
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
