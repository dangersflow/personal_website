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

@media (min-width: 0px) {
  flex: 0 1 auto;
display: flex;
flex-flow: row wrap;
}

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

export const FrostedRow = styledComponents.div`
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
border-radius: ${(props) => props.borderRadius};
flex: 1 0 auto;
display: flex;
flex-flow: row nowrap;

-webkit-backdrop-filter: blur(8px);  /* Safari 9+ */
backdrop-filter: blur(8px); /* Chrome and Opera */
box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
background-color: rgb(228 228 228 / 15%); 

@media (min-width: 0px) {
  flex: 0 1 auto;
display: flex;
flex-flow: row wrap;
}

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

@media (min-width: 0px) {
  flex: 1 1 auto;
display: flex;
flex-flow: column wrap;
}

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

export const SmallPadding = styledComponents.div`


@media (min-width: 0px) {
  padding: 1em;
}

@media (min-width: 480px) {
  padding: 2em;
}

@media (min-width: 768px) {
  padding: 1em;
}

@media (min-width: 1024px) {
  padding: 2em;
}

@media (min-width: 1920px) {
  padding: 2em;
}
`;

export const HomePagePadding = styledComponents.div`
@media (min-width: 0px) {
  padding: 4em;
}

@media (min-width: 480px) {
  padding: 9em;
}

@media (min-width: 768px) {
  padding: 10em;
}

@media (min-width: 1024px) {
  padding: 10em;
}

@media (min-width: 1920px) {
  padding: 11em;
}
`;

export const ExtraSmallPadding = styledComponents.div`


@media (min-width: 0px) {
  padding: 0em;
}

@media (min-width: 480px) {
  padding: 0em;
}

@media (min-width: 768px) {
  padding: 0em;
}

@media (min-width: 1024px) {
  padding: 1em;
}

@media (min-width: 1920px) {
  padding: 1em;
}
`;

export const BigPadding = styledComponents.div`
padding: ${(props) => props.padding};
`;

export const Text = styledComponents.h1`
@media (min-width: 0px) {
  font-size: 13px;
}

@media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 30px;
  }

  color: ${(props) => props.color};

`;

export const LargeText = styledComponents.h1`
@media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }

  @media (min-width: 1920px) {
    font-size: 35px;
  }

  color: ${(props) => props.color};

`;

export const SmallText = styledComponents.h1`
@media (min-width: 0px) {
  font-size: 20px;
}

@media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 25px;
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
border: 2px solid black;
display: flex;
flex-direction: row;

-webkit-backdrop-filter: blur(8px);  /* Safari 9+ */
backdrop-filter: blur(8px); /* Chrome and Opera */
box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 5%);
background-color: black;
`;

export const Container = styledComponents.div`
display: flex;
flex-direction: column;
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
background-color: ${(props) => props.backgroundColor};
`;

export const AppBar = styledComponents.div`
display: flex;
flex-direction: row;
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
background-color: ${(props) => props.backgroundColor};
border-radius: ${(props) => props.borderRadius};
`;

export const FlatButton = styledComponents.button`
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
border-radius: ${(props) => props.borderRadius};
font-size: ${(props) => props.fontSize};
font-weight: ${(props) => props.fontWeight};
font-family: ${(props) => props.fontFamily};
border: 2px solid black;
display: flex;
flex-direction: row;
`;

export const HorizontalDivider = styledComponents.div`
display: flex;
flex-direction: row;
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
background-color: ${(props) => props.backgroundColor};
border-radius: ${(props) => props.borderRadius};
border-left: ${(props) => props.borderLeft};
`;
