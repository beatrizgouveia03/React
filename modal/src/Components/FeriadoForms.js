import '.././App.css';

function FeriadoForms() {
    return (
        <div className="body">
            <div>
                <h1 id="titulo">Cadastro de DEVs</h1>
                <p id="subtitulo">Complete suas informações</p>
                <br />
            </div>

            <form>
                <fieldset className="grupo">
                    <div className="campo">
                        <label htmlFor="nome"><strong>Nome</strong></label>
                        <input required type="text" name="nome" id="nome" />
                    </div>

                    <div className="campo">
                        <label htmlFor="sobrenome"><strong>Sobrenome</strong></label>
                        <input required type="text" name="sobrenome" id="sobrenome" />
                    </div>
                </fieldset>

                <div className="campo">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input required type="email" name="email" id="email" />
                </div>

                <div className="campo">
                    <label><strong>De qual lado da aplicação você desenvolve?</strong></label>
                    <label>
                        <input type="radio" name="devweb" value="frontend" defaultChecked />Front-end
                    </label>
                    <label>
                        <input type="radio" name="devweb" value="backend" />Back-end
                    </label>
                    <label>
                        <input type="radio" name="devweb" value="fullstack" />Full-stack
                    </label>
                </div>

                <div className="campo">
                    <label htmlFor="senioridade"><strong>Senioridade:</strong></label>
                    <select id="senioridade">
                        <option value="true" disabled>Selecione</option>
                        <option>Júnior</option>
                        <option>Pleno</option>
                        <option>Sênior</option>
                    </select>
                </div>

                <fieldset className="grupo">
                    <div id="check">
                        <label><strong>Selecione o que você tem conhecimento:</strong></label><br />
                        <input type="checkbox" id="tecnologia1" name="tecnologia1" value="HTML" />
                        <label htmlFor="tecnologia1">HTML</label>
                        <input type="checkbox" id="tecnologia2" name="tecnologia2" value="CSS" />
                        <label htmlFor="tecnologia2">CSS</label>
                        <input type="checkbox" id="tecnologia3" name="tecnologia3" value="Javascript" />
                        <label htmlFor="tecnologia3">Javascript</label>
                        <input type="checkbox" id="tecnologia4" name="tecnologia4" value="PHP" />
                        <label htmlFor="tecnologia4">PHP</label>
                        <input type="checkbox" id="tecnologia5" name="tecnologia5" value="C#" />
                        <label htmlFor="tecnologia5">C#</label>
                        <input type="checkbox" id="tecnologia6" name="tecnologia6" value="Java" />
                        <label htmlFor="tecnologia6">Java</label>
                        <input type="checkbox" id="tecnologia7" name="tecnologia7" value="Python" />
                        <label htmlFor="tecnologia7">Python</label>
                    </div>
                </fieldset>

                <div className="campo">
                    <br />
                    <label><strong>Conte um pouco da sua experiência</strong></label>
                    <textarea row="6" id="experiencia" name="experiencia"></textarea>
                </div>

                <button className="botao" type="submit">Concluir</button>

            </form>
        </div>
    )
}

export default FeriadoForms;