import styled from "styled-components";

export const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.5rem;

  img {
    margin-left: 0.5rem;
  }

  @media only screen and (max-width: 600px) {
    .p {
      font-size: 10px;
    }

    img {
      width: 5vw;
    }
  }
`;
