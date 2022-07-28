import React, {ReactNode} from 'react';

interface props {
  children?: Readonly<ReactNode>;
  isRequired?: boolean;
  isDisabled?: boolean;
  hideAsterisks?: boolean; // If true, hides the * from required input labels.
  type?: string; // E.g. "checkbox" (default) or "radio".
  value: string;
  label: string;
  name: string; // Seems necessary for autofill options to work.
  comment?: React.ReactNode;
  errMessage?: string;
  onChange: (newVal: string) => void;
}

// Used to generate unique HTML IDs.
let i: number = 0;

export const FormRowWithInput: React.FC<props> = function (props: props) {
  const classNames = ['form-row'];

  if (props.isRequired && !props.hideAsterisks) {
    classNames.push('required');
  }

  if (props.errMessage !== undefined && props.errMessage !== '') {
    classNames.push('has-error');
  }

  i++;
  const htmlId = `form-input-${i}`;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div className={classNames.join(' ')}>
      <div className="input-container">
        <input
          required={props.isRequired}
          id={htmlId}
          name={props.name}
          type={props.type || 'checkbox'}
          value={props.value}
          onChange={onChange}
          disabled={props.isDisabled || false}
        />
      </div>
      <label htmlFor={htmlId}>{props.label}</label>
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
