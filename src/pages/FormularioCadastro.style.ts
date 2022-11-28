import styled from "styled-components";


export const SectionCadastro = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7rem;


    p{
        text-align: center;
        font-weight: 800;
        font-size: 18px;
        line-height: 22px;
        color: #0E403F;
    }
    button{
        text-align: center;
        border: none;
        font-weight: 600;
        text-decoration: none;
        background: #FF9900;
        padding: 3% 9%;
        border-radius: 24px;
    }

`
export const DivForm = styled.div`
    width: 500px;
`

export const DivFormulario1 = styled.div`
    display: flex;
    justify-content: space-between;
    

`

export const DivInputLabel = styled.div`
    flex-direction: column;
    display: flex;
    text-align: start;
    margin-bottom: 1.5rem;

    input{
        border: 1.3px solid #d1d1d1;
    }

    label{
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        line-height: 1rem;
        color: #333333;
        font-weight: 400;
    }

`

export const InputMedio = styled.input`
    width: 15rem;
    padding: 0.5rem;
    border-radius: 1rem;
    


`

export const InputPequeno = styled.input`
    width: 6rem;
    padding: 0.5rem;
    border-radius: 1rem;


`


export const InputGrande = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;


`
export const DivImagemCadastro = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;

`

export const DivImagemInfos = styled.div`
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;


`


export const DivInfoCadastro =  styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 1.5rem;
    align-items: center;
    justify-content: start;
    

`
export const DivValores =  styled.div`
    max-width: 500px;
    display: flex;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    text-align: center; 
    align-items: center;
`


export const DivInputLabelSegundaParte = styled.div`
    flex-direction: column;
    display: flex;
    margin-bottom: 0.2rem; 

    input{
        border: 1.3px solid #d1d1d1;
    }

    label{
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        line-height: 1rem;
        color: #333333;
        font-weight: 400;
    }


`


export const TextArea = styled.textarea`
    border: 1.3px solid #d1d1d1;
    border-radius: 1rem;
    height: 5rem;
    padding: 5px;

`
export const SpanErro = styled.span`
    font-size: 0.8rem;
    line-height: 1rem;
    color: red;
    font-weight: 600;
    margin-left: 10px;

`