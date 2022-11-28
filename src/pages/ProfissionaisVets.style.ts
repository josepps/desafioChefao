import styled from "styled-components";

export const SectionProfissionais = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4rem 10rem;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
`

export const DivCardProfissionais = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
    row-gap: 2rem;
    justify-content: center;
`