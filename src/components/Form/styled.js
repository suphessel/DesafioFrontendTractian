import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #6600cc;
  position: relative;
  left: 20%;
  bottom: 5%;
  text-align: center;
  gap: 10%;
  padding: 2%;

  h2 {
    width: 60%;
    font-size: 120%;
    color: #00539c;
    position: relative;
    bottom: 20px;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    width: 70%;
    height: 80%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: #6600cc;
    position: relative;
    left: 10%;
    text-align: center;
    gap: 10%;

    h2 {
      width: auto;
      font-size: 80%;
      color: #00539c;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
export const BoxForm = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid #eee9e9;
  border-radius: 20px;
  position: relative;
  right: 5%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 80%;
  }

  input {
    width: 100%;
    height: auto;
    border: none;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    width: 90%;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid #eee9e9;
    border-radius: 20px;
    position: relative;
    right: 5%;
    padding: 5%;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }

    input {
      width: 100%;
      height: auto;
      border: none;
      font-size: 80%;
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
export const ButtonForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative;
  top: 5%;
  padding: 10%;

  button {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border: none;
    font-weight: bold;
    font-size: 90%;
    background: orange;
    color: white;

    :hover {
      color: orange;
      background-color: #ffe4b5;
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
    height: auto;
    padding-bottom: 20%;

    button {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      border: none;
      font-weight: bold;
      font-size: 70%;
      background: orange;
      color: white;
      position: relative;
      bottom: 40%;

      :hover {
        color: orange;
        background-color: #ffe4b5;
      }
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;

export const BoxImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40%;
  height: auto;

  img {
    width: 80%;
    height: auto;
    position: relative;
    top: 10%;
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    height: auto;

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

export const ButtonClose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: auto;

  button {
    width: 5%;
    height: auto;
    position: relative;
    bottom: 100px;
    left: 15%;
    background: #022c57;
    color: white;
    cursor: pointer;

    :hover {
      color: orange;
      background-color: #ffe4b5;
    }
  }

  @media (max-width: 350px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 667px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height: auto;

    button {
      height: auto;
      position: relative;
      bottom: 50px;
      left: 40%;
      background: #022c57;
      color: white;
      cursor: pointer;

      :hover {
        color: orange;
        background-color: #ffe4b5;
      }
    }
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 1024px) {
  }
`;
