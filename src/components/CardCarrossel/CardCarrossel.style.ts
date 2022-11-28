import styled from "styled-components";

export const DivCardCarrossel = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center; 
    align-items: center;

    background-color: #F1AA52;
    width: 333px;
    height: 390px;
    border-radius: 20px;

    margin-right: 2rem;

    flex: none;

    color: #0E403F;
    img{
        margin-bottom: 0.5rem;
    }
    h4{
        font-weight: 900;
        font-size: 26px;
        line-height: 31px;
        margin-bottom: 0.5rem;
    }
    h5{
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 0.5rem;
    }
    span{
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        
    }

`

export const DivImgCardCarrossel = styled.div`
    img{
        width: 135px;
        height: 135px;
        border-radius: 50%;
    }

`

