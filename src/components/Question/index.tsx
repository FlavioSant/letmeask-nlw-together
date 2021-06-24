import { QuestionContainer, UserInfo } from "./styles";

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  hasLiked: boolean;
}

const Question: React.FC<QuestionProps> = ({
  author,
  content,
  hasLiked,
  children,
}) => {
  return (
    <QuestionContainer hasLiked={hasLiked}>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </footer>
    </QuestionContainer>
  );
};

export { Question };
