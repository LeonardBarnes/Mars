
import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#CC0C2F',
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
}));

const MarsHeader = () => {
  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return <Toolbar>{marsLogo}</Toolbar>;
  };

  const marsLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Mars Rover Dashboard
    </Typography>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};

export default MarsHeader;
