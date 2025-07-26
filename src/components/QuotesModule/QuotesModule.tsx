import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  styled,
  Button,
  TextField,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SendIcon from "@mui/icons-material/Send";

const StyledQuoteBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
}));

const QuotesModule = () => {
  const [quote, setQuote] = useState("");
  const [postStatus, setPostStatus] = useState("");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setQuote(data.slip.advice))
      .catch(() => setQuote("Erro ao carregar frase."));
  }, []);

  const handlePost = () => {
    // Usei um caminho relativo no meu próprio domínio.
    // Quando o site estiver via Azion, isso se torna https://seuportifolio.com.br/api/send-message
    fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputText }),
    })
      .then((res) => {
        if (res.status === 429) {
          setPostStatus("Limite de requisições excedido (HTTP 429)");
        } else {
          // Se não for 429 (passou pelo firewall), a Vercel retornará 404 Not Found, o que é esperado por não existir.
          setPostStatus(
            `Requisição POST recebida pela origem (Status: ${res.status})`
          );
        }
      })
      .catch((error) => {
        setPostStatus("Erro ao enviar requisição POST (problema de rede)");
        console.error("Fetch error:", error);
      });
  };

  return (
    <StyledQuoteBox>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <FormatQuoteIcon color="primary" fontSize="large" />
        </Grid>
        <Grid item>
          <Typography variant="h6">Frase do Dia</Typography>
        </Grid>
        <Grid item>
          <Typography color="textSecondary">{quote}</Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Mensagem do dia"
            variant="outlined"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handlePost}
          >
            Enviar POST
          </Button>
        </Grid>
        {postStatus && (
          <Grid item>
            <Typography color="error">{postStatus}</Typography>
          </Grid>
        )}
      </Grid>
    </StyledQuoteBox>
  );
};

export default QuotesModule;
