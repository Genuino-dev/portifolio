import { Box, Grid, styled, Typography } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import SchoolIcon from '@mui/icons-material/School';

const About = () => {
  const StyledAboutMe = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
    textAlign: "center", // Corrigido de 'taxtAlign' para 'textAlign'
  }));

  const InfoBox = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows, // Adicionei um índice para a sombra
  }));

  return (
    <StyledAboutMe>
      <Typography variant="h3" color="primary">
        About Me
      </Typography>
      <Typography variant="h4" color="primary" paragraph>
        Developer Frontend 
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={5}>
          <InfoBox>
            <StarsIcon></StarsIcon>
            <Typography variant="h5">Experience </Typography>
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
            <SchoolIcon></SchoolIcon>
            <Typography variant="h5" color="primary">
              Education
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Technological Degree
            </Typography>
            <Typography variant="h6" color="textSecondary">Technology degree in Systems Analysis and Development</Typography>
          </InfoBox>
        </Grid>
      </Grid>
    </StyledAboutMe>
  );
};

export default About;
