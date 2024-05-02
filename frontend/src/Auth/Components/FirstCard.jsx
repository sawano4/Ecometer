import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
const FirstCard = () => {
  const styles = {
    button: {
      height: '56px',
      gap: '16px',
      borderRadius: '15px',
      border: '1px solid #0F172A',
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '24px',
      textAlign: 'center',
      textTransform : 'none',
      color : ' #0F172A',
      padding : '0px',
      
    },
    circle: {
        width: '124px',
        height: '124px',
        borderRadius: '50%',
        backgroundColor: '#E9B9B9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      circleContainer: {
        height: '124px',
        marginRight: { xs: '0px', md: '41px' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontFamily: 'Eudoxus Sans, sans-serif',
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '30px',
        textAlign: 'center',
        marginTop : '10px',

      
      textTransform : 'none',
      },
      bodyText: {
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '28px',
        textAlign: 'center',
        color: '#F77F00',
        textTransform : 'none',
      },
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="auto">
      <Grid item xs={12} md={10.94} >
        <Grid container height="auto" sx={{ marginTop: { md: '40px' } }}>
          <Grid item xs={12} md={12} sx={{ height: 'auto', marginBottom: '16px' }}>
            <Grid container height='auto'>
            <Grid item xs={12} md={1.59} sx={styles.circleContainer} >
                <div style={styles.circle}></div>
              </Grid>
              <Grid item xs={12} md={1.94} sx={{ height: '124px',justifyContent: 'center' }}>
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                  <Grid item xs={12} >
                    <Typography variant="h2" sx={styles.text}>Sonatrach</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={styles.bodyText}>Entreprise</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} sx={{ marginBottom: { md: '25px' } }}>
          <Grid container spacing={2} justifyContent="center">
              <Grid item xs={9} md={4}>
                <Button variant="outlined" color="primary" sx={{ ...styles.button }} fullWidth>
                  Commencer le bilan de Carbone
                </Button>
              </Grid>
              <Grid item xs={9} md={4}>
                <Button variant="outlined" color="primary" sx={{ ...styles.button }} fullWidth>
                  Consulter les Bilans précédents
                </Button>
              </Grid>
              <Grid item xs={9} md={4}>
                <Button variant="outlined" color="primary" sx={{ ...styles.button  , marginBottom : {xs : '10px'}}} fullWidth>
                  Etalblissement Et Suivi D'objectifs
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstCard;
