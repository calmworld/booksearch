import React from 'react';

// Define an interface for the props
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, ...delegated }) => {
  // Generate a unique ID if one isn't provided
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  return (
    <>
      <label htmlFor={appliedId}>
        {label}
      </label>
      <input
        id={appliedId}
        {...delegated}
      />
    </>
  );
}

export default TextInput;
