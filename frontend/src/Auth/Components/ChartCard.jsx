import React from 'react';
import {Grid ,  Paper, Typography } from '@mui/material';
const ChartCard = () => {
  return (
    <Paper elevation={3} sx={{ paddingTop: '10px',paddingBottom : '10px',paddingLeft : '40px', paddingRight : '40px' , borderRadius: '15px', background: "#D9D9D9"  }}>
      <Grid container spacing={2}>
        <Grid item md={12} textAlign={'center'}>
            <Typography sx={{fontFamily : 'Inter , sans-serif' , fontWeight : '700' , fontSize : '16px'}}>Emissions par scope</Typography>
        </Grid>
        <Grid item md={12} >
            <Grid container> 
              <Grid item md={10.3} sx={{backgroundColor : '#D62828'}}>

              </Grid>
              <Grid item>
                 <Typography sx={{fontFamily : 'Inter , sans-serif'  , fontWeight : '700' , fontSize : '16px'}}>80%</Typography>
              </Grid>
            </Grid>
        </Grid>
        <Grid item md={12} >
            <Grid container> 
              <Grid item md={10.3} sx={{backgroundColor : '#F77F00'}}>

              </Grid>
              <Grid item>
                  <Typography sx={{fontFamily : 'Inter , sans-serif'  , fontWeight : '700' , fontSize : '16px'}}>80%</Typography>
              </Grid>
            </Grid>
        </Grid>
        <Grid item md={12}>
            <Grid container> 
              <Grid item  md={10.3}  sx={{backgroundColor : '#FCBF49'}}>

              </Grid>
              <Grid item >
                  <Typography sx={{fontFamily : 'Inter , sans-serif'  , fontWeight : '700' , fontSize : '16px'}}>80%</Typography>
              </Grid>
            </Grid>
        </Grid>   
      </Grid>
    </Paper>
  );
};

export default ChartCard;
