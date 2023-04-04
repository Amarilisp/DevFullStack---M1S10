function DadosPessoaisForm() {
  return (
    <div className="container container-md mt-5">
      <div className="mb-3">
        <label for="formNomeInput" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="formNomeInput"
          placeholder="Digite seu nome..."
        />
      </div>
      <div className="mb-3">
        <label for="formEmailInput" class="form-label">
          E-mail
        </label>
        <input
          type="email"
          class="form-control"
          id="formEmailInput"
          placeholder="Digite seu e-mail..."
        />
      </div>
    </div>
  );
}

export default DadosPessoaisForm;
