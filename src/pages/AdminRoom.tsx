import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";

import { database } from "../services/firebase";

import logoImg from "../assets/images/logo.svg";
import { FiTrash } from "react-icons/fi";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useRoom } from "../hooks/useRoom";

import { Container, Header, QuestionList, RoomTitle } from "../styles/room";

interface RoomParams {
  id: string;
}

const AdminRoom: React.FC = () => {
  const history = useHistory();
  const { id: roomId } = useParams<RoomParams>();
  const { questions, title } = useRoom(roomId);

  const handleEndRoom = useCallback(async () => {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }, [roomId, history]);

  const handleDeleteQuestion = useCallback(
    async (questionId: string) => {
      if (window.confirm("Tem certeza que deseja excluir esta pergunta?")) {
        await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
      }
    },
    [roomId]
  );

  return (
    <Container>
      <Header>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerar Sala
            </Button>
          </div>
        </div>
      </Header>

      <main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </RoomTitle>

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
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <FiTrash size={24} />
              </button>
            </Question>
          ))}
        </QuestionList>
      </main>
    </Container>
  );
};

export { AdminRoom };
