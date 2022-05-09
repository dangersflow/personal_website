import { createGlobalStyle, ThemeProvider } from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../styles/fonts.css";
import { useMediaQuery } from "react-responsive";

const theme = {
  colors: {
    primary: "#32325D",
    secondary: "#f0f4f7",
    tertiary: "#2f98da",
    quaternary: "#1d75b6",
  },
};

const GlobalStyle = createGlobalStyle`
body{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2560' height='1440' preserveAspectRatio='none' viewBox='0 0 2560 1440'%3e%3cg clip-path='url(%26quot%3b%23SvgjsClipPath1375%26quot%3b)' fill='none'%3e%3crect width='2560' height='1440' x='0' y='0' fill='%2332325d'%3e%3c/rect%3e%3ccircle r='89.97' cx='2402.01' cy='195.11' fill='url(%23SvgjsLinearGradient1376)'%3e%3c/circle%3e%3ccircle r='73.9' cx='1920.66' cy='959.86' fill='url(%23SvgjsLinearGradient1377)'%3e%3c/circle%3e%3ccircle r='56.7' cx='970.51' cy='1185.29' fill='url(%23SvgjsLinearGradient1378)'%3e%3c/circle%3e%3ccircle r='131.505' cx='1822.36' cy='613.12' fill='url(%23SvgjsLinearGradient1379)'%3e%3c/circle%3e%3ccircle r='107.83' cx='1270.47' cy='810.8' fill='url(%23SvgjsLinearGradient1380)'%3e%3c/circle%3e%3ccircle r='131.85' cx='608.14' cy='334.12' fill='url(%23SvgjsLinearGradient1381)'%3e%3c/circle%3e%3ccircle r='87.07' cx='39.27' cy='184.5' fill='url(%23SvgjsLinearGradient1382)'%3e%3c/circle%3e%3ccircle r='41.055' cx='1081.86' cy='310.71' fill='url(%23SvgjsLinearGradient1383)'%3e%3c/circle%3e%3ccircle r='36.31' cx='1798.05' cy='821.36' fill='%2343468b'%3e%3c/circle%3e%3ccircle r='134' cx='2386.14' cy='1126.32' fill='url(%23SvgjsLinearGradient1384)'%3e%3c/circle%3e%3ccircle r='133.72' cx='208.3' cy='333.85' fill='url(%23SvgjsLinearGradient1385)'%3e%3c/circle%3e%3ccircle r='139.99' cx='1993.31' cy='979.34' fill='url(%23SvgjsLinearGradient1386)'%3e%3c/circle%3e%3ccircle r='71.44' cx='1859.47' cy='1360.44' fill='url(%23SvgjsLinearGradient1387)'%3e%3c/circle%3e%3ccircle r='52.985' cx='579.1' cy='417.83' fill='url(%23SvgjsLinearGradient1388)'%3e%3c/circle%3e%3ccircle r='42.675' cx='752.73' cy='728.55' fill='url(%23SvgjsLinearGradient1389)'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id='SvgjsClipPath1375'%3e%3crect width='2560' height='1440' x='0' y='0'%3e%3c/rect%3e%3c/clipPath%3e%3clinearGradient x1='2222.07' y1='195.11' x2='2581.9500000000003' y2='195.11' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1376'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1772.8600000000001' y1='959.8599999999999' x2='2068.46' y2='959.8599999999999' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1377'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='857.11' y1='1185.29' x2='1083.91' y2='1185.29' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1378'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1559.35' y1='613.12' x2='2085.37' y2='613.12' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1379'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='rgba(72%2c 70%2c 135%2c 1)' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1054.81' y1='810.8' x2='1486.1299999999999' y2='810.8' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1380'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='rgba(72%2c 70%2c 135%2c 1)' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='344.44' y1='334.12' x2='871.8399999999999' y2='334.12' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1381'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='rgba(72%2c 70%2c 135%2c 1)' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='-134.86999999999998' y1='184.5' x2='213.41' y2='184.5' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1382'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='rgba(72%2c 70%2c 135%2c 1)' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='999.7499999999999' y1='310.71' x2='1163.9699999999998' y2='310.71' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1383'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='2118.14' y1='1126.32' x2='2654.14' y2='1126.32' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1384'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='-59.139999999999986' y1='333.85' x2='475.74' y2='333.85' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1385'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1713.33' y1='979.34' x2='2273.29' y2='979.34' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1386'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1716.5900000000001' y1='1360.44' x2='2002.3500000000001' y2='1360.44' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1387'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='473.13' y1='417.83000000000004' x2='685.0699999999999' y2='417.83000000000004' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1388'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='667.38' y1='728.55' x2='838.0799999999999' y2='728.55' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1389'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-color:${theme.colors.primary};
  padding: 1rem;
  margin-left:10%;
  margin-right:10%;
  font-family: 'Poppins', cursive;
  justify-content:center;
  display:flex;
  flex: 1 0 auto;
  flex-direction:column;

  @media (min-width: 0px) {
    padding: 0;
    margin-left:0;
    margin-right:0;
  }
  
  @media (min-width: 1920px) {
    margin-left:5%;
    margin-right:5%;
  }

  @media (min-width: 2570px) {
    margin-left:20%;
    margin-right:20%;
  }

  @media (min-width: 3450px) {
    margin-left:30%;
    margin-right:30%;
  }
  
}
#tsparticles{
  position: absolute;
  z-index: -1;
}
`;

function MyApp({ Component, pageProps }) {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                bubble: {
                  size: 10,
                  distance: 500,
                },
                repulse: {
                  distance: 100,
                  duration: 1,
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 175,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.3,
                straight: false,
              },
              number: {
                density: {
                  enable: false,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
