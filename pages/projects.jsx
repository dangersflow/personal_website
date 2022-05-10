import {
  Text,
  Padding,
  AppBar,
  HorizontalDivider,
} from "../styles/globalStyles";
import { Button } from "@mui/material";

export default function Projects() {
  return (
    <>
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
        <Button fullWidth={"20vw"}>
          <Text color="white">Projects</Text>
        </Button>
      </AppBar>
      <Padding padding={"1em"} />
      <Text>Here be projects</Text>
    </>
  );
}
