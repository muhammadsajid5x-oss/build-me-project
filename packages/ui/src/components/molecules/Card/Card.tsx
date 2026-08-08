import React from 'react';
export const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border rounded-lg p-4 shadow-sm bg-white"><h3 className="font-bold mb-2">{title}</h3><div>{children}</div></div>
);
