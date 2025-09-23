import React from 'react';

type SearchBarProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder
}) => {
  return (
	  <input
	    type="text"
	    value={value}
	    onChange={(e) => onChange(e.target.value)}
	    placeholder={placeholder ?? "Search..."}
	  />
  );
};