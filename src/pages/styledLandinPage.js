import styled from "styled-components";

export const ContainerPage = styled.div`
  margin: 0%;
  padding: 0%;
  display: block;
  flex-direction: column;
  width: 100%;
  background-color: #f5f5f5;
  gap: 20px;
  color: #00539c;
  text-align: center;

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    margin: 0%;
    padding: 0%;
    display: block;
    flex-direction: column;
    width: 100%;
    background-color: #f5f5f5;
    gap: 20px;
    color: #00539c;
    text-align: center;
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const WaveImg = styled.div`
  width: 100%;
  height: auto;
  img {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 25vh;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    width: 100%;
    height: 22vh;

    img {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 5vh;
    }
  }

  @media (max-width: 812px) {
    width: 100%;
    height: 20vh;

    img {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 15vh;
      position: relative;
      bottom: 10%;
    }
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  background-color: #f5f5f5;
  bottom: 2%;

  h2 {
    font-size: 160%;
    bottom: 10%;
  }

  p {
    width: 50%;
    font-size: 150%;
    bottom: 20%;
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
    text-align: center;
    background-color: #f5f5f5;
    h2 {
      width: 90%;
      font-size: 100%;
      position: relative;
      bottom: 8vh;
    }

    p {
      width: 90%;
      font-size: 100%;
      position: relative;
      bottom: 5vh;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

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
    height: 200%;
    background-color: #f5f5f5;
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  width: 100%;
  height: auto;
  position: relative;
  right: 5%;

  img {
    width: 100%;
    height: 120%;
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
      width: 100%;
      height: 80%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  right: 5%;
  top: 5%;

  p {
    font-size: 100%;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, 15%);
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    width: 100%;
    height: auto;
    position: relative;
    top: 0.1%;
    left: 0.1%;

    p {
      font-size: 80%;
      width: 50%;
      text-align: center;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const OneBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 15vh;
  background-color: #00539c;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: 5px #60c3d8 solid;
  text-align: center;

  h2 {
    font-size: 250%;
    height: 50%;
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
    width: 40%;
    height: 15vh;
    background-color: #00539c;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    border: 5px #60c3d8 solid;
    text-align: center;

    h2 {
      font-size: 50px;
      height: 70%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
export const TwoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 15vh;
  background-color: #00539c;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: 5px #60c3d8 solid;
  text-align: center;

  h2 {
    font-size: 250%;
    height: 50%;
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
    width: 40%;
    height: 15vh;
    background-color: #00539c;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    border: 5px #60c3d8 solid;
    text-align: center;

    h2 {
      font-size: 50px;
      height: 70%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
export const ThreeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 15vh;
  background-color: #00539c;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: 5px #60c3d8 solid;
  text-align: center;

  h2 {
    font-size: 250%;
    height: 50%;
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
    width: 40%;
    height: 15vh;
    background-color: #00539c;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    border: 5px #60c3d8 solid;
    text-align: center;

    h2 {
      font-size: 50px;
      height: 70%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const ContainerAssetManager = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #00539c;
  gap: 30px;

  h2 {
    font-size: 160%;
    color: white;
  }

  p {
    width: 60%;
    font-size: 130%;
    color: white;
    position: relative;
    bottom: 2%;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #00539c;

    h2 {
      font-size: 160%;
      color: white;
      width: 90%;
    }

    p {
      width: 85%;
      font-size: 130%;
      color: white;
      text-align: center;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxAssetManager = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: auto;
  border-radius: 20px;
  background: linear-gradient(to top, #00539c 10%, #022c57 90%);

  img {
    width: 60%;
    height: auto;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: auto;
    border-radius: 20px;
    background: linear-gradient(to top, #00539c 10%, #022c57 90%);

    img {
      width: 90%;
      height: auto;
    }
  }
    @media (max-width: 812px) {
    }
    @media (max-width: 1024px) {
    }
  }
`;
export const BoxAssetManagerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  height: auto;
  text-align: left;
  border-radius: 20px;

  h2 {
    width: 80%;
    color: #00539c;
    color: white;
    top: 2px;
  }

  p {
    width: 80%;
    color: #00539c;
    color: white;
    bottom: 20px;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    text-align: center;
    border-radius: 20px;
    position: relative;
    top: 30px;

    h2 {
      width: 80%;
      color: #00539c;
      color: white;
    }

    p {
      width: 80%;
      color: white;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxInsights = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: auto;
  background-color: white;
  top: 2%;
  border-radius: 20px;
  background: linear-gradient(to top, #00539c 10%, #022c57 90%);

  img {
    width: 60%;
    height: auto;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: auto;
    background-color: white;
    border-radius: 20px;
    background: linear-gradient(to top, #00539c 10%, #022c57 90%);
    gap: 30px;

    img {
      width: 100%;
      height: auto;
      position: relative;
      right: 3%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxInsightsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
  text-align: left;
  border-radius: 20px;
  gap: 20px;

  h2 {
    width: 80%;
    color: white;
    top: 2px;
  }

  p {
    width: 80%;
    color: white;
    bottom: 20px;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 20px;
    position: relative;
    bottom: 40px;

    h2 {
      color: white;
      width: 90%;
    }

    p {
      color: white;
      width: 90%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(1, 100%);
  align-content: center;
  width: 80%;
  height: auto;
  gap: 20px;
  background-color: #00539c;
  position: relative;
  bottom: 30px;

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 80%;
    height: 30%;
    background-color: #00539c;
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 20px;
  background: linear-gradient(to top, #00539c 10%, #022c57 90%);

  img {
    width: 105%;
    height: 40%;
    top: 80px;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 20px;
    background: linear-gradient(to top, #00539c 10%, #022c57 90%);
    gap: 20px;
    img {
      width: 105%;
      height: 25vh;
      top: 80px;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxStatusText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: auto;
  border-radius: 20px;
  text-align: center;
  bottom: 10px;

  h2 {
    color: white;
    top: 20px;
  }

  p {
    color: white;
    bottom: 15px;
    width: 100%;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: auto;
    border-radius: 20px;
    text-align: center;
    position: relative;
    bottom: 20px;

    h2 {
      color: white;
      position: relative;
      top: 0.1%;
      width: 100%;
    }

    p {
      color: white;
      bottom: 15px;
      width: 100%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
export const BoxUnlimitedUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 20px;
  background: linear-gradient(to top, #00539c 10%, #022c57 90%);

  img {
    width: 80%;
    height: auto;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 20px;
    background: linear-gradient(to top, #00539c 10%, #022c57 90%);

    img {
      width: 80%;
      height: 70%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxUnlimitedUsersText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  border-radius: 20px;
  text-align: center;
  bottom: 50px;

  h2 {
    color: white;
    bottom: 20px;
  }

  p {
    color: white;
    width: 80%;
    bottom: 30px;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    border-radius: 20px;
    text-align: center;
    bottom: 50px;

    h2 {
      color: white;
      bottom: 20px;
    }

    p {
      color: white;
      width: 90%;
      bottom: 30px;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const ContainerNotification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  text-align: center;
  bottom: 35vh;
  background-color: #f5f5f5;

  img {
    width: 50%;
    height: 90%;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    bottom: 35vh;
    background-color: #f5f5f5;

    img {
      width: 80%;
      height: 100%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
export const ContainerNotificationText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  text-align: center;
  background-color: #f5f5f5;

  h2 {
    color: #00539c;
    font-size: 35px;
  }

  p {
    color: #00539c;
    width: 70%;
    font-size: 22px;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 70vh;
    text-align: center;
    background-color: #f5f5f5;

    h2 {
      color: #00539c;
      font-size: 25px;
      width: 90%;
      position: relative;
      bottom: 2%;
    }

    p {
      color: #00539c;
      width: 100%;
      font-size: 20px;
      height: 20%;
      position: relative;
      bottom: 5%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
