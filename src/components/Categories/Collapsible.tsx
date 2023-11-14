import React, { useState } from 'react';
import If from '../Conditional/If';
import CaretDownIcon from '../../assets/CaretDownIcon';
import Styles from './Categories.module.scss';

const Collapsible: React.FC<{header: React.ReactNode; children?: React.ReactNode}> = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  console.log('jhekk' ,children)

  return (
    <div className={Styles['collapsible']}>
      <div className={Styles['collapsible-header']} onClick={toggleCollapsible}>
        <If condition={!!children}>
          <CaretDownIcon className={isOpen ? Styles['caret-down-icon'] : Styles['caret-icon']} />
        </If>
        {header}
      </div>
      <If condition={isOpen}>
        <div className={Styles['collapsible-children']}>{children}</div>
      </If>
    </div>
  );
};

export default Collapsible