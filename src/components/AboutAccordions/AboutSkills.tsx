import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
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
              Sou uma desenvolvedora fullstack em constante evolução, focada em
              criar soluções web robustas e eficientes. Atualmente, na NTT DATA,
              trabalho com NestJS, Next.js e React.js, Node.js e Azure DevOps no
              meu dia a dia. Acredito no aprendizado contínuo e, nas minhas
              horas vagas, exploro novas tecnologias e ferramentas para expandir
              meu conhecimento e me manter atualizada com as tendências do
              mercado. Minha experiência em suporte técnico e um intercâmbio na
              Austrália me proporcionaram habilidades valiosas em comunicação e
              resolução de problemas. Busco desafios que me permitam aplicar
              meus conhecimentos e contribuir para projetos inovadores.
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AboutSkills;
