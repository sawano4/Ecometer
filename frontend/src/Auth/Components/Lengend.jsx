import { Typography, Grid } from '@mui/material';

const Legend = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
        <Typography variant="body1" align="center">
          Scope 1
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="body1" align="center">
          Scope 2
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="body1" align="center">
          Scope 3
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Legend;
