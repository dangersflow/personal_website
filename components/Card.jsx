import React from "react";
import { Row, Column, Padding } from "../styles/globalStyles";
import styledComponents from "styled-components";
import Image from "next/image";
import { useTheme } from "styled-components";

const Card = styledComponents.div`
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
    <Card width={"30vw"}>
      <Row
        backgroundColor={"red"}
        width={"100%"}
        justifyContent={"center"}
        borderRadius={"20px"}
      >
        <Text color="white" fontSize={"1.3vw"}>
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
        <Text fontSize={"1.6vw"}>Francisco Gonzalez</Text>
      </Column>
      <Row
        backgroundColor={"grey"}
        width={"100%"}
        justifyContent={"center"}
        borderRadius={"20px"}
      >
        <Text color={"white"} fontSize={"1vw"}>
          Software Engineer
        </Text>
      </Row>
    </Card>
  );
}
