import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100vw;
  margin: 150px;
  padding-left: 50px;

  .perfil__vet {
    display: grid;
    padding: 50px;
    margin: 20px;
    gap: 10px;
    justify-content: center;
    width: 493.81px;
    height: 228.2px;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }

  img {
    border-radius: 50%;
    width: 25vw;
  }
  span {
    font-family: "Lato";
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
  }
  @media only screen and (max-width: 600px) {
    display: grid;
    justify-content: end;
    margin: 50px;

    img {
      width: 40vw;
      position: absolute;
      left: 5%;
    }

    .perfil__vet {
      position: relative;
      left: 60%;
      top: -60px;
      margin: 20px;
      width: 100px;
    }

    h4 {
      display: grid;
      grid-template-columns: 2fr;
      font-size: 15px;
    }

    span {
      font-size: 15px;
      line-height: 20px;
      width: min-content;
    }
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

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ConsultaValor = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 100px;
  padding: 70px;
  font-size: 20px;
  font-family: "Lato";
  letter-spacing: 0em;
  text-align: left;
  margin-top: 30px;

  h4 {
    padding: 10px;
    font-size: 20px;
  }

  p {
    padding: 10px;
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    .info__valor {
      display: flex;
      flex-direction: row;
      gap: 2em;
      padding: 2em;
      font-size: 4px;
      position: absolute;
      left: 50px;
      bottom: 5%;
      margin-right: 50px;
      align-items: baseline;
      width: 100px;

      h4 {
        display: none;
        font-size: 18px;
      }

      p {
        display: none;
        font-size: 16px;
      }

      .botao {
        display: grid;
       margin: 40px;
        
      }
    }
  }
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  top: 150px;
  padding-bottom: 50px;
  margin: 250px;
  margin-top: 40px;
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0.025em;
  text-align: start;

  h2 {
    color: black;
    margin-left: 0%;
  }

  @media only screen and (max-width: 600px) {
    display: grid;
    justify-items: start;
    gap: 40px;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: none;
    justify-content: center;
    align-items: center;
    margin: 90px;

    h2 {
      color: black;
      justify-content: start;
      font-size: 1.5rem;
    }

    p {
      font-weight: 500;
      line-height: 1.5rem;
    }
  }
`;
