function FeriadosForm() {
    return (
        <div className="overlay bg-white p-2 text-lg ">
            <form className="space-y-5">
                <div id="descricao" className="w-2/4">
                    <label className="text-md font-semibold">Descrição:</label>

                    <input
                        type="text" required
                        placeholder="Descrição do feriado"
                        name="feriadoDescricao"
                        className="bg-gray-100 h-[2em] border-[0.15em]  border-gray-500 rounded-lg placeholder:text-gray-500 focus:bg-blueDark-200 focus:bg-opacity-20 focus:border-blueDark-400"
                    />

                </div>

                <div id="data" className="w-2/4">
                    <label className="text-md font-semibold">Data:</label>

                    <input
                        type="date" required
                        name="feriadoData"
                        className="bg-gray-100 h-[2em] border-[0.15em] border-gray-500 rounded-lg text-gray-500 focus:bg-blueDark-200 focus:bg-opacity-20 focus:border-blueDark-400"
                    />

                </div>

                <div id="periodo" className="w-2/4">
                    <label className="text-md font-semibold">Período:</label>
                    <select
                        id="feriadoPeriodo"
                        defaultValue=""
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
                        className="block max-w-[5em] rounded-[5em] text-white text-lg bg-green-800 px-0 py-0 my-0 mx-auto border-none hover:bg-green-500 hover:p-[0.1em]"
                    />
                </div>

            </form>
        </div>
    )
}

export default FeriadosForm;