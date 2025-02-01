import React, { ReactNode } from "react";

// Define types for the props to include children
interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto ">{children}</div>;
};

export default Container;
