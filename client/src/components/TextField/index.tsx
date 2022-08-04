import React from 'react';

interface IField {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  touched: boolean | any;
  errors: any;
  disabled?: boolean;
  className?: string;
}

function TextField({
  value,
  type,
  placeholder,
  name,
  onBlur,
  onChange,
  disabled,
  errors,
  touched,
  className,
}: IField) {
  return (
    <>
      <input
        type={type ?? 'text'}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder ?? name}
        disabled={disabled ?? false}
        className={`${className ?? ''}`}
      />
      <div>
        {touched[name] && errors[name] ? (
          <p style={{ color: 'red', fontSize: '15px' }}>{errors[name]}</p>
        ) : null}
      </div>
    </>
  );
}

export default TextField;
