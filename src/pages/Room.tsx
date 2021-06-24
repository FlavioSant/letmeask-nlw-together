import { FormEvent, useCallback, useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import { FiThumbsUp } from "react-icons/fi";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";
import { database } from "../services/firebase";

import {
  Container,
  FormFooter,
  Header,
  QuestionList,
  RoomTitle,
  UserInfo,
} from "../styles/room";

interface RoomParams {
  id: string;
}

const Room: React.FC = () => {
  const { user } = useAuth();
  const { id: roomId } = useParams<RoomParams>();
  const { questions, title } = useRoom(roomId);

  const [newQuestion, setNewQuestion] = useState("");

  const handleSendQuestion = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (newQuestion.trim() === "") {
        return;
      }

      if (!user) {
        throw new Error("You must be logged in.");
      }

      const question = {
        content: newQuestion,
        author: {
          name: user.name,
          avatar: user.avatar,
        },
        isHighlighted: false,
        isAnswered: false,
      };

      await database.ref(`rooms/${roomId}/questions`).push(question);

      setNewQuestion("");
    },
    [newQuestion, user, roomId]
  );

  const handleLikeQuestion = useCallback(
    async (questionId: string, likeId: string | undefined) => {
      if (!!likeId) {
        await database
          .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
          .remove();
      } else {
        await database
          .ref(`rooms/${roomId}/questions/${questionId}/likes`)
          .push({
            authorId: user?.id,
          });
      }
    },
    [roomId, user]
  );

  return (
    <Container>
      <Header>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </Header>

      <main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </RoomTitle>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <FormFooter>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta,{" "}
                <button type="button">faça seu login.</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </form>

        <QuestionList>
          {questions.map((question) => (
            <Question
              key={question.id}
              author={question.author}
              content={question.content}
              hasLiked={!!question.likeId}
            >
              <button
                type="button"
                aria-label="Marcar como gostei"
                className="like-button"
                onClick={() => handleLikeQuestion(question.id, question.likeId)}
              >
                {question.likeCount > 0 && <span>{question.likeCount}</span>}
                <FiThumbsUp size={24} />
              </button>
            </Question>
          ))}
        </QuestionList>
      </main>
    </Container>
  );
};

export { Room };
