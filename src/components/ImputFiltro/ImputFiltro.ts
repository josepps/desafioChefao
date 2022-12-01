import styled from "styled-components";

export const ImputFiltroStyle = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    padding-left: 3%;
    position: relative;
    filter: drop-shadow(0px 5.98802px 5.98802px rgba(0, 0, 0, 0.25));

    @media screen and (max-width: 600px){
        display: block;
        height: 35px;
        width: 80%;
        margin: auto;
        margin-bottom: 15px;
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
            padding: 10px 0;

        }
       
    }

    .ImputLocal:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    
}

    a {
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
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;

        @media screen and (max-width: 600px){
            top: 0;
            width: 20%;
        }
    }
`;