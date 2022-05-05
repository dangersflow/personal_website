import styledComponents from "styled-components";

export const Row = styledComponents.div`
background-color: ${(props) =>
  props.backgroundColor ? props.backgroundColor : props.theme.colors.tertiary};
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
border-radius: ${(props) => props.borderRadius};
flex: 1 0 auto;
display: flex;
flex-flow: row nowrap;

@media (min-width: 480px) {
  flex: 1 1 auto;
display: flex;
flex-flow: row wrap;
}

@media (min-width: 768px) {
  flex: 1 1 auto;
display: flex;
flex-flow: row wrap;
}

@media (min-width: 1024px) {
flex: 1 1 auto;
display: flex;
flex-flow: row nowrap;
}

@media (min-width: 1920px) {
  flex: 1 1 auto;
  display: flex;
  flex-flow: row nowrap;
}
`;

export const Wrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    background-color: ${(props) => props.backgroundColor};
    `;

export const Column = styledComponents.div`
background-color: ${(props) => props.backgroundColor};
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
border-radius: ${(props) => props.borderRadius};
flex: ${(props) => (props.flex ? props.flex : "1 0 auto")};
display: flex;
flex-flow: column nowrap;

@media (min-width: 480px) {
  flex: 1 1 auto;
display: flex;
flex-flow: column wrap;
}

@media (min-width: 768px) {
  flex: 1 1 auto;
display: flex;
flex-flow: column wrap;
}

@media (min-width: 1024px) {
flex: 1 1 auto;
display: flex;
flex-flow: column nowrap;
}

@media (min-width: 1920px) {
  
}
`;

export const Padding = styledComponents.div`
padding: ${(props) => props.padding};
`;

export const Text = styledComponents.h1`
@media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
  }

  @media (min-width: 1920px) {
    font-size: 30px;
  }

  color: ${(props) => props.color};

`;

export const Button = styledComponents.button`
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
border-radius: ${(props) => props.borderRadius};
font-size: ${(props) => props.fontSize};
font-weight: ${(props) => props.fontWeight};
font-family: ${(props) => props.fontFamily};
background: blue;
border: 1px solid black;
display: flex;
flex-direction: row;
`;

export const Container = styledComponents.div`
display: flex;
flex-direction: column;
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
`;
