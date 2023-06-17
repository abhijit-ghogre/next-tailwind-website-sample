import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

function SectionTitle(props: Props) {
  const { className = "", children } = props;
  return (
    <div
      className={`text-4.5xl font-bold uppercase leading-none sm:text-8xl ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionTitle;
