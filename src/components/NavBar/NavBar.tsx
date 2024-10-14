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

  const handleScroll =  (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <StyledMenuItem onClick={() => handleScroll('about')}>About</StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll('skills')}>Skills</StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll('projects')}>Projects</StyledMenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
