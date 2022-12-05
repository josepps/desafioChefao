import styled from "styled-components";


export const SectionCadastro = styled.section`
    display: flex;
    justify-content: space-around;
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

    @media screen and (max-width: 600px){
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        padding: 5rem 1rem;
    }

`
export const DivForm = styled.div`
    width: 500px;

    @media screen and (max-width: 600px){
        max-width: 500px;
        flex-direction: column;
        align-items: center;
    }

`

export const DivFormulario1 = styled.div`
    display: flex;
    justify-content: space-between;
    

    @media screen and (max-width: 650px){
        max-width: 500px;
        justify-content: space-around;
        
    }

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

    @media screen and (max-width: 600px){
        max-width: 500px;
    }

`

export const InputMedio = styled.input`
    width: 15rem;
    padding: 0.5rem;
    border-radius: 1rem;

    @media screen and (max-width: 600px){
        width: 10rem;
    }
    


`

export const InputPequeno = styled.input`
    width: 6rem;
    padding: 0.5rem;
    border-radius: 1rem;
    @media screen and (max-width: 600px){
        width: 10rem;        
    }

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

    @media screen and (max-width: 650px){
        display: none;
    }

`

export const DivImagemInfos = styled.div`
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 600px){
        display: none;
    }

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

    @media screen and (max-width: 600px){
        max-width: 500px;
        display: block;
        margin: auto;
        margin-left: 0.75rem; 
        
    }

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

    @media screen and (max-width: 600px){
        max-width: 25rem;
        text-align: center;
    }

`
export const SpanErro = styled.span`
    font-size: 0.8rem;
    line-height: 1rem;
    color: red;
    font-weight: 600;
    margin-left: 10px;

`

export const DivTeleconsulta = styled.article`
    margin-left: -2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
    input{
        height: 2rem;
    }
    label{
        color: #052C2B;
        font-weight: 800;
        font-size: 1.2rem;
        margin-top: 3px;
    }
    @media screen and (max-width: 600px){
        label{
            margin-left: -4rem;
        }
        
    }
    

`