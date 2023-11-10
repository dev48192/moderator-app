import React, { useState } from 'react';
import If from '../Conditional/If';
import CaretDownIcon from '../../assets/CaretDownIcon';
import Styles from './Categories.module.scss';

const Collapsible: React.FC<{title: string; children?: React.ReactNode}> = ({ title, children }) => {
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
        <div className={Styles['collapsible-header-text']}>{title}</div>
      </div>
      <If condition={isOpen}>
        <div className={Styles['collapsible-children']}>{children}</div>
      </If>
    </div>
  );
};

export default Collapsible