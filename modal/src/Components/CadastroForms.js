import '.././App.css';

function FeriadoForms() {
    return (
        <div className="m-0 p-0 font-serif bg-cyan-50 text-base text-cyan-800">
            <div className="text-cyan-900 text-center pt-[1em]">
                <h1 id="titulo" className="text-2xl font-bold">Cadastro de DEVs</h1>
                <p id="subtitulo">Complete suas informações</p>
                <br />
            </div>

            <form className="ml-1">
                <fieldset className="border-0 mr-[1em]">
                    <div className="mb-[1em]">
                        <label className="mb-[0.2em] block" htmlFor="nome"><strong>Nome</strong></label>
                        <input
                            className="rounded-[5px] p-[0.2em] border-[1px] border-solid border-cyan-600 shadow-sm block focus:bg-cyan-50"
                            required type="text" name="nome" id="nome" />
                    </div>

                    <div className="mb-[1em]">
                        <label className="mb-[0.2em] block" htmlFor="sobrenome"><strong>Sobrenome</strong></label>
                        <input
                            className="rounded-[5px] p-[0.2em] border-[1px] border-solid border-cyan-600 shadow-sm block focus:bg-cyan-50"
                            required type="text" name="sobrenome" id="sobrenome" />
                    </div>
                </fieldset>

                <div className="mb-[1em]">
                    <label className="mb-[0.2em] block" htmlFor="email"><strong>Email</strong></label>
                    <input
                        className="rounded-[5px] p-[0.2em] border-[1px] border-solid border-cyan-600 shadow-sm block focus:bg-cyan-50"
                        required type="email" name="email" id="email" />
                </div>

                <div className="mb-[1em]">
                    <label className="mb-[0.2em] block"><strong>De qual lado da aplicação você desenvolve?</strong></label>
                    <label className="mb-[0.2em] block">
                        <input
                            className="rounded-[5px] p-[0.2em] border-[1px] border-solid border-cyan-600 shadow-sm mr-1 focus:bg-cyan-50"
                            type="radio" name="devweb" value="frontend" defaultChecked />Front-end
                    </label>
                    <label className="mb-[0.2em] block">
                        <input
                            className="rounded-[5px] p-[0.2em] border-[1px] border-solid border-cyan-600 shadow-sm mr-1 focus:bg-cyan-50"
                            type="radio" name="devweb" value="backend" />Back-end
                    </label>
                    <label className="mb-[0.2em] block">
                        <input
                            className="rounded-[5px] p-[0.2em] border-[1px] border-solid border-cyan-600 shadow-sm mr-1 focus:bg-cyan-50"
                            type="radio" name="devweb" value="fullstack" />Full-stack
                    </label>
                </div>

                <div className="mb-[1em]">
                    <label className="mb-[0.2em] block" htmlFor="senioridade"><strong>Senioridade:</strong></label>
                    <select
                        className="rounded-[5px] p-[0.2em] border-[1px] border-solid border-cyan-600 shadow-sm block focus:bg-cyan-50"
                        id="senioridade"
                    >
                        <option value="" selected disabled>Selecione</option>
                        <option className='selection:pr-4'>Júnior</option>
                        <option className='selection:pr-4'>Pleno</option>
                        <option className='selection:pr-4'>Sênior</option>
                    </select>
                </div>

                <fieldset className="border-0 mr-[1em]">
                    <div id="check" className="inline-block">
                        <label><strong>Selecione o que você tem conhecimento:</strong></label><br />
                        <input className="mr-0.5 rounded-[5px]" type="checkbox" id="tecnologia1" name="tecnologia1" value="HTML" />
                        <label htmlFor="tecnologia1">HTML</label>
                        <input className="ml-2 mr-0.5 rounded-[5px]" type="checkbox" id="tecnologia2" name="tecnologia2" value="CSS" />
                        <label htmlFor="tecnologia2">CSS</label>
                        <input className="ml-2 mr-0.5 rounded-[5px]" type="checkbox" id="tecnologia3" name="tecnologia3" value="Javascript" />
                        <label htmlFor="tecnologia3">Javascript</label>
                        <input className="ml-2 mr-0.5 rounded-[5px]" type="checkbox" id="tecnologia4" name="tecnologia4" value="PHP" />
                        <label htmlFor="tecnologia4">PHP</label>
                        <input className="ml-2 mr-0.5 rounded-[5px]" type="checkbox" id="tecnologia5" name="tecnologia5" value="C#" />
                        <label htmlFor="tecnologia5">C#</label>
                        <input className="ml-2 mr-0.5 rounded-[5px]" type="checkbox" id="tecnologia6" name="tecnologia6" value="Java" />
                        <label htmlFor="tecnologia6">Java</label>
                        <input className="ml-2 mr-0.5 rounded-[5px]" type="checkbox" id="tecnologia7" name="tecnologia7" value="Python" />
                        <label htmlFor="tecnologia7">Python</label>
                    </div>
                </fieldset>

                <div className="mb-[1em]">
                    <br />
                    <label className="mb-[0.2em] block"><strong>Conte um pouco da sua experiência</strong></label>
                    <textarea
                        className="rounded-[5px] p-[0.2em] border-[1px] border-solid border-cyan-600 shadow-sm shadow-slate-400 block focus:bg-cyan-50"
                        row="6" id="experiencia" name="experiencia"></textarea>
                </div>

                <div className='text-center'>
                    <button
                        className="rounded-[5px] text-white text-[1.2em] bg-cyan-900 border-0 mb-[1em] py-[0.2em] px-[0.6em] shadow-sm shadow-slate-400 hover:bg-cyan-600 hover:border-[1px] hover:border-cyan-700 hover:shadow-md hover:shadow-slate-400"
                        type="submit"
                    >Concluir</button>
                </div>
            </form>
        </div>
    )
}

export default FeriadoForms;