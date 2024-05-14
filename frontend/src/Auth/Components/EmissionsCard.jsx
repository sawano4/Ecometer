import {Grid ,  Paper, Typography } from '@mui/material';

const circleStyle = {
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  backgroundColor: '#003049'
};

const rectangleStyle = {
  height : '185px',
  backgroundColor : '#003049'
};

const textStyle = {
  fontFamily : 'Eudoxus , sans-serif',
  fontWeight : '700',
  fontSize : '20px',
  lineHeight : '24px',
  marginBottom : '30px'
};
const EmissionsCard = () => {
  return (
    <Paper elevation={3} sx={{ paddingTop: '21px',paddingBottom : '21px',paddingLeft : '82px', paddingRight : '82px' , borderRadius: '15px', background: "#D9D9D9"  ,textAlign : 'center'}}>
          <Typography style={textStyle}>Emissions par catégorie</Typography>
          <Grid container justifyContent={'space-between'}>
            <Grid item md={1.41}>
              <Grid container justifyContent={'space-between'}>
                <Grid item md={12} xs={12} marginBottom={'10px'}>
                      <div style={rectangleStyle} >

                      </div>
                </Grid>
                <Grid item md={12} xs={12}  >
                  <Grid container justifyContent="center" alignItems="center">
                      <div style={circleStyle}></div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1.41}>
              <Grid container >
                <Grid item md={12} xs={12} marginBottom={'10px'}>
                      <div style={rectangleStyle}>

                      </div>
                </Grid>
                <Grid item md={12} xs={12}  >
                  <Grid container justifyContent="center" alignItems="center">
                      <div style={circleStyle}></div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1.41}>
              <Grid container justifyContent={'space-between'}>
                <Grid item md={12} xs={12} marginBottom={'10px'}>
                      <div style={rectangleStyle}>

                      </div>
                </Grid>
                <Grid item md={12} xs={12}  >
                  <Grid container justifyContent="center" alignItems="center">
                      <div style={circleStyle}></div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1.41}>
              <Grid container justifyContent={'space-between'}>
                <Grid item md={12} xs={12} marginBottom={'10px'}>
                      <div style={rectangleStyle}>

                      </div>
                </Grid>
                <Grid item md={12} xs={12}  >
                  <Grid container justifyContent="center" alignItems="center">
                      <div style={circleStyle}></div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1.41}>
              <Grid container justifyContent={'space-between'}>
                <Grid item md={12} xs={12} marginBottom={'10px'}>
                      <div style={rectangleStyle}>

                      </div>
                </Grid>
                <Grid item md={12} xs={12}  >
                  <Grid container justifyContent="center" alignItems="center">
                      <div style={circleStyle}></div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1.41}>
              <Grid container justifyContent={'space-between'} alignItems="center">
                <Grid item md={12} xs={12} marginBottom={'10px'}>
                      <div style={rectangleStyle}>

                      </div>
                </Grid>
                
                <Grid item md={12} xs={12}  >
                  <Grid container justifyContent="center" alignItems="center">
                      <div style={circleStyle}></div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
    </Paper>
  );
};

export default EmissionsCard;
