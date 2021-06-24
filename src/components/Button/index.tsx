import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOutlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({ isOutlined = false, ...props }) => {
  return <ButtonContainer isOutlined={isOutlined} {...props} />;
};

export { Button };
