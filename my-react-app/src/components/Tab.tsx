import React from 'react';

interface TabButtonProps {
  children: React.ReactNode;
  onSelect: () => void;
  isSelected: boolean;
}

export default function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
  return (
    <button 
      className={`
        w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out
        ${isSelected 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 transform scale-105' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
        active:transform active:scale-95
      `}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
