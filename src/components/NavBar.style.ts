import styled from 'styled-components';

export const Header = styled.header`
    width: 100vw;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #017369;

    div {
        
        margin-left: 5%;

        a {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            text-decoration: none;
        }

        h2 {
            color: #fff;
            font-size: 2.5rem;
            margin-left: 5%;
        }
    }

    nav {
            display: flex;
            align-items: center;
            margin-right: 15%;

            a {
                display: flex;
                align-items: center;
                color: #fff;
                text-decoration: none;
                padding: 0 3%;
                white-space: nowrap;
                font-weight: 600;
            }

            .FaplusNavBAr {
                margin-left: 10px;
            }

            .ButtonCadastar {
                margin: 0 4%;
                padding: 3% 9%;
                background: #FF9900;
                border-radius: 24px;
                color: #000;

                b {
                    font-weight: bolder;
                    margin-left: 5%;
                }
            }
        }
`;