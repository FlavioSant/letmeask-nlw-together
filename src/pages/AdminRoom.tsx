import { useCallback, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import emptyQuestion from "../assets/images/empty-questions.svg";
import { database } from "../services/firebase";

import {
  FiCheckCircle,
  FiMessageSquare,
  FiTrash,
  FiXCircle,
} from "react-icons/fi";
import logoImg from "../assets/images/logo.svg";

import { useRoom } from "../hooks/useRoom";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import Modal, { ModalHandles } from "../components/Modal";

import {
  Container,
  EmptyQuestion,
  Header,
  QuestionList,
  RoomTitle,
} from "../styles/room";

interface RoomParams {
  id: string;
}

const AdminRoom: React.FC = () => {
  const history = useHistory();
  const { id: roomId } = useParams<RoomParams>();
  const { questions, title } = useRoom(roomId);
  const modalRoomRef = useRef<ModalHandles>(null);
  const modalQuestionRef = useRef<ModalHandles>(null);

  const handleEndRoom = useCallback(async () => {
    const isConfirmed = await modalRoomRef.current?.openModal();

    if (isConfirmed) {
      database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
      });

      history.push("/");
    }
  }, [roomId, history]);

  const handleCheckQuestionAsAnswered = useCallback(
    async (questionId: string) => {
      await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: true,
      });
    },
    [roomId]
  );

  const handleHighlightQuestion = useCallback(
    async (questionId: string) => {
      await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: true,
      });
    },
    [roomId]
  );

  const handleDeleteQuestion = useCallback(
    async (questionId: string) => {
      const isConfirmed = await modalQuestionRef.current?.openModal();

      if (isConfirmed) {
        await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
      }
    },
    [roomId]
  );

  return (
    <>
      <Modal
        ref={modalRoomRef}
        title="Encerrar sala"
        description="Tem certeza que você deseja encerrar esta sala?"
        confirmMessage="Encerrar"
        icon={FiXCircle}
      />
      <Modal
        ref={modalQuestionRef}
        title="Excluir pergunta"
        description="Tem certeza que você deseja excluir esta pergunta?"
        confirmMessage="Excluir"
        icon={FiTrash}
      />
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
            {questions.length > 0 && (
              <span>{questions.length} pergunta(s)</span>
            )}
          </RoomTitle>

          <QuestionList>
            {questions.length > 0 ? (
              questions.map((question) => (
                <Question
                  key={question.id}
                  author={question.author}
                  content={question.content}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        title="Marcar pergunta como respondida"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <FiCheckCircle size={24} />
                      </button>
                      <button
                        type="button"
                        title="Dar destaque à pergunta"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <FiMessageSquare size={24} />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    title="Remover pergunta"
                    className="delete-button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <FiTrash size={24} />
                  </button>
                </Question>
              ))
            ) : (
              <EmptyQuestion>
                <img src={emptyQuestion} alt="Nenhuma pergunta." />
                <h2>Nenhuma pergunta por aqui...</h2>
                <p>
                  Faça o seu login e seja a primeira pessoa a fazer uma
                  pergunta!
                </p>
              </EmptyQuestion>
            )}
          </QuestionList>
        </main>
      </Container>
    </>
  );
};

export { AdminRoom };
