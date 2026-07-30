import React from "react";

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-lg shadow-sm p-6 ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      )}
      <div>{children}</div>
    </div>
  );
};
