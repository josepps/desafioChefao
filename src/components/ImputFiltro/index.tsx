import { useEffect, useState } from "react";
import api from "../../services/api";
import {ImputFiltroStyle} from "./ImputFiltro";

//Colocar seta para baixo
//Colocar icone de Lupa no botão
//Tirar Borda quando selecionar

function ImputFiltro() {
    const [presencial, setPresencial] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [ceep, setCeep] = useState('');

    return (
        

        <ImputFiltroStyle>
            <div>
                <input className="ImputList" type="text" placeholder="Presencial " list="Modalidade" value={presencial} onChange={(event) => 
    setPresencial(event.target.value) }/>
                    <datalist id="Modalidade">
                        <option value="Presencial">Presencial</option>
                        <option value="Online">Online</option>
                    </datalist>
            </div>
            <div>
                <input className="ImputList" type="text" placeholder="Especialidade" list="Especialidade" value={especialidade} onChange={(event) => 
    setEspecialidade(event.target.value) }/>
                    <datalist id="Especialidade">
                        <option value="Silvestre">Silvestre</option>
                        <option value="Domesticos">Domesticos</option>
                    </datalist>
            </div>
            <div>
                <input className="ImputLocal" type="text" placeholder="Ex: 00000-000" value={ceep} onChange={(event) => 
    setCeep(event.target.value) }/>
            </div>
            <a href={`/vets?modalidade=${presencial}&especialidade=${especialidade}&ceep=${ceep}`} >Buscar</a>
        </ImputFiltroStyle>
    )
}

export default ImputFiltro;