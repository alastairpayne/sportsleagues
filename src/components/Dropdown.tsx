import React from 'react';

import { dropdownUnselectedValue } from '../util';

type DropdownProps = {
	value: string;
	onChange: (value:string) => void;
	options: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={dropdownUnselectedValue}>All sports</option>
      {options.map(sport => (
        <option key={sport}
          value={sport}>
          {sport}
        </option>
      ))}
    </select>
  );
};