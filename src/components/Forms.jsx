import DadosPessoaisForm from './DadosPessoaisForm.jsx';
import EnderecoForm from './EnderecoForm.jsx';
import AgradecimentoForm from './AgradecimentoForm.jsx';

function Forms({ passo }) {
  switch (passo) {
    case 0:
      return <DadosPessoaisForm />;

    case 1:
      return <EnderecoForm />;

    case 2:
      return <AgradecimentoForm />;

    default:
      break;
  }
}

export default Forms;
