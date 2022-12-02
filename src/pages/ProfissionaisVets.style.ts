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

    @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
}
`

export const ImputFiltroStyle = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    padding-left: 3%;
    position: relative;
    filter: drop-shadow(0px 5.98802px 5.98802px rgba(0, 0, 0, 0.25));

    @media screen and (max-width: 600px){
        
        width: 20rem;
        
        
        
    }
    
    .ImputList {
        height: 30px;
        border: none;
        border-right: 1px solid #000;
        padding: 0 10px;
        @media screen and (max-width: 600px){
            display: none;
        }
       
    }

    .ImputList:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

    .ImputLocal {
        border: none;
        padding: 0 10%;
        @media screen and (max-width: 600px){
            height: 100%;
            padding: 10px 10px;
            
            

        }
       
    }

    .ImputLocal:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    
}

    button {
        width: 10%;
        height: 100%;
        border: none;
        background: #FF9900;
        position: absolute;
        right: 0;
        border-radius: 0 15px 15px 0;
        cursor: pointer;
        font-weight: 600;
        text-decoration: none;
        color: black;
        font-size: 1rem;
        

        @media screen and (max-width: 600px){
            top: 0;
            width: 20%;
        }
    }
`;



