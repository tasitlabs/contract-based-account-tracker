import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

const Header = ({ onHelp }) => (
  <Grid container direction="row" alignItems="center" spacing={16}>
    <Grid item>
      <Typography variant="title">
        Tasit The Graph Hackathon Web Dapp
      </Typography>
    </Grid>
    <Grid item>
      <IconButton
        aria-label="Delete"
        color="secondary"
        onClick={() => onHelp && onHelp()}
      >
        <HelpIcon />
      </IconButton>
    </Grid>
  </Grid>
);

export default Header;
