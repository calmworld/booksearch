import React from 'react';

// Define the styles for visually hiding the element
const hiddenStyles: React.CSSProperties = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

// Define the props for the VisuallyHidden component
interface VisuallyHiddenProps {
  children: React.ReactNode;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  return (
    <span style={hiddenStyles}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
