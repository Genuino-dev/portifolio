import { Accordion, AccordionSummary, Grid, Typography, AccordionDetails, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            </Stack>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AboutProjects;
