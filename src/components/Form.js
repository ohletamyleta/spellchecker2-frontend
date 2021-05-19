import React from 'react';

export const Button = (props) => {
  console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type == 'primary' ? 'btn btn-primary' : 'btn btn-secondary'
      }
      onClick={props.action}>
      {props.title}
    </button>
  );
};

export const Input = (props) => {
  return (
    <div className='form-group'>
      <label for={props.name} className='form-label'>
        {props.title}
      </label>
      <input
        className='form-control'
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export const TextArea = (props) => (
  <div className='form-group'>
    <label className='form-label'>{props.title}</label>
    <textarea
      className='form-control'
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);

