import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  const baseStyles =
    "px-5 py-3 rounded transition-all duration-300 ease-in-out text-white";

  return (
    <button
      className={`${baseStyles} ${className} hover:bg-opacity-80`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
