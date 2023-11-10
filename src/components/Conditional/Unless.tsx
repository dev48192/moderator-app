import React, { memo } from 'react';

export interface UnlessProps {
  condition: boolean;
  children: React.ReactNode;
}

const Unless: React.FC<UnlessProps> = ({ condition, children }) => {
  if (condition !== true) {
    return children;
  }
  return null;
};

export default memo<UnlessProps>(Unless);
