import React, { memo } from 'react';

export interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

const If: React.FC<IfProps> = ({ condition, children }) => {
  if (condition === true) {
    return children;
  }
  return null;
};

export default memo<IfProps>(If);
