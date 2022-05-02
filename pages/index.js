import Head from "next/head";
import ProfileCard from "../components/Card";
import ResourceCard from "../components/ResourceCard";
import profile from "../images/profile.png";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import research from "../images/research.png";
import dev from "../images/dev.svg";
import { Padding, Row, Column } from "../styles/globalStyles";

export default function Home() {
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
        <Row backgroundColor={"transparent"} height={"35vh"}>
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
        <Padding padding={"3%"} />
        <Row backgroundColor={"transparent"} height={"35vh"}>
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
}
