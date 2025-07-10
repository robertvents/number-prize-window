
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 min-w-[320px] max-w-md w-full transform transition-all duration-300 scale-100">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 text-center">{title}</h2>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
