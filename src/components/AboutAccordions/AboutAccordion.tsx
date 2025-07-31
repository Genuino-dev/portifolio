import {
  Grid,
  Stack,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled"; // ou '@emotion/styled'
import AboutSkills from "./AboutSkills";
import AboutProjects from "./AboutProjects";

const StyledImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

const AboutAccordion = () => {
  return (
    <>
      <AboutSkills />
      <Accordion
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          fontSize: "30px",
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel-content"
          expandIcon={<ExpandMoreIcon />}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid container justifyContent="center">
            <Typography variant="h6">Stacks and technologies</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justifyContent="center">
            <Stack direction="row" spacing={1}>
              <StyledImg
                src="/images/typescript.png?id=123"
                alt="Typescript logo photo"
              />
              <StyledImg
                src="images/images.png?lang=pt"
                alt="React logo photo"
              />
              <StyledImg
                src="/images/mongodb.png?v=1"
                alt="MongoDb logo photo"
              />
              <StyledImg
                src="/images/docker.jpeg?tech=js"
                alt="Docker logo photo"
              />
              <StyledImg
                src="/images/azuredevops.png?stack=frontend"
                alt="AzureDevops logo photo"
              />
              <StyledImg
                src="/images/github-6980894_1280.png?img=logo"
                alt="GitHub logo photo"
              />
              <StyledImg
                src="/images/nextjs.png?type=png"
                alt="NextJs logo photo"
              />
              <StyledImg
                src="/images/angular.webp?ref=azion"
                alt="AngularJs logo photo"
              />
              <StyledImg
                src="/images/nodejs.png?cache=test"
                alt="NodeJs logo photo"
              />
            </Stack>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <AboutProjects />
    </>
  );
};

export default AboutAccordion;
