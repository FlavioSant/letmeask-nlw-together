import styled, { css } from "styled-components";

interface ButtonContainerProps {
  isOutlined: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #835afd;
  border-radius: 8px;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  height: 50px;
  padding: 0 32px;
  transition: filter 0.2s;

  svg {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ isOutlined }) =>
    isOutlined &&
    css`
      background: #fff;
      border: 1px solid #835afd;
      color: #835afd;
      transition: color 0.2s;

      &:not(:disabled):hover {
        filter: none;
        border-color: #6f4bd8;
        color: #6f4bd8;
      }
    `}
`;
