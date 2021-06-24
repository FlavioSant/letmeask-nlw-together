import styled from "styled-components";

export const ButtonContainer = styled.button`
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
`;