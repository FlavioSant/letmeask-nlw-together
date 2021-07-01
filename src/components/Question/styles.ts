import styled, { css } from "styled-components";

interface ButtonsProps {
  hasLiked: boolean;
}

interface QuestionProps {
  isAnswered: boolean;
  isHighlighted: boolean;
}

export const QuestionContainer = styled.div<QuestionProps>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  & + div {
    margin-top: 0.5rem;
  }

  ${({ isHighlighted, isAnswered }) =>
    isHighlighted &&
    !isAnswered &&
    css`
      background: #f4f0ff;
      border: 1px solid #835afd;

      footer span {
        color: #29292e;
      }
    `}

  ${({ isAnswered }) =>
    isAnswered &&
    css`
      background: #dbdcdd;
    `}

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
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
    color: #737380;
    font-size: 0.875rem;
  }
`;

export const ButtonsContainer = styled.div<ButtonsProps>`
  display: flex;
  gap: 1rem;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    color: #737380;

    &:hover {
      color: #835afd;
    }

    &.like-button {
      display: flex;
      align-items: flex-end;
      gap: 0.5rem;
      transition: filter 0.2s;

      ${({ hasLiked }) =>
        hasLiked &&
        css`
          color: #835afd;
        `}
    }

    &.delete-button:hover {
      color: #e73f5d;
    }
  }
`;
