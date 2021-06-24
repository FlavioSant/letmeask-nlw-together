import styled, { css } from "styled-components";

interface QuestionProps {
  hasLiked: boolean;
}

export const QuestionContainer = styled.div<QuestionProps>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + div {
    margin-top: 8px;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      color: #737380;

      &.like-button {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        transition: filter 0.2s;

        ${({ hasLiked }) =>
          hasLiked &&
          css`
            color: #835afd;
          `}
      }

      &:hover {
        filter: brightness(0.7);
      }
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
    margin-left: 8px;
    color: #737380;
    font-size: 14px;
  }
`;
