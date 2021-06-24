import { FormEvent, useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import { Container, MainContent } from "../styles/auth";

const NewRoom: React.FC = () => {
  const history = useHistory();
  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState("");

  const handleCreateRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (newRoom.trim() === "") {
        return;
      }

      const roomRef = database.ref("rooms");

      const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id,
      });

      history.push(`/rooms/${firebaseRoom.key}`);
    },
    [newRoom, user, history]
  );

  return (
    <Container>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(e) => setNewRoom(e.target.value)}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </Container>
  );
};

export { NewRoom };
