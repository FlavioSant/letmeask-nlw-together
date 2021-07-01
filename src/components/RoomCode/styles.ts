import styled from "styled-components";

export const RoomCodeButton = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;
  display: flex;

  &:hover {
    div {
      filter: brightness(0.9);
    }
  }

  div {
    background: #835afd;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transition: filter 0.2s;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 230px;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
