import React from "react";

const TextHelper = ({
  children,
  className,
}: {
  children?: React.ReactNode | string;
  className?: string;
}) => {
  return <div className={`tracking-wider p-4 ${className}`}>{children}</div>;
};

export default TextHelper;
