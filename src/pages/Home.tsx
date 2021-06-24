import { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";

import { SiGoogle } from "react-icons/si";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import {
  Container,
  CreateRoomButton,
  MainContent,
  Separator,
} from "../styles/auth";

const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  const handleCreateRoom = useCallback(async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }, [history, user, signInWithGoogle]);

  const handleJoinRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (roomCode.trim() === "") {
        return;
      }

      const roomRef = await database.ref(`rooms/${roomCode}`).get();

      if (!roomRef.exists()) {
        alert("Room does not exists.");
        return;
      }

      if (roomRef.val().endedAt) {
        alert("Room already closed.");
        return;
      }

      history.push(`rooms/${roomCode}`);
    },
    [roomCode, history]
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
          <CreateRoomButton onClick={handleCreateRoom}>
            <SiGoogle size={24} color="#fff" />
            Crie sua sala com o google
          </CreateRoomButton>
          <Separator>ou entre em uma sala</Separator>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </main>
    </Container>
  );
};

export { Home };
