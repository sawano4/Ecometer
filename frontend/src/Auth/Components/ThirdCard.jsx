import React from 'react';
import { Grid, Typography } from '@mui/material';
import ProgressBar from "@ramonak/react-progress-bar";

function ThirdCard() {
    const style = {
        firstTypography: {
            fontFamily: 'Eudoxus, Sans-serif',
            fontSize: '26px',
            fontWeight: 500,
            lineHeight: '30px',
            textAlign: 'left',
        },
        thirdTypography: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
        }
    };

    return (
        <Grid container>
            <Grid item md={12} xs={12} sx={{ marginBottom: '60px' }}>
                <Typography sx={style.firstTypography}>Progrès Des Objectifs</Typography> 
            </Grid>
            <Grid item md={12} xs={12} sx={{ marginBottom: '30px' }}>
                <ProgressBar
                    completed={60}
                    bgColor='linear-gradient(119.71deg, #003049 0%, #2094F3 100%)'
                    baseBgColor="#ADDBF3"
                />
            </Grid>
            <Grid item md={12} xs={12} >
                <Typography sx={style.thirdTypography}>Vous avez atteint 60% de vos objectifs</Typography> 
            </Grid>
        </Grid>
    );
}

export default ThirdCard;
