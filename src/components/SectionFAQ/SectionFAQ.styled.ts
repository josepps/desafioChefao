import styled from "styled-components";


export const SectionPerguntas = styled.div`
    padding: 5rem 5rem;

    display: grid;
    justify-content: center;
    grid-template-rows: calc(6, 1fr);
    row-gap: 1rem;
    margin-bottom: 3rem;

    h2{
        margin-bottom: 2rem;
        color: #0E403F;
        font-weight: 800;
        font-size: 48px;
        line-height: 58px;
    }

    h3{
        margin-bottom: 1rem;
        color: #0E403F;
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
    }

    @media only screen and (max-width: 600px){
        padding: 3rem 2rem;
        h2{
            margin-bottom: 1.5rem;
            color: #0E403F;
            font-weight: 800;
            font-size: 30px;
            line-height: 38px;
            text-align: center;
        }
        h3{
            margin-bottom: 0.5rem;
            color: #0E403F;
            font-weight: 700;
            font-size: 25px;
            line-height: 26px;
        }

    }
`