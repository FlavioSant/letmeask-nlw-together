import styled from "styled-components";

export const Container = styled.div`
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;

    form {
      textarea {
        background: #fefefe;
        border: 0;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        min-height: 130px;
        padding: 1rem;
        resize: vertical;
        outline: 0;
        width: 100%;

        &:focus {
          border: 1px solid #835afd;
        }
      }
    }
  }
`;

export const Header = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e2e2;

  & > div {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
      width: 95px;
      height: 45px;
      max-height: 45px;
    }

    div {
      display: flex;
      gap: 1rem;

      button {
        height: 2.5rem;
      }
    }

    @media (max-width: 624px) {
      display: flex;
      flex-direction: column;

      > img {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const RoomTitle = styled.div`
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: #29292e;
  }

  span {
    margin-left: 1rem;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 1rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  & > span {
    font-size: 0.875rem;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 0.5rem;
    color: #29292e;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const QuestionList = styled.div`
  margin-top: 2rem;
`;

export const EmptyQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.5;
  margin-top: 5rem;

  img {
    height: 150px;
    width: 150px;
  }

  h2 {
    color: #29292e;
    margin-top: 1rem;
  }

  p {
    color: #737380;
    margin-top: 1rem;
  }
`;
