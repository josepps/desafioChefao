import styled from "styled-components";

export const DivCardComponent = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 500px;
    max-height: 280px;
    min-height: 280px;
    padding: 1rem 2rem;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
    color: #0E403F;
    background-color: #fbfdfd;
    filter: drop-shadow(0px 5.98802px 5.98802px rgba(0, 0, 0, 0.25));
    border-radius: 10px;

    @media only screen and (max-width: 600px) {
    display: flex;
    padding: 1rem;
}
`

export const DivImgInfosCardVet = styled.div`
    display: grid;
    justify-content: center;
    div{
        width: 135px;
        height: 135px;
        border-radius: 50%;
        margin-top : 0.5rem;
        margin-bottom: 1rem;
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    h3{
        font-weight: 800;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    }
    span{
        display: block;
        text-align: start;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        margin-left: 2rem;
    }

`

export const DivEspecialidade = styled.div`
   text-align: end;
   h4{
        font-weight: 500;
        font-size: 18px;
        line-height: 22px; 
        margin-bottom: 0.5rem;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 0.5rem;
    }
    span{
        font-weight: 900;
        font-size: 20px;
        line-height: 24px;
    }

    a{
        height: 3rem;
        
    }

`