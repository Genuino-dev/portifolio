import { Box, Container, Grid, styled, Typography } from "@mui/material";
import avatar from "../../../../assets/1724587525592.jpg";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground";
import { saveAs } from "file-saver";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // >=mobile
      paddingTop: "0",
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
    <>
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
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Isabella Genuino
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
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
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={downloadCurriculum}>
                    <FileDownloadIcon />
                    <Typography> Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <a
                    href="https://www.linkedin.com/in/isabellagenuino/"
                    target="_blanck"
                    rel="nooperner noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <StyledButton>
                      <ContactMailIcon />
                      <Typography>Contact me</Typography>
                    </StyledButton>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
