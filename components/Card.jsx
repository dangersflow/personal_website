import React from "react";
import { Row, Column, Padding } from "../styles/globalStyles";
import styledComponents from "styled-components";
import Image from "next/image";
import { useTheme } from "styled-components";

const Card = styledComponents.div`
  @media (max-width: 480px) {
    width: 10em;
  }

  @media (max-width: 768px) {
    width: 20em;
  }

  @media (max-width: 1024px) {
    width: 30em;
  }

  @media (max-width: 1200px) {
    width: 40em;
  }

  background-color: ${(props) => props.theme.colors.secondary};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  transition: all 0.1s ease-in-out;
  &:hover {
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;

const CardImage = styledComponents(Image)`
  border-radius: 1000px;
`;

const RedText = styledComponents.h1`
color: red;
font-size: ${(props) => props.fontSize};
`;

const Text = styledComponents.h1`
color: ${(props) => props.color};
font-size: ${(props) => props.fontSize};
`;

export default function ProfileCard(props) {
  return (
    <Card width={"55em"}>
      <Row
        backgroundColor={"red"}
        width={"100%"}
        justifyContent={"center"}
        borderRadius={"20px"}
      >
        <Text color="white" fontSize={"2.2em"}>
          Hi. My Name Is:
        </Text>
      </Row>
      <Padding padding={"10px"} />
      <Column alignItems={"center"}>
        <CardImage
          src={props.image}
          height={200}
          width={200}
          layout={"fixed"}
        />
        <Text fontSize={"2.6em"}>Francisco Gonzalez</Text>
      </Column>
      <Row
        backgroundColor={"grey"}
        width={"100%"}
        justifyContent={"center"}
        borderRadius={"20px"}
      >
        <Text color={"white"} fontSize={"1.7em"}>
          Software Engineer
        </Text>
      </Row>
    </Card>
  );
}
