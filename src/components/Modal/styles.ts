import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f8f8f8;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100%;
  max-width: 590px;
  max-height: 390px;

  svg {
    color: #e73f5d;
    margin-bottom: 2rem;
  }

  h1 {
    color: #29292e;
    margin: 1rem 0;
  }

  p {
    color: #737380;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;

  button {
    background: #e73f5d;
    border-radius: 8px;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    height: 50px;
    min-width: 130px;
    padding: 0 2rem;
    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:first-child {
    background: #dbdcdd;
    color: #737380;
  }
`;
