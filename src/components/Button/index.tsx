import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isEnabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={!isEnabled}>{title}</ButtonContainer>;
};

export default Button;