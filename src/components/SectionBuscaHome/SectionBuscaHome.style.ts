import styled from "styled-components";

export const SectionHome = styled.div`
    width: 100%;
`

export const SectionBusca = styled.section`
    background-color: #017369;
    min-height: 85vh;
    width: 100%;
    display: grid;
    align-items: center; 
    justify-content: center; 
    padding: 2rem 0;

    @media only screen and (max-width: 600px){
        padding: 2rem 1rem;
        min-height: auto;
    }

`


export const DivApresentacaoHome = styled.div`
    display: flex;
    
    max-width: 1300px;
    
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 600px){
        flex-direction: column;
        max-width: 500px;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }
`

export const DivInicialDescricaoHome = styled.div`
    flex-direction : column;
    width: 600px;
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
    @media only screen and (max-width: 600px){
        order: 1;
        text-align: center;
        width: 300px;
        margin-right: 0;
        margin-bottom: 2rem;

        h1{
            font-weight: 900;
            font-size: 1.2rem;
            line-height: 1.3rem;
        }

        p{
            font-weight: 700;
            font-size: 1rem;
            line-height: 1rem;
            margin-top: 15px;
            max-width: 350px;
            
        }
    }
`

export const DivImagensInicialHome = styled.div`
    flex-direction: column;
    width: 250px; 

    @media only screen and (max-width: 600px){
        order: 0;
        width: 10rem;
        margin: auto;
    }

`

export const ImgIconGatoCachorro = styled.img`
    width: 100%;
`

export const Setaparabaixo = styled.div`
    margin: auto;

    @media only screen and (max-width: 600px){
        display: none;
    }
`

