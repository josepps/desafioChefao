import styled from "styled-components";



export const SectionBusca = styled.section`
    background-color: #017369;
    min-height: 100vh;
    width: 100%;
    display: grid;
    align-items: center; 
    justify-content: center; 
    padding: 2rem 0;

`


export const DivApresentacaoHome = styled.div`
    display: grid;
    grid-template-columns: 600px 350px;
    column-gap: 18rem;
    max-width: 1300px;
    
    justify-content: space-around;
    align-items: center;
`

export const DivInicialDescricaoHome = styled.div`
    flex-direction : column;
    width: 600px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-bottom: 7rem;
    margin-right: 3rem;
    text-align: start;

    h1{
        font-weight: 900;
        font-size: 2rem;
        line-height: 2.1rem;
    }

    p{
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.1rem;
        margin-top: 40px;
        max-width: 350px;
    }

`

export const DivImagensInicialHome = styled.div`
    flex-direction: column;
    width: 350px; 

`

export const ImgIconGatoCachorro = styled.img`
    width: 100%;
`

export const Setaparabaixo = styled.div`
    text-align: center;
`

