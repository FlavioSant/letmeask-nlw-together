import { ButtonsContainer, QuestionContainer, UserInfo } from "./styles";

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  hasLiked?: boolean;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

const Question: React.FC<QuestionProps> = ({
  author,
  content,
  hasLiked = false,
  isAnswered = false,
  isHighlighted = false,
  children,
}) => {
  return (
    <QuestionContainer isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <ButtonsContainer hasLiked={hasLiked}>{children}</ButtonsContainer>
      </footer>
    </QuestionContainer>
  );
};

export { Question };
