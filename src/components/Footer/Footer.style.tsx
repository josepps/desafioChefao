import styled from 'styled-components';

export const FooterStyle = styled.footer`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #F1A952;

    @media only screen and (max-width: 600px){
        padding: 0.5rem;
        justify-content: space-between;
    }
    @media only screen and (max-width: 370px){
        justify-content: center;
        display: block;
        height: auto;
    }

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
        @media only screen and (max-width: 600px){
            a{
                max-width: 40px;
            }
        }
        @media only screen and (max-width: 370px){
            a{
                margin-left: 3rem;
                margin-bottom: 0.5rem;
                
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
        @media only screen and (max-width: 580px){
            
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
        @media only screen and (max-width: 600px){
            a{
                max-width: 45px;
            }
            h2{
                display: none;  
            }
            
        }
    }
    .containerInfos{
         @media only screen and (max-width: 600px){
            display: none;
        }
    }
`;