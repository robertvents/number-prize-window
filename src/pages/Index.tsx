
import React, { useState } from 'react';
import Modal from '../components/Modal';
import NumberPicker from '../components/NumberPicker';

const Index = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const handleNumberChange = (value: number) => {
    setSelectedNumber(value);
    console.log('Number of prizes:', value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center">
      <Modal title="Number of Prizes">
        <div className="space-y-8">
          <NumberPicker
            min={0}
            max={50}
            initialValue={0}
            onChange={handleNumberChange}
          />
          
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">Selected:</p>
            <p className="text-2xl font-bold text-blue-600">{selectedNumber} {selectedNumber === 1 ? 'prize' : 'prizes'}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
