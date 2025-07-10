
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface NumberPickerProps {
  min?: number;
  max?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
}

const NumberPicker = ({ min = 0, max = 50, initialValue = 0, onChange }: NumberPickerProps) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue) && inputValue >= min && inputValue <= max) {
      setValue(inputValue);
      onChange?.(inputValue);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={handleDecrement}
        disabled={value <= min}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center transition-all duration-200 hover:from-blue-100 hover:to-blue-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none active:scale-95"
      >
        <Minus className="w-5 h-5 text-blue-600" />
      </button>
      
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          className="w-24 h-16 text-3xl font-bold text-center border-2 border-gray-200 rounded-xl bg-gradient-to-b from-gray-50 to-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
        />
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <span className="text-xs text-gray-500 font-medium">{min} - {max}</span>
        </div>
      </div>
      
      <button
        onClick={handleIncrement}
        disabled={value >= max}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center transition-all duration-200 hover:from-blue-100 hover:to-blue-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none active:scale-95"
      >
        <Plus className="w-5 h-5 text-blue-600" />
      </button>
    </div>
  );
};

export default NumberPicker;
