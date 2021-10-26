import React, { useState } from "react";
import {
  ContainerHeader,
  BodyHeader,
  LogoTractian,
  ButtonBox,
  Title,
  TextBox,
  ContainerVideo,
  BoxPlay,
} from "./styledHeader";
import logoTractian from "../../assets/images/logoTractian.svg";
import sensorcelulartablet from "../../assets/images/sensorcelulartablet.png";
import FormPage from "../Form/FormPage";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import { Button } from "@material-ui/core";

const Header = () => {
  const [formOpen, setFormOpen] = useState(false);
  const onClickOpen = () => {
    setFormOpen(!formOpen);
  };

  return (
    <ContainerHeader>
      <LogoTractian>
        <img src={logoTractian} alt="logoTractian" />
      </LogoTractian>
      {formOpen === true ? (
        <BodyHeader>
          <FormPage setFormOpen={setFormOpen} />
        </BodyHeader>
      ) : (
        <BodyHeader>
          <ContainerVideo>
            <img src={sensorcelulartablet} alt="sensorcelulartablet" />
          </ContainerVideo>
          <BoxPlay>
            <Button>
              <a
                href="https://www.youtube.com/watch?v=wDUojtWnbi0&list=TLGGueu2fJkBI3MyMjEwMjAyMQ"
                onclick="video"
              >
                <PlayCircleOutline style={{ width: "100%", height: "100%"}}/>
              </a>
            </Button>
          </BoxPlay>
          <ButtonBox>
            <Button onClick={onClickOpen}>DEMONSTRAÇÃO</Button>
            {formOpen === true ? <FormPage setFormOpen={setFormOpen} /> : null}
          </ButtonBox>
          <Title>
            <h2>A PLATAFORMA MAIS COMPLETA DO MERCADO</h2>
          </Title>
          <TextBox>
            <p>
              Com o Software de Manutenção da TRACTIAN você está um passo à
              frente da falha.
              <br />É mais visibilidade, segurança e controle de forma simples e
              inteligente, como deve ser.
            </p>
          </TextBox>
        </BodyHeader>
      )}
    </ContainerHeader>
  );
};
export default Header;
