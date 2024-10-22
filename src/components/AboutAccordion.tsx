import { Box, Grid, Stack, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutAccordion = () => {
  return (
    <>
      <Accordion
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          fontSize: "40px",
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
            <Typography variant="h5">Skills</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            fontSize: "20px",
            backgroundColor: "transparent",
          }}
        >
          <Stack>
            <Typography
              style={{
                maxWidth: "1500px",
                margin: "0 auto",
                fontSize: "17px",
              }}
              variant="h6"
              color="Primary"
            >
              Graduanda em Análise e Desenvolvimento de Sistemas,
              atualmente, sou desenvolvedora júnior, atuando como
              desenvolvedora Frontend. Recebo positivos por minha
              proatividade, desenvolvimento na entrega de projetos e pelo
              apoio que ofereço à equipe e aos novos colaboradores. Tive
              também a incrível oportunidade de passar sete meses na
              Austrália, onde não só aperfeiçoei meu inglês, mas também
              adquiri uma perspectiva global sobre tecnologias. Essa
              experiência foi transformadora e me ajudou a crescer tanto
              pessoal quanto profissionalmente. Sempre em busca de
              aprendizado, tenho focado meus estudos em tecnologias de
              Front-end e, nas horas vagas, gosto de explorar novas
              tendências no mundo Frontend e participar de eventos. Estou
              sempre aberta a debater e conversar sobre tecnologia e
              oportunidades.
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          fontSize: "40px",
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
            <Typography variant="h5">Stacks and technologies</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justifyContent="center">
            <Stack direction="row" spacing={2}>
              <Box
                component="img"
                src="/public/typescript.png"
                alt="Typescript logo photo"
                sx={{ width: 100, height: 100 }}
              />
              <Box
                component="img"
                src="/public/images.png"
                alt="React logo photo"
                sx={{ width: 100, height: 100 }}
              />
              <Box
                component="img"
                src="/public/mongodb.png"
                alt="MongoDb logo photo"
                sx={{ width: 100, height: 100 }}
              />
              <Box
                component="img"
                src="/public/docker.jpg"
                alt="Docker logo photo"
                sx={{ width: 100, height: 100 }}
              />
              <Box
                component="img"
                src="/public/azuredevops.png"
                alt="AzureDevops logo photo"
                sx={{ width: 100, height: 100 }}
              />
              <Box
                component="img"
                src="/public/github-6980894_1280.png"
                alt="AzureDevops logo photo"
                sx={{ width: 100, height: 100 }}
              />
              <Box
                component="img"
                src="/public/nextjs.png"
                alt="NextJs logo photo"
                sx={{ width: 100, height: 100 }}
              />
            </Stack>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AboutAccordion;
