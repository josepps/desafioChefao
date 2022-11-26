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

    .ImputList {
        height: 30px;
        border: none;
        border-right: 1px solid #000;
        padding: 0 10px;
    }

    .ImputList:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

    .ImputLocal {
        border: none;
        padding: 0 10%;
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
        color: #fff;
    }
`;