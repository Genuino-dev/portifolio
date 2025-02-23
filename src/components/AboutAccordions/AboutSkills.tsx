import { Accordion, AccordionDetails, AccordionSummary, Grid, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutSkills = () => {
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
                color="primary"
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
      </>
    );
  };
  
  export default AboutSkills;