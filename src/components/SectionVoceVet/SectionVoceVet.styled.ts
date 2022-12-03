import styled from "styled-components";



export const VoceVetSection = styled.section`
    background-color: #017369;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 3rem;


    @media only screen and (max-width: 600px){
        flex-direction: column;
    }
    
`

export const VoceVetDescricao = styled.div`
    color: #f7ffff;
    h3{
        font-weight: 900;
        font-size: 3rem;
        line-height: 3.1rem;
        margin-bottom: 1.5rem;
    }
    p{
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 1.6rem;
        width: 460px;
    }

    button{
        margin-top: 2rem;
        width: 60%;
        padding: 5%;
    }

    @media only screen and (max-width: 600px){
        text-align: center;
        order: 1;
        h3{
            font-weight: 900;
            font-size: 2rem;
            line-height: 3.1rem;
            margin-bottom: 1.5rem;
        }
        p{
            font-weight: 600;
            font-size: 0.8rem;
            line-height: 1rem;
            width: 90%;
        }
        button{
            margin: auto;
            margin-top: 1.5rem;
            width: 70%;
        }
    }

`


export const VoceVetImage = styled.div`
    img{
        max-width: 25rem;
    }
    @media only screen and (max-width: 600px){
        img{
            width: 15rem;
        }
    }
`
