import styled from 'styled-components';

export const BtnCadastrarServico = styled.button`
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            text-decoration: none;
            background: #FF9900;
            padding: 7% 15%;
            border-radius: 24px;
            white-space: nowrap;
            font-weight: 700;
            border: none;

            
            .FaplusNavBAr {
                margin-left: 10px;
            }

            @media only screen and (max-width: 500px) {
                padding: 5px 10px;
                font-size: 10px;
                border-radius: none;
            }
`;