import Head from "next/head";
import ProfileCard from "../components/Card";
import ResourceCard from "../components/ResourceCard";
import profile from "../images/profile.png";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import research from "../images/research.png";
import dev from "../images/dev.svg";
import blob from "../images/blob.svg";
import blob2 from "../images/blob2.svg";
import myself from "../images/myself.png";
import {
  Padding,
  Row,
  Column,
  Text,
  Wrapper,
  FrostedRow,
  SmallPadding,
  ExtraSmallPadding,
  HomePagePadding,
  AppBar,
  HorizontalDivider,
} from "../styles/globalStyles";
import styledComponents from "styled-components";
import reactLogo from "../images/react.svg";
import htmlLogo from "../images/html.svg";
import cssLogo from "../images/css3.svg";
import jsLogo from "../images/javascript.svg";
import nextLogo from "../images/next-black.svg";
import { LogoWithSub } from "../components/LogoWithSub";
import { Button } from "@mui/material";

const BackgroundBlobContainer = styledComponents.div`
  background-image: url(${blob2.src});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-position: center;

  @media (min-width: 0px) {
    width: 100vw;
    height: 30vh;
    padding-bottom: 20px;
    margin-bottom: 40px;
  }

  @media (min-width: 480px) {
    width: 100vw;
    height: 50vh;
  }

  @media (min-width: 768px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: 1024px) {
    width: 35vw;
    height: 35vw;
  }

  @media (min-width: 1920px) {
    width: 900px;
    height: 800px;
  }
`;

const BackgroundMyselfContainer = styledComponents.div`
  background-image: url(${blob.src});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-position: center;

  @media (min-width: 0px) {
    width: 100vw;
    height: 30vh;
  }

  @media (min-width: 480px) {
    width: 100vw;
    height: 50vh;
  }

  @media (min-width: 768px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: 1024px) {
    width: 35vw;
    height: 35vw;
  }

  @media (min-width: 1920px) {
    width: 900px;
    height: 800px;
  }
`;

const Logo = styledComponents.div`
display: flex;
@media (min-width: 480px) {
  width: 150px;
  height: 200px;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  width: 150px;
  height: 200px;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  width: 100px;
  height: 150px;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1920px) {
  width: 120px;
  height: 170px;
  justify-content: center;
  align-items: center;
}

transition: all 0.1s ease-in-out;

&:hover {
  margin-top: -10px;
  margin-bottom: -10px;
}
`;

export default function Home() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Head>
        <title>Francisco Gonzalez</title>
      </Head>
      <Padding padding={"0.5em"} />
      <AppBar
        position="sticky"
        backgroundColor={"#665698"}
        borderRadius={"20px"}
        justifyContent={"space-evenly"}
      >
        <Button fullWidth={"20vw"} href={"/"}>
          <Text color="white">Home</Text>
        </Button>
        <HorizontalDivider borderLeft={"1px solid black"} />
        <Button fullWidth={"20vw"} href={"/projects"}>
          <Text color="white">Projects</Text>
        </Button>
      </AppBar>
      <Padding padding={"1em"} />
      <Column justifyContent={"start"}>
        <Row backgroundColor={"transparent"} justifyContent={"space-evenly"}>
          <BackgroundBlobContainer>
            <Text color="white">Hello. My name is Francisco Gonzalez.</Text>
            <Text color="white">I am a software engineer based in Texas.</Text>
          </BackgroundBlobContainer>
          <BackgroundMyselfContainer>
            <img
              src={myself.src}
              style={{
                flex: 1,
                width: "60%",
                justifyContent: "start",
                transform: "scaleX(-1)",
              }}
            ></img>
          </BackgroundMyselfContainer>
        </Row>
        <Padding padding={"1em"} />
        <Row justifyContent={"space-evenly"} alignItems={"center"}>
          <LogoWithSub
            src={reactLogo.src}
            subtitle={"React"}
            subtitlePosition={"130px"}
          />
          <LogoWithSub
            src={jsLogo.src}
            subtitle={"JavaScript"}
            subtitlePosition={"140px"}
          />
          <LogoWithSub
            src={htmlLogo.src}
            subtitle={"HTML5"}
            subtitlePosition={"160px"}
          />
          <LogoWithSub
            src={cssLogo.src}
            subtitle={"CSS3"}
            subtitlePosition={"160px"}
          />
          <LogoWithSub
            src={nextLogo.src}
            subtitle={"Next.js"}
            subtitlePosition={"130px"}
          />
        </Row>
        <HomePagePadding />
        <Row backgroundColor={"transparent"} justifyContent={"center"}>
          <ResourceCard
            accentColor={"green"}
            title={"Github"}
            image={github}
            text={
              "Here you can find all of my GitHub repositories and projects! Most of my work and any future projects will be found here."
            }
          />
          <ExtraSmallPadding />
          <ResourceCard
            accentColor={"blue"}
            title={"LinkedIn"}
            image={linkedin}
            text={
              "Here is my LinkedIn! I have some extra details about myself and my projects in here; feel free to connect with me!"
            }
          />
        </Row>
        <ExtraSmallPadding />
        <Row backgroundColor={"transparent"} justifyContent={"center"}>
          <ResourceCard
            accentColor={"red"}
            title={"Research"}
            image={research}
            text={
              "This is my research group's website! It contains a lot of information about the research that I do, and what the group itself has done!"
            }
          />
          <ExtraSmallPadding />
          <ResourceCard
            accentColor={"purple"}
            title={"DEV.to"}
            image={dev}
            text={
              "Here is my DEV.to profile! I will occasionally upload posts about the projects that I am working on. "
            }
          />
        </Row>
      </Column>
    </div>
  );
}

/*
return (
    <div>
      <Head>
        <title>Francisco Gonzalez</title>
      </Head>
      <Column justifyContent={"center"}>
        <Row backgroundColor={"transparent"} justifyContent={"center"}>
          <ProfileCard text={"Francisco Gonzalez"} image={profile} />
        </Row>
        <Padding padding={"6%"} />
        <Row backgroundColor={"transparent"} height={"35em"}>
          <ResourceCard
            accentColor={"green"}
            title={"Github"}
            image={github}
            text={
              "Here you can find all of my GitHub repositories and projects! Most of my work and any future projects will be found here."
            }
          />
          <Padding padding={"3%"} />
          <ResourceCard
            accentColor={"blue"}
            title={"LinkedIn"}
            image={linkedin}
            text={
              "Here is my LinkedIn! I have some extra details about myself and my projects in here; feel free to connect with me!"
            }
          />
        </Row>
        <Row backgroundColor={"transparent"} height={"35em"}>
          <ResourceCard
            accentColor={"red"}
            title={"Research"}
            image={research}
            text={
              "This is my research group's website! It contains a lot of information about the research that I do, and what the group itself has done!"
            }
          />
          <Padding padding={"3%"} />
          <ResourceCard
            accentColor={"purple"}
            title={"DEV.to"}
            image={dev}
            text={
              "Here is my DEV.to profile! I will occasionally upload posts about the projects that I am working on. "
            }
          />
        </Row>
      </Column>
    </div>
  );
*/
