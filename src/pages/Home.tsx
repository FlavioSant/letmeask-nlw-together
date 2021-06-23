import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { SiGoogle } from "react-icons/si";

import { useAuth } from "../hooks/useAuth";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = useCallback(async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }, [history, user, signInWithGoogle]);

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <SiGoogle size={24} color="#fff" />
            Crie sua sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Home };
