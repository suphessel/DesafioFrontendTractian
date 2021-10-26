import React, {useEffect} from "react";
import {
  ContainerFooter,
  Business,
  ContainerCarousel,
  LogoElectrolux,
  LogoEmbraer,
  LogoFabercastell,
  LogoMarilan,
  LogoPirelli,
  LogoSuzano,
  LogoTigre,
  Line,
  LogoTractian,
  TopPage,
  BoxInfo,
  SocialMedia,
  LogoInsta,
  LogoIn,
  LogoFace,
  LogoYtube,
  PrivacyPolicy,
} from "./styledFooter";
import logoTractian from "../../assets/images/logoTractian.svg";
import logoelectrolux from "../../assets/images/logoelectrolux.png";
import logoembraer from "../../assets/images/logoembraer.png";
import logofabercastell from "../../assets/images/logofabercastell.png";
import logomarilan from "../../assets/images/logomarilan.png";
import logopirelli from "../../assets/images/logopirelli.png";
import logosuzano from "../../assets/images/logosuzano.png";
import logotigre from "../../assets/images/logotigre.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import {Button} from "@material-ui/core"

const Footer = () => {

  useEffect(() => {
    onClickScroll()
  }, [])

  const onClickScroll = () => {
    window.scrollTo(0, 0)
  }

  return (
    <ContainerFooter style={{ borderTop: "2px solid #1e90ff" }}>
      <Business>
        <h2>
          Quem já está se beneficiando do Software de Manutenção Inteligente:
        </h2>
        <ContainerCarousel>
          <LogoElectrolux>
            <img src={logoelectrolux} alt="logoelectrolux" />
          </LogoElectrolux>
          <LogoEmbraer>
            <img src={logoembraer} alt="logoembraer" />
          </LogoEmbraer>
          <LogoFabercastell>
            <img src={logofabercastell} alt="logofabercastell" />
          </LogoFabercastell>
          <LogoMarilan>
            <img src={logomarilan} alt="logomarilan" />
          </LogoMarilan>
          <LogoPirelli>
            <img src={logopirelli} alt="logopirelli" />
          </LogoPirelli>
          <LogoSuzano>
            <img src={logosuzano} alt="logosuzano" />
          </LogoSuzano>
          <LogoTigre>
            <img src={logotigre} alt="logotigre" />
          </LogoTigre>
        </ContainerCarousel>
      </Business>
      <LogoTractian>
        <img src={logoTractian} alt="logoTractian" />
        <SocialMedia>
          <LogoIn>
            <a
              href="https://www.linkedin.com/company/tractian/"
              onclick="linkedin"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </LogoIn>
          <LogoFace>
            <a href="https://www.facebook.com/tractian" onclick="facebook">
              <img src={facebook} alt="facebook" />
            </a>
          </LogoFace>
          <LogoInsta>
            <a href="https://www.instagram.com/tractian/" onclick="instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </LogoInsta>
          <LogoYtube>
            <a href="https://www.youtube.com/c/TRACTIAN" onclick="youtube">
              <img src={youtube} alt="youtube" />
            </a>
          </LogoYtube>
        </SocialMedia>
        <TopPage>
          <Button onClick={onClickScroll}>Voltar ao topo ↑</Button> 
        </TopPage>
      </LogoTractian>
      <Line></Line>
      <BoxInfo>
        <p>
          © Tractian Tecnologia Ltda
          <br />
          CNPJ: 35.755.699/0001-84
        </p>

        <PrivacyPolicy>
          <p>
            {" "}
            <a
              href="https://tractian.com/politica-de-privacidade"
              onclick="privacypolicy()"
            >
              Política de Privacidade
            </a>
          </p>
        </PrivacyPolicy>
      </BoxInfo>
    </ContainerFooter>
  );
};
export default Footer;
