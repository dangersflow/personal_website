import React from "react";
import { Row, Column, Padding } from "../styles/globalStyles";
import styledComponents from "styled-components";
import Image from "next/image";
import { useTheme } from "styled-components";

const Card = styledComponents.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
svg{
    height: ${(props) => props.height};
    width: ${(props) => props.width};
}
`;

const RedText = styledComponents.h1`
color: red;
font-size: ${(props) => props.fontSize};
`;

const Text = styledComponents.h1`
color: ${(props) => props.color};
font-size: ${(props) => props.fontSize};
font-family: ${(props) => props.fontFamily};
`;

const Divider = styledComponents.div`
    border-top: 2px solid black;
`;

export default function ResourceCard(props) {
  return (
    <Card width={"40em"}>
      <Column>
        <Row backgroundColor={"transparent"} alignItems={"center"}>
          <CardImage src={props.image} height={"100"} width={"100"} />
          <Padding padding={"20px"} />
          <Text fontSize={"2.3em"}>{props.title}</Text>
        </Row>
        <Padding padding={"10px"} />
        <Divider />
        <Text fontSize={"2em"} fontFamily={"Josefin Sans"}>
          {props.text}
        </Text>
      </Column>
    </Card>
  );
}
