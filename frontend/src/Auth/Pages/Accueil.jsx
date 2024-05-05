import React from 'react';
import { Box, Typography, Grid, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import AppBarComponent from '../Components/AppBarComponent';
import SideBar from '../Components/SideBar';
import FirstCard from '../Components/FirstCard';
import CustomBarChart from '../Components/CustomBarChart';
import Legend from '../Components/Lengend';
import ThirdCard from '../Components/ThirdCard';

function Acceuil() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container>
            <Grid item md={2.1} sx={{ minHeight: '100vh', display: { xs: 'none', md: 'block' }  }}>
            <SideBar />
            
        </Grid>
            <Grid item md={9.9} xs={12}>
                <Grid container height={'auto'} justifyContent="center" >
                    <Grid item height={'64px'} xs={12} sx={{ fontFamily: 'Inter, sans-serif' }}>
                        <AppBarComponent title="Acceuil" />
                    </Grid>
                    <Grid item height={'auto'} xs={12} sx={{ background: '#F2F4F8', minHeight: 'calc(100vh - 64px)', fontFamily: 'Inter, sans-serif' }}>
                        <Grid container height="auto" justifyContent="center" marginTop={isSmallScreen ? '10px' : '50px'} rowSpacing={3}>
                            <Grid item xs={12} md={10.36} sx={{ height: 'auto', marginBottom: isSmallScreen ? '10px' : '0' }}>
                                <Paper elevation={3} sx={{ height: '100%', borderRadius: '15px', boxShadow: '0px 8px 28px 0px #4859661A' }}>
                                     <FirstCard />
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={5.05} sx={{ height: 'auto' , marginRight : '25px'}}>
                                <Paper elevation={3} sx={{ height: '100%', borderRadius: '15px', boxShadow: '0px 8px 28px 0px #4859661A' }}>
                                            <Grid container direction="column" height={'auto'}>

                                                            <Grid item >
                                                            <Typography variant="h2" sx={{ fontFamily: 'Eudoxus Sans , sans-serif', fontSize: 26, fontWeight: 700, lineHeight: 1.15 ,marginBottom:'35px' , marginLeft : '40px',marginTop : '19px'}}>
                                                                Aperçu des émissions
                                                            </Typography>
                                                            </Grid>

                                                            
                                                            <Grid item justifyContent="center" >
                                                                <Grid container>
                                                                        < Grid item md={6} xs={12} >
                                                                             <CustomBarChart />
                                                                        </Grid>
                                                                <Grid item xs={12} md={4} alignItems="center" sx={{ marginTop: { md: '40px' } , marginLeft: { md: '40px' } }}>
                                                                    <Legend/>
                                                                </Grid>
                                                                
                                                            </Grid>
                                                            </Grid>
                                                            
                                            </Grid>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={5.06} sx={{ height: '320px' }}>
                                <Paper elevation={3} sx={{ height: '100%', borderRadius: '15px', boxShadow: '0px 8px 28px 0px #4859661A'  , paddingLeft : '44px' , paddingRight : '44px' , paddingTop : '21px' , paddingBottom : '21px'}}>
                                        <ThirdCard>

                                        </ThirdCard>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Acceuil;
