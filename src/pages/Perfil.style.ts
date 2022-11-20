import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  max-width: 100vw;
  margin: 80px;
  padding-left: 50px;

  .perfil__vet {
    display: grid;
    padding: 50px;
    margin: 20px;
    gap: 10px;
    justify-content: center;
    width: 493.81px;
    height: 228.2px;
  }

  span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;

    line-height: 29px;
  }
`;
export const Title = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 42.085px;
  line-height: 51px;
  left: 444.19px;
  top: 258px;
  color: #4b4b4b;
`;

export const ConsultaValor = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 100px;
  padding: 70px;
  
`;
export const AboutMe = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 30px;
  gap: 20px;

  h2 {
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 20px;
    letter-spacing: 0.025em;
    text-align: left;
  }
`;
