import { Accordion, AccordionSummary, Grid, Typography, AccordionDetails, Stack, Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from '@emotion/styled'; // ou '@emotion/styled'

const StyledImg = styled.img`
  width: 70px;
  height: 70px;
`;
const AboutProjects = () => {
  return (
    <>
      <Accordion
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          fontSize: "30px",
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary
          id="project"
          aria-controls="panel-content"
          expandIcon={<ExpandMoreIcon />}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid container justifyContent="center">
            <Typography variant="h6">Projects</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justifyContent="center">
            <Stack direction="row" spacing={1}>
              <Link href="https://github.com/Genuino-dev?tab=repositories" target="_blank"rel="noopener noreferrer">
                <StyledImg src="/images/github-6980894_1280.png" alt="GitHub logo photo" />
                </Link>
            </Stack>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AboutProjects;
