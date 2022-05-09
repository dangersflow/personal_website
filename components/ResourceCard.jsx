import React from "react";
import {
  Row,
  Column,
  Padding,
  Button,
  Text,
  SmallText,
  LargeText,
} from "../styles/globalStyles";
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
  border-bottom: 4px solid ${(props) => props.accentColor};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};

  @media (min-width: 480px) {

}

@media (min-width: 768px) {

}

@media (min-width: 1024px) {
  height: 20em;
  width: 35em;
}

@media (min-width: 1920px) {
  height: 25em;
  width: 40em;
}
`;

const CardImage = styledComponents(Image)`

`;

const RedText = styledComponents.h1`
color: red;
font-size: ${(props) => props.fontSize};
`;

const Divider = styledComponents.div`
    border-top: 2px solid black;
`;

export default function ResourceCard(props) {
  return (
    <Card accentColor={props.accentColor}>
      <Column>
        <Row backgroundColor={"transparent"} alignItems={"center"}>
          <CardImage
            src={props.image}
            layout={"fixed"}
            width={"100em"}
            height={"100em"}
          />
          <Padding padding={"20px"} />
          <LargeText className="lg">{props.title}</LargeText>
        </Row>
        <Padding padding={"10px"} />
        <Divider />
        <SmallText fontFamily={"Josefin Sans"}>{props.text}</SmallText>
        <Column justifyContent={"end"} alignItems={"end"}>
          <Button
            borderRadius={"25px"}
            width={"100px"}
            justifyContent={"center"}
          >
            <SmallText color={"white"} fontFamily={"Josefin Sans"}>
              -{">"}
            </SmallText>
          </Button>
        </Column>
      </Column>
    </Card>
  );
}
