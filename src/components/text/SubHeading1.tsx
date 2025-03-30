import React, { ReactNode } from "react";

const SubHeading1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span className={`text-base tracking-wider   ${className}`}>
      {children}
    </span>
  );
};

export default SubHeading1;
