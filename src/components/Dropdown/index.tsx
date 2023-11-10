import React, { useState } from "react";
import Styles from "./Dropdown.module.scss";

export interface DropdownOption {
    value: string;
    displayName: string;
}
const Dropdown: React.FC<{
  options: Array<DropdownOption>;
  defaultValue?: string;
  selectedValue?: string;
  className?: string;
  onChange: (value: DropdownOption) => void;
}> = ({ defaultValue, options, selectedValue='', className, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`${Styles["custom-dropdown"]} ${className}`}>
      <div className={Styles["dropdown-header"]} onClick={handleToggleDropdown}>
        {selectedValue || defaultValue || 'Select...'}
      </div>
      {isOpen && (
        <ul className={Styles["dropdown-options"]}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleChange(option)}>
              {option.displayName}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default Dropdown;
