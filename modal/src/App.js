import './App.css';

function abrirModal(carregarModal) {
  console.log("Abrir");
  let modal = document.getElementById(carregarModal);

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function  fecharModal(fecharModal) {
  let modal = document.getElementById(fecharModal);

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function App() {
  return (
    <div className="App">
      <h1>Janela Modal</h1>

      <button className="btn-outline-success" onClick={() =>abrirModal('vis-modal')}>Abrir Modal</button>

      <div id="vis-modal" className="modal">
        <div className="conteudo-modal">
            <div className="cabecalho-modal">
                <h1 className="titulo-modal">Visualizar</h1>
                <span 
                    className="cabecalho-modal-fechar"
                    onClick={() => fecharModal('vis-modal')}    
                >X</span>
            </div>

            <div className="corpo-modal">
                teste modal
            </div>
            <div className="rodape-modal">
                <button
                    className="btn-outline-success"
                    onClick={() => fecharModal('vis-modal')}
                >Fechar</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
