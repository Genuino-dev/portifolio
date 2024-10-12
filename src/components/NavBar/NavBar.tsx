import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {
    
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.main,
  }));

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: "white", // Cor do texto
    '&:hover': {
      color: theme.palette.secondary.main, // Cor do texto ao passar o mouse
    },
    fontSize: "25px"
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <StyledMenuItem>About</StyledMenuItem>
          <StyledMenuItem>Skills</StyledMenuItem>
          <StyledMenuItem>Projects</StyledMenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
