function DadosPessoaisForm() {
  return (
    <div className="container container-md my-5">
      <div className="mb-3">
        <label htmlFor="Nome" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="Nome"
          placeholder="Digite seu nome..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          E-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="Email"
          placeholder="Digite seu e-mail..."
        />
      </div>
    </div>
  );
}

export default DadosPessoaisForm;
