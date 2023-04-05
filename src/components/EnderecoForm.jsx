function EnderecoForm() {
  return (
    <div className="container container-md">
      <div className="row mb-2">
        <div className="col">
          <label htmlFor="Logradouro" className="form-label">
            Logradouro
          </label>
          <input
            type="text"
            className="form-control"
            id="Logradouro"
            placeholder="Rua, Av..."
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="Numero" className="form-label">
            Nº
          </label>
          <input type="text" className="form-control" id="Numero" />
        </div>
        <div className="col-9">
          <label htmlFor="Complemento" className="form-label">
            Complemento
          </label>
          <input type="email" className="form-control" id="Complemento" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-6">
          <label htmlFor="Bairro" className="form-label">
            Bairro
          </label>
          <input type="text" className="form-control" id="Bairro" />
        </div>
        <div className="col-6">
          <label htmlFor="Cidade" className="form-label">
            Cidade
          </label>
          <input type="email" className="form-control" id="Cidade" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-6">
          <label htmlFor="Cep" className="form-label">
            CEP
          </label>
          <input type="text" className="form-control" id="Cep" />
        </div>
        <div className="col-6">
          <label htmlFor="Estado" className="form-label">
            Estado
          </label>
          <input type="email" className="form-control" id="Estado" />
        </div>
      </div>
    </div>
  );
}

export default EnderecoForm;
