import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import TotalCard from './TotalCard';
import ChartCard from './ChartCard';
import ScopesCard from './ScopesCard';
import EmissionsCard from './EmissionsCard';
import EmissionsDirectesCard from './EmissionsDirectesCard';
import EnergieCard from './EnergieCard';
import TransportCard from './TransportCard';
import AchetesCard from './AchetesCard';
import VendusCard from './VendusCard';
import AutresCard from './AutresCard';

const BilanDetails = () => {
  return (
    <Grid item xs={12} sx={{ background: '#F2F4F8', minHeight: 'calc(100vh - 64px)', fontFamily: 'Inter, sans-serif' }}>
      <Grid container justifyContent={'center'} marginTop={'50px'} > 
        <Grid item md={10}>
          <Paper sx={{ paddingTop: '40px',paddingBottom: '40px' , paddingLeft : '45px' , paddingRight : '45px' ,   borderRadius: '15px' }}>
            <Grid container >
              <Grid item md={4.93} xs={12} marginRight={{md : '20px'}} marginBottom={{ md : '35px' , xs : '20px'}}>
                <TotalCard/>
              </Grid>
              <Grid item md={6.79} xs={12} marginBottom={{ md : '35px' , xs : '20px'}} >
                <ChartCard/> 
              </Grid>
              <Grid item md={12} marginBottom={{ md : '35px' , xs : '20px'}}>
                <ScopesCard/>
              </Grid>
              <Grid item md={12} marginBottom={{ md : '35px' , xs : '20px'}}>
                <EmissionsCard/> 
              </Grid>
              <Grid item md={12} marginBottom={{ md : '35px' , xs : '20px'}}>
                <EmissionsDirectesCard/>
              </Grid>
              <Grid item md={12}  marginBottom={{ md : '35px' , xs : '20px'}}>
                <EnergieCard/>
              </Grid>
              <Grid item md={12} marginBottom={{ md : '35px' , xs : '20px'}}>
                <TransportCard />  
              </Grid>
              <Grid item md={12} marginBottom={{ md : '35px' , xs : '20px'}}>
                <AchetesCard />
              </Grid>
              <Grid item md={12} marginBottom={{ md : '35px' , xs : '20px'}}>
                <VendusCard />
              </Grid>
              <Grid item md={12} marginBottom={{ md : '35px' , xs : '20px'}}> 
                <AutresCard/>
              </Grid>
            </Grid>
          </Paper> 
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BilanDetails;
