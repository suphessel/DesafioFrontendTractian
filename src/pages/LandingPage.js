import React from "react";
import { ContainerPage } from "./styledLandinPage";
import {
  WaveImg,
  BoxText,
  Box,
  BoxNumber,
  OneBox,
  TwoBox,
  ThreeBox,
  BoxImg,
  ContainerAssetManager,
  BoxAssetManager,
  BoxAssetManagerText,
  BoxColumn,
  BoxInsights,
  BoxStatus,
  BoxUnlimitedUsers,
  BoxInsightsText,
  BoxStatusText,
  BoxUnlimitedUsersText,
  ContainerNotification,
  ContainerNotificationText,
} from "./styledLandinPage";
import softwarehardware from "../assets/images/softwarehardware.png";
import bluewavebackground2 from "../assets/images/bluewavebackground2.png";
import gestaodeativosstatuscompleto from "../assets/images/gestaodeativosstatuscompleto.png";
import insightsteladesalinhamento from "../assets/images/insightsteladesalinhamento.png";
import statuscompleto from "../assets/images/statuscompleto.png";
import usuariosilimitados from "../assets/images/usuariosilimitados.png";
import ordemdeservicoautomatizadacelular from "../assets/images/ordemdeservicoautomatizadacelular.png";

const LandingPage = () => {
  return (
    <ContainerPage>
      <WaveImg>
        <img src={bluewavebackground2} alt="bluewavebackground2" />
      </WaveImg>
      <BoxText>
        <h2>A união perfeita de software e hardware em um só lugar</h2>
        <p>
          Gestão de ativos, Ordens de Serviço automatizadas e Insights
          automáticos na mesma plataforma.
        </p>
      </BoxText>
      <Box>
        <BoxNumber>
          <OneBox>
            <h2> ↓ 60% </h2>
          </OneBox>
          <p>
            Reduza em até 60% o <br />
            custo de manutenção
          </p>
          <TwoBox>
            <h2> ↑ 50% </h2>
          </TwoBox>
          <p>
            Aumente em até 50% o <br /> uptime da sua máquina
          </p>
          <ThreeBox>
            <h2> ↓ 55% </h2>
          </ThreeBox>
          <p>
            Reduza em até 55% o número <br /> de quebras inesperadas
          </p>
        </BoxNumber>
        <BoxImg>
          <img src={softwarehardware} alt="softwarehardware" />
        </BoxImg>
      </Box>
      <ContainerAssetManager>
        <h2>Para além do nome Indústria 4.0</h2>
        <p>
          Conheça a Gestão de Ativos 4.0 que realmente funciona. Desfrute da
          fusão perfeita e simplificada de ferramentas de hardware-software de
          que precisa para chegar na manutenção classe mundial.
        </p>
        <BoxAssetManager>
          <img
            src={gestaodeativosstatuscompleto}
            alt="gestaodeativosstatuscompleto"
          />
          <BoxAssetManagerText>
            <h2> Gestão de Ativos e Alarmes</h2>
            <p>
              Através da Visão Geral você acompanha todos os pontos de
              monitoramento e visualiza os últimos acontecimentos.
            </p>
          </BoxAssetManagerText>
        </BoxAssetManager>
        <BoxInsights>
          <img
            src={insightsteladesalinhamento}
            alt="insightsteladesalinhamento"
          />
          <BoxInsightsText>
            <h2> Insights automáticos</h2>
            <p>
              A plataforma aprende como funciona cada ponto de monitoramento e
              te avisa quando algo não está certo.
            </p>
          </BoxInsightsText>
        </BoxInsights>
        <BoxColumn>
          <BoxStatus>
            <img src={statuscompleto} alt="statuscompleto" />
            <BoxStatusText>
              <h2>Status completo</h2>
              <p>
                Tenha controle de tudo o que acontece com as suas máquinas e
                gerencie suas rotinas de manutenção.
              </p>
            </BoxStatusText>
          </BoxStatus>
          <BoxUnlimitedUsers>
            <img src={usuariosilimitados} alt="usuariosilimitados" />
            <BoxUnlimitedUsersText>
              <h2> Usuários ilimitados</h2>
              <p>
                Centralize a rotina do seu time e escale atividades de cada
                colaborador através das ordens de serviço.
              </p>
            </BoxUnlimitedUsersText>
          </BoxUnlimitedUsers>
        </BoxColumn>
      </ContainerAssetManager>
      <ContainerNotification>
        <ContainerNotificationText>
          <h2>Acompanhe sempre que precisar</h2>
          <p>
            {" "}
            O nosso software de manutenção permite que você acesse a situação
            atual dos seus ativos através do computador, tablet e celular.
          </p>
          <p>
            Quando houver uma anomalia, os alertas não só serão exibidos na
            plataforma, mas também serão enviados a você por e-mail e WhatsApp.
          </p>
        </ContainerNotificationText>
        <img
          src={ordemdeservicoautomatizadacelular}
          alt="ordemdeservicoautomatizadacelular"
        />
      </ContainerNotification>
    </ContainerPage>
  );
};
export default LandingPage;
