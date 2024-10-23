import Home from "./pages/Home/Home";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  }
`;

const App = () => {
  return (
    <> <GlobalStyle />
    <Home/>
    </>
  )
}

export default App
