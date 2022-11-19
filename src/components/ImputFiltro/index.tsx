import {ImputFiltroStyle} from "./ImputFiltro";

//Colocar seta para baixo
//Colocar icone de Lupa no botão
//Tirar Borda quando selecionar

function ImputFiltro() {
    return (
        <ImputFiltroStyle>
            <div>
                <input className="ImputList" type="text" placeholder="Presencial " list="Modalidade" />
                    <datalist id="Modalidade">
                        <option value="Presencial">Presencial</option>
                        <option value="Online">Online</option>
                    </datalist>
            </div>
            <div>
                <input className="ImputList" type="text" placeholder="Especialidade" list="Especialidade" />
                    <datalist id="Especialidade">
                        <option value="Silvestre">Silvestre</option>
                        <option value="Domesticos">Domesticos</option>
                    </datalist>
            </div>
            <div>
                <input className="ImputLocal" type="text" placeholder="Ex: São Paulo" />
            </div>
            <button type="submit">Buscar</button>
        </ImputFiltroStyle>
    )
}

export default ImputFiltro;