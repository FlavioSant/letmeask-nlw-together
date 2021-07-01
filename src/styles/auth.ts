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
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 7.5rem 5rem;

    img {
      width: 320px;
      height: 320px;
    }

    strong {
      font: 700 2.25rem "Poppins", sans-serif;
      line-height: 2.625rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
      color: #f8f8f8;
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 8;
    padding: 0 2rem;
  }

  @media (max-width: 1080px) {
    aside {
      flex: 5;

      img {
        width: 280px;
        height: 280px;
      }

      strong {
        font-size: 1.9rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;

    aside {
      flex: 1;
      padding: 1rem 3rem;

      img {
        width: 150px;
        height: 150px;
      }

      p {
        margin-top: 0.5rem;
      }
    }

    main {
      padding: 0 1rem;
    }
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
    width: 160px;
    height: 75px;
    align-self: center;
  }

  h2 {
    font-size: 1.5rem;
    margin: 4rem 0 1.5rem;
    font-family: "Poppins", sans-serif;
  }

  form {
    button,
    input {
      width: 100%;
    }

    input {
      height: 3.125rem;
      background: #fff;
      border-radius: 8px;
      border: 1px solid #a8a8a8;
      padding: 0 1rem;
      outline: 0;

      &:focus {
        border-color: #835afd;
      }
    }

    button {
      margin-top: 1rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: #737380;
    margin-top: 1rem;

    a {
      color: #e559f9;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media (max-width: 720px) {
    max-width: 400px;

    > img {
      width: 180px;
      height: 90px;
    }
  }
`;

export const CreateRoomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 8px;
  border: 1px solid #a8a8b3;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  color: #29292e;
  cursor: pointer;
  font-weight: 500;
  height: 50px;
  margin-top: 4rem;
  transition: border 0.2s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    border-color: #29292e;
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  color: #a8a8a8;
  font-size: 0.875rem;
  margin: 2rem 0;

  &::before {
    content: "";
    flex: 1;
    background: #a8a8a8;
    height: 1px;
    margin-right: 1rem;
  }

  &::after {
    content: "";
    flex: 1;
    background: #a8a8a8;
    height: 1px;
    margin-left: 1rem;
  }
`;
