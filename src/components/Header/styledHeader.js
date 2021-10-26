import styled from "styled-components";

export const ContainerHeader = styled.div`
  padding: 0%;
  margin: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
  background: #022c57;

  img {
    width: 100%;
    height: auto;
    position: relative;
    bottom: 8%;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background: #022c57;

    img {
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BodyHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background: linear-gradient(to top, #00539c 30%, #022c57 70%);

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 60vh;
    background: linear-gradient(to top, #00539c 20%, #022c57 80%);
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const LogoTractian = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;

  img {
    width: 15%;
    height: 15vh;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: #022c57;

    img {
      width: 50%;
      height: 15vh;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  bottom: 25%;

  button {
    width: 20%;
    height: 5vh;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 100%;
    background-color: orange;
    :hover {
      background-color: #ffbf51;
    }
  }
  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    button {
      width: 50%;
      height: 40%;
      cursor: pointer;
      border-radius: 10px;
      border: none;
      color: white;
      font-weight: bold;
      font-size: 90%;
      background-color: orange;
      position: relative;
      top: 70%;

      :hover {
        background-color: #ffbf51;
      }
    }
    @media (max-width: 812px) {
    }
    @media (max-width: 1024px) {
    }
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  bottom: 22%;

  h2 {
    font-size: 150%;
    color: white;
    height: 5%;
  }
  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    position: relative;
    bottom: 20%;
    text-align: center;

    h2 {
      width: 80%;
      font-size: 100%;
      color: white;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  img {
    width: 50%;
    height: auto;
  }

  a {
    background-color: orange;
  }
  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;

    img {
      position: relative;
      top: 15%;
      width: 100%;
      height: 180%;
    }

    a {
      position: relative;
      top: 10%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxPlay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  position: relative;
  bottom: 50%;

  a {
    display: flex;
    color: #1e90ff;
    :hover {
      color: white;
    }
  }

  button {
    display: flex;
    flex-direction: column;
    width: 5%;
    height: auto;
    border-radius: 80px;
    background-color: white;
    box-shadow: inset 0 0 1em #1e90ff, 0 0 2em #00539c;
    :hover {
      background-color: #1e90ff;
      transform: scaleY(1.2) scaleX(1.2);
    }
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    align-items: center;
    position: relative;
    bottom: 22%;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      justify-items: center;
      color: #1e90ff;

      :hover {
        color: white;
      }
    }

    button {
      display: flex;
      flex-direction: column;
      width: 5%;
      height: 100%;
      border-radius: 80px;
      background-color: white;
      box-shadow: inset 0 0 1em #1e90ff, 0 0 2em #00539c;
      :hover {
        background-color: #1e90ff;
        transform: scaleY(1.2) scaleX(1.2);
      }
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  bottom: 25%;
  text-align: center;
  p {
    width: 100%;
    font-size: 130%;
    color: white;
    gap: 20%;
  }
  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20%;
    position: relative;
    bottom: 10%;

    p {
      text-align: center;
      width: 95%;
      font-size: 105%;
      color: white;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
