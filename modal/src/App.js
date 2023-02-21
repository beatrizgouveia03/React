import FeriadoForms from "./Components/FeriadoForms";

function abrirModal(carregarModal) {
  console.log("Abrir");
  let modal = document.getElementById(carregarModal);

  modal.style.display = 'block';
  document.getElementById('form').style.overflow = 'hidden';
}

function  fecharModal(fecharModal) {
  let modal = document.getElementById(fecharModal);

  modal.style.display = 'none';
  document.getElementById('form').style.overflow = 'auto';
}

function App() {
  return (
    <div id="form" className="m-[1rem] text-left font-serif">
      <h1 className='text-3xl font-medium'>Janela Modal</h1>

      <button 
        className="px-[0.5rem] py-[0.2rem] text-base text-lime-600 bg-white hover:text-white hover:bg-lime-600 border-[0.1rem] border-lime-600 rounded cursor-pointer transition-all ease duration-30" 
        onClick={() => abrirModal('vis-modal')}
      >Abrir Modal</button>

      <div id="vis-modal" className="bg-black bg-opacity-5 fixed t-0 l-0 w-[100vw] h-[100vh] hidden">
        <div className="my-0 mx-auto mt-[3%] max-w-xl bg-white rounded-lg">
            <div className="py-[0.1rem] px-[0.5rem] flex justify-between border-b-[0.1rem]  border-b-gray-200">
                <h1 className="font-bold my-[0.6rem] mx-0">Visualizar</h1>
                <span 
                    className="px-[1.25rem] py-[0.6rem] cursor-pointer "
                    onClick={() => fecharModal('vis-modal')}    
                >X</span>
            </div>

            <div className="pt-[0.0625rem] pr-2 pb-2 pl-2">
                <FeriadoForms />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
