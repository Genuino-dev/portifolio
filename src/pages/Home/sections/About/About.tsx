import { Box, Grid, styled, Typography } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import SchoolIcon from "@mui/icons-material/School";

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
    boxShadow:
      "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px", // Removida a sombra
  }));

  return (
    <StyledAboutMe>
      <Typography
        variant="h5"
        color="primary"
        style={{ marginBottom: "16px", marginTop: "16px" }}
      >
        About Me
      </Typography>
      <Typography variant="h5" color="primary" paragraph>
        Developer Frontend
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} md={5}>
          <InfoBox>
            <StarsIcon />
            <Typography variant="h5">Experience</Typography>
            <Typography variant="h6" color="textSecondary">
              +1 Years
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Frontend Development
            </Typography>
          </InfoBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <InfoBox>
            <SchoolIcon />
            <Typography variant="h5" color="primary">
              Education
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Technological Degree
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Technology degree in Systems Analysis and Development
            </Typography>
          </InfoBox>
        </Grid>
      </Grid>
      <Grid>
        <InfoBox>
          <Typography variant="h5">Skills</Typography>
        </InfoBox>
      </Grid>
    </StyledAboutMe>
  );
};

export default About;
