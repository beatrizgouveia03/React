import { useState } from "react";
import FeriadosList from "./Secundarios/FeriadosList";

function FeriadosForm() {

    let [descricao, setDescricao] = useState()
    const [data, setData] = useState()
    const [periodo, setPeriodo] = useState()

    var feriados = ['teste1', 'teste2']
    
    function cadastro(e) {
        e.preventDefault()
        console.log(`Feriado "${descricao}" do dia ${data} foi cadastrado para o período ${periodo} `)
        feriados.push(descricao)
    }

    return (
        <div className="overlay bg-white p-2 text-lg ">
            <form className="space-y-5">
                <div id="descricao" className="w-2/4">
                    <label className="text-md font-semibold">Descrição:</label>

                    <input
                        type="text" required
                        placeholder="Descrição do feriado"
                        name="descricao"
                        onChange={(e) => setDescricao(e.target.value)}
                        className="bg-gray-100 h-[2em] border-[0.15em]  border-gray-500 rounded-lg placeholder:text-gray-500 focus:bg-blueDark-200 focus:bg-opacity-20 focus:border-blueDark-400"
                    />

                </div>

                <div id="data" className="w-2/4">
                    <label className="text-md font-semibold">Data:</label>

                    <input
                        type="date" required
                        name="data"
                        onChange={(e) => setData(e.target.value)}
                        className="bg-gray-100 h-[2em] border-[0.15em] border-gray-500 rounded-lg focus:text-gray-500 focus:bg-blueDark-200 focus:bg-opacity-20 focus:border-blueDark-400"
                    />

                </div>

                <div id="periodo" className="w-2/4">
                    <label className="text-md font-semibold">Período:</label>
                    <select
                        name="periodo"
                        defaultValue=""
                        onChange={(e) => setPeriodo(e.target.value)}
                        className="block bg-gray-100 h-[2em] border-[0.15em] border-gray-500 rounded-lg"
                    >
                        <option value="" disabled>Selecione</option>
                        <option>Letivo-2023.1</option>
                        <option>Letivo-2023.2</option>
                        <option>Letivo-2024.1</option>
                        <option>Letivo-2024.2</option>
                    </select>
                </div>

                <div className="text-center">

                    <button
                        type="submit"
                        onClick={cadastro}
                        className="block max-w-[10em] rounded-[5em] text-white text-lg bg-green-800 px-4 py-0 my-0 mx-auto border-none hover:bg-green-500 hover:py-[0.1em]"
                    > Cadastrar</button>
                </div>

                <div> 
                    <FeriadosList feriados={feriados}/>
                </div>

            </form>
        </div>
    )
}

export default FeriadosForm;