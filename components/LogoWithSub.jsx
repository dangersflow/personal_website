import react from "react";

import { Column, Container } from "../styles/globalStyles";
import styledComponents from "styled-components";

const Logo = styledComponents.div`
position: absolute;
display: flex; 
flex: 0 1;
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

const Subtitle = styledComponents.h1`
transition: all 0.1s ease-in-out;
color: white;
position: absolute;
z-index: -1;
opacity: ${(props) => (props.hovering ? "1" : "0")};
border-radius: 20px;
padding: 10px 20px 10px 20px;
font-size: 1.4em;

border: 2px solid black;

transform: ${(props) =>
  props.hovering ? `translateY(${props.subtitlePosition})` : "translateY(0%);"};
  -webkit-backdrop-filter: blur(8px);  /* Safari 9+ */
  backdrop-filter: blur(8px); /* Chrome and Opera */
  box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
  background-color: rgb(228 228 228 / 15%); 
  

`;

export function LogoWithSub(props) {
  const [hovering, setHovering] = react.useState(false);
  console.log(hovering);

  return (
    <Container alignItems={"center"}>
      <Logo>
        <img
          src={props.src}
          style={{
            width: "120px",
          }}
          onMouseOver={() => setHovering(!hovering)}
          onMouseOut={() => setHovering(!hovering)}
        ></img>
      </Logo>
      <Subtitle hovering={hovering} subtitlePosition={props.subtitlePosition}>
        {props.subtitle}
      </Subtitle>
    </Container>
  );
}
