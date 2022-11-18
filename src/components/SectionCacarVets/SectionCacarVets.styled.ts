import styled from "styled-components";


export const TelaCacarVets  = styled.section`
    text-align: center;
    display: grid;
    justify-content: center;
    padding: 5rem 1rem;


    h2{
        color: #0E403F;
        font-weight: 800;
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 2rem;
    }
`
export const DivDosCards =  styled.div`
    max-width: 1300px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    /* column-gap: 10rem;  */
    justify-content: center;
    margin-top: 5rem;
`
export const CardPassoaPasso = styled.div`
    flex-direction: column;
    display: flex;
    width: 180px;
    justify-content: center;
    align-items: center;
`

export const Bolalaranja = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    background-color: #F1AA52;
    border-radius: 50%;
`


export const BolaVerde = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background-color: #017369;
    border-radius: 50%;
`

export const DivOrientacao = styled.div`
    color: #0E403F;
    text-align: center;
    h3{
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 38px;
        margin-top: 1rem;
    }

    p{
        margin-top: 1rem;
        font-weight: 800;
        font-size: 1.2rem;
        line-height: 1.3rem;
    }
`
export const LinhaTracejada = styled.div`
    border: 2px dashed #017369;
    height: 2px;
    margin-top: 75px;

`

