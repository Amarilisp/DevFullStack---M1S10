function AgradecimentoForm() {
  return (
    <div className="container container-sm my-5">
      <div className="mb-3">
        <h1> Obrigado pelo seu cadastro!</h1>
        <h3>Conte-nos: onde nos conheceu?</h3>
      </div>

      <div>
        <select id="inputState" className="form-select">
          <option selected>Selecione...</option>
          <option>Pelo site</option>
          <option>Pelo Linkdin</option>
          <option>Pelo Instagram</option>
        </select>
      </div>
    </div>
  );
}
export default AgradecimentoForm;
