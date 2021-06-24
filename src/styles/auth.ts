import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    display: flex;
    flex-direction: column;
    flex: 7;
    justify-content: center;
    background: #835afd;
    color: #fff;
    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 8;
    padding: 0 32px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  max-width: 320px;
  text-align: center;
  width: 100%;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }

  form {
    button,
    input {
      width: 100%;
    }

    input {
      height: 50px;
      background: #fff;
      border-radius: 8px;
      border: 1px solid #a8a8a8;
      padding: 0 16px;
    }

    button {
      margin-top: 16px;
    }
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;

    a {
      color: #e559f9;
    }
  }
`;

export const CreateRoomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ea4335;
  border-radius: 8px;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  height: 50px;
  margin-top: 64px;
  transition: filter 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  color: #a8a8a8;
  font-size: 14px;
  margin: 32px 0;

  &::before {
    content: "";
    flex: 1;
    background: #a8a8a8;
    height: 1px;
    margin-right: 16px;
  }

  &::after {
    content: "";
    flex: 1;
    background: #a8a8a8;
    height: 1px;
    margin-left: 16px;
  }
`;
