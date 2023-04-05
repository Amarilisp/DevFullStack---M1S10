import {
  BsFillPersonVcardFill,
  BsFillEnvelopeFill,
  BsFillHandThumbsUpFill,
} from 'react-icons/bs';

import './Passos.css';

function Passos({ passo }) {
  return (
    <div className="steps">
      <div className="step active">
        <BsFillPersonVcardFill />
        <p>Dados Pessoais</p>
      </div>
      <div className={`step ${passo >= 1 ? 'active' : ''}`}>
        <BsFillEnvelopeFill />
        <p>Endereço</p>
      </div>
      <div className={`step ${passo >= 2 ? 'active' : ''}`}>
        <BsFillHandThumbsUpFill />
        <p>Agradecimento</p>
      </div>
    </div>
  );
}
export default Passos;
