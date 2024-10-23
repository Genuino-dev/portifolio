import { Box, Grid, styled, Typography } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import SchoolIcon from "@mui/icons-material/School";
import AboutAccordion from "../../../../components/AboutAccordion";

const About = () => {
  const StyledAboutMe = styled("div")(({ theme }) => ({
    backgroundColor: "#f0f0f0", // Alterado para cinza
    padding: theme.spacing(4),
    textAlign: "center",
  }));

  const InfoBox = styled(Box)(({ theme }) => ({
    backgroundColor: "transparent", // Alterado para transparente
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    gap: "30px",
    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px", // Removida a sombra
  }));

  return (
    <StyledAboutMe>
      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={5}>
          <InfoBox>
            <StarsIcon />
            <Typography variant="h6">Experience</Typography>
            <Typography  color="textSecondary">
              +1 Years
            </Typography>
            <Typography color="textSecondary" fontSize="">
              Frontend Development
            </Typography>
          </InfoBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <InfoBox>
            <SchoolIcon/>
            <Typography variant="h6" color="primary">
              Education
            </Typography>
            <Typography color="textSecondary">
              Technological Degree
            </Typography>
            <Typography color="textSecondary">
              Technology degree in Systems Analysis and Development
            </Typography>
          </InfoBox>
        </Grid>
      </Grid>
      <Grid>
        <AboutAccordion/>
      </Grid>
    </StyledAboutMe>
  );
};

export default About;
