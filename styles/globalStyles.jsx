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
display: flex;
flex-direction: row;
`;

export const Column = styledComponents.div`
background-color: ${(props) => props.backgroundColor};
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
border-radius: ${(props) => props.borderRadius};
display: flex;
flex-direction: column;
`;

export const Padding = styledComponents.div`
padding: ${(props) => props.padding};
`;
