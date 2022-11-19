import styled from 'styled-components';

export const FooterStyle = styled.footer`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #F1A952;

    .containerLogoFooter {

        a {
        display: flex;
        align-items: center;
        text-decoration: none;
        
        h2 {
            color: #0E403F;
            font-size: 2rem;
            font-weight: 900;
            margin-left: 5%;
        }
        }
    }

    div {
        display: flex;
        flex-direction: column;

        a {
            text-decoration: none;
            color: #0E403F;
            font-weight: 700;
            margin-bottom: 1%;
        }
    }

    .navContatoFooter {

        h2 {
            font-size: 1.3rem;
            color: #0E403F;
            margin-bottom: 2%;
        }

        div {
            flex-direction: row;
            justify-content: space-around;

            a{
                font-size: 3rem;
            }
        }
    }
`;