import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonContainer className="button" {...props} />;
};

export { Button };
