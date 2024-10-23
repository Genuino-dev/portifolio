import {
  Grid,
  Stack,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from '@emotion/styled'; // ou '@emotion/styled'

const StyledImg = styled.img`
  width: 70px;
  height: 70px;
`;

const AboutAccordion = () => {
  return (
    <>
      <Accordion
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          fontSize: "20px",
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
            <Typography variant="h6">Skills</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            fontSize: "18px",
            backgroundColor: "transparent",
          }}
        >
          <Stack>
            <Typography
              style={{
                maxWidth: "100%",
                margin: "0 auto",
                fontSize: "14px",
              }}
              variant="h6"
              color="Primary"
            >
              Graduanda em Análise e Desenvolvimento de Sistemas, atualmente,
              sou desenvolvedora júnior, atuando como desenvolvedora Frontend.
              Recebo positivos por minha proatividade, desenvolvimento na
              entrega de projetos e pelo apoio que ofereço à equipe e aos novos
              colaboradores. Tive também a incrível oportunidade de passar sete
              meses na Austrália, onde não só aperfeiçoei meu inglês, mas também
              adquiri uma perspectiva global sobre tecnologias. Essa experiência
              foi transformadora e me ajudou a crescer tanto pessoal quanto
              profissionalmente. Sempre em busca de aprendizado, tenho focado
              meus estudos em tecnologias de Front-end e, nas horas vagas, gosto
              de explorar novas tendências no mundo Frontend e participar de
              eventos. Estou sempre aberta a debater e conversar sobre
              tecnologia e oportunidades.
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
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
            <Stack direction="row" spacing={2}>
              <StyledImg src="/images/typescript.png" alt="Typescript logo photo" />
              <StyledImg src="images/images.png" alt="React logo photo" />
              <StyledImg src="/images/mongodb.png" alt="MongoDb logo photo" />
              <StyledImg src="/images/docker.jpg" alt="Docker logo photo" />
              <StyledImg src="/images/azuredevops.png" alt="AzureDevops logo photo" />
              <StyledImg src="/images/github-6980894_1280.png" alt="GitHub logo photo" />
              <StyledImg src="/images/nextjs.png" alt="NextJs logo photo" />
            </Stack>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AboutAccordion;
