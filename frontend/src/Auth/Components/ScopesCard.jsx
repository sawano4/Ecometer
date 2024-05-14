import {Grid ,  Paper, Typography } from '@mui/material';

const Styles = {
  ScopeText : {
    fontFamily : 'Inter , sans-serif',
    fontWeight : '400',
    fontSize : '18px',
    lineHeight : '28px',
    color : '#FFFFFF',
  },
  EmissionsText : {
    fontFamily : 'Inter , sans-serif',
    fontWeight : '700',
    fontSize : '48px',
    lineHeight : '58px',
    color : '#FFFFFF',
  },
  UnityText : {
    fontFamily : 'Eudoxus , sans-serif',
    fontWeight : '500',
    fontSize : '23px',
    lineHeight : '58px',
    color : '#FFF'
  }
}
import { useEffect, useState } from "react";
const ScopesCard = () => {
     const [scope1, setScope1] = useState(0);
     const [scope2, setScope2] = useState(0);
     const [scope3, setScope3] = useState(0);
     const Data = JSON.parse(localStorage.getItem("ClientBilan"));
     const calculateScopeEmissions = () => {
       Data.emissionPosts.map((element) => {
         if (
           element.index === 1.1 ||
           element.index === 1.2 ||
           element.index === 1.3 ||
           element.index === 1.4 ||
           element.index === 1.5
         ) {
           console.log(element.emissions);
           setScope1((prev) => prev + element.emissions);
         } else if (element.index === 2.1 || element.index === 2.2) {
           setScope2((prev) => prev + element.emissions);
         } else {
           setScope3((prev) => prev + element.emissions);
         }
       });
     };

     useEffect(() => {
       calculateScopeEmissions();
       // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
  return (
    <Paper sx={{ borderRadius: "15px" }} elevation={3}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <Paper
            sx={{
              paddingLeft: "55px",
              paddingRight: "55px",
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: "#D62828",
              textAlign: { md: "center" },
            }}
          >
            <Typography style={Styles.ScopeText}>Scope 1</Typography>
            <Typography style={Styles.EmissionsText}>{scope1 / 100}</Typography>
            <Typography style={Styles.UnityText}>tCO2e</Typography>
          </Paper>
        </Grid>

        <Grid item md={4} xs={12}>
          <Paper
            sx={{
              paddingLeft: "55px",
              paddingRight: "55px",
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: "#F77F00",
              textAlign: { md: "center" },
            }}
          >
            <Typography style={Styles.ScopeText}>Scope 2</Typography>
            <Typography style={Styles.EmissionsText}>{scope2 / 100}</Typography>
            <Typography style={Styles.UnityText}>tCO2e</Typography>
          </Paper>
        </Grid>

        <Grid item md={4} xs={12}>
          <Paper
            sx={{
              paddingLeft: "55px",
              paddingRight: "55px",
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: "#FCBF49",
              textAlign: { md: "center" },
            }}
          >
            <Typography style={Styles.ScopeText}>Scope 3</Typography>
            <Typography style={Styles.EmissionsText}>{scope3 / 100}</Typography>
            <Typography style={Styles.UnityText}>tCO2e</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ScopesCard;
