import React from 'react';
export const Modal: React.FC<{ isOpen: boolean; title: string; onClose: () => void; children: React.ReactNode }> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;
  return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="bg-white p-6 rounded shadow-lg"><h2 className="font-bold">{title}</h2>{children}<button onClick={onClose}>Close</button></div></div>);
};
