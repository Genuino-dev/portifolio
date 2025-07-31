import { Box, Container, Grid, styled, Typography } from "@mui/material";
import avatar from "../../../../assets/1724587525592.jpeg";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground";
import { saveAs } from "file-saver";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh", // Alterado de height para minHeight para garantir que o componente ocupe pelo menos a altura da tela
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
      paddingBottom: "50px", // Adicionado paddingBottom para evitar que os botões fiquem muito próximos do componente About quando a tela é minimizada
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
      paddingBottom: "0", // Adicionado paddingBottom para manter a consistência em telas maiores
    },
  }));

  const downloadCurriculum = () => {
    const fileUrl = "/Portifolio/portifolioFront/src/assets/Profile (3).pdf";
    saveAs(fileUrl, "Curriculum.pdf");
  };

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"100%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} marginTop="50px">
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
              pb={2}
              marginTop="50px"
            >
              Isabella Genuino
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h4"
              textAlign="center"
            >
              I'm Software Developer
            </Typography>
            <Grid
              container
              display="flex"
              justifyContent="center"
              spacing={3}
              pt={3}
            >
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={downloadCurriculum}>
                  <FileDownloadIcon fontSize="medium" />
                  <Typography> Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <a
                  href="https://www.linkedin.com/in/isabellagenuino/"
                  target="_blank" // Corrigido de target="_blanck" para target="_blank"
                  rel="noopener noreferrer" // Corrigido de rel="nooperner noreferrer" para rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <StyledButton>
                    <ContactMailIcon fontSize="medium" />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;