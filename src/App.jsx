import Passos from './components/Passos.jsx';
import Forms from './components/Forms';

import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillCursorFill,
} from 'react-icons/bs';

import { useState } from 'react';

function App() {
  const [passoAtual, setPassoAtual] = useState(0);

  function mudarPasso(passo, evento) {
    if (evento) evento.preventDefault();
    if (passo < 0 || passo >= 3) return;
    setPassoAtual(passo);
  }

  return (
    <div className="App">
      <header className="container container-md text-center">
        <h2>Cadastre-se gratuitamente!</h2>
        <p>
          Faça o seu cadastro para ter acesso a todos os recursos da nossa
          plataforma
        </p>
      </header>
      <form>
        <Passos passo={passoAtual} />
        <Forms passo={passoAtual} />

        {/* ------------------------------------------------------------ */}
        <div className="container container-sm text-center">
          <div className="btn">
            <button
              type="button"
              onClick={() => {
                passoAtual > 0 ? mudarPasso(passoAtual - 1) : '';
              }}
              disabled={passoAtual === 0}
              className="btn btn-outline-primary mx-1"
            >
              <BsFillCaretLeftFill />
              Voltar
            </button>
            <button
              type="button"
              onClick={() => {
                passoAtual < 3 ? mudarPasso(passoAtual + 1) : '';
              }}
              className="btn btn-outline-primary mx-1"
            >
              {passoAtual === 2 ? 'Enviar ' : 'Avançar '}
              {passoAtual === 2 ? (
                <BsFillCursorFill />
              ) : (
                <BsFillCaretRightFill />
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
