import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-6 flex justify-center">
      <input
        type="search"
        placeholder="Type something to search..."
        className="w-80 px-3 py-2 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 placeholder-gray-500"
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
}