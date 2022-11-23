import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 20px auto 10px;
        color:#0E403F;
        font-weight: 900;
        font-size: 32px;
        line-height: 38.4px;
    }
    img{
        max-width: 12rem;
    }
`
export const ButtonLogin = styled.button`
    color: #0E403F;
    text-decoration: none;
    background: #FF9900;
    padding: 15px 20vh;
    border: none;
    border-radius: 12px;
    white-space: nowrap;
    font-weight: 600;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin-top:25px;
`

export const RecoverPassword = styled.a`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    text-decoration: none;
    text-align: right;
    width: 60vh;
`