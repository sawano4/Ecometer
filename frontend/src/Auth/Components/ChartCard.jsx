import { Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const ChartCard = () => {
  const [total, setTotal] = useState(0);
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
      setTotal((prev) => prev + element.emissions);
    });
  };

  useEffect(() => {
    calculateScopeEmissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper
      elevation={3}
      sx={{
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        borderRadius: "15px",
        background: "#D9D9D9",
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={12} textAlign={"center"}>
          <Typography
            sx={{
              fontFamily: "Inter , sans-serif",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Emissions par scope
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Grid container>
            <Grid
              item
              md={(scope1 / total) * 10}
              sx={{ backgroundColor: "#D62828" }}
            ></Grid>
            <Grid item>
              <Typography
                sx={{
                  fontFamily: "Inter , sans-serif",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                {((scope1 / total) * 1000).toFixed(2)}%{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Grid container>
            <Grid
              item
              md={(scope2 / total) * 10}
              sx={{ backgroundColor: "#F77F00" }}
            ></Grid>
            <Grid item>
              <Typography
                sx={{
                  fontFamily: "Inter , sans-serif",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                {((scope2 / total) * 1000).toFixed(2)}%{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Grid container>
            <Grid
              item
              md={(scope3 / total) * 10}
              sx={{ backgroundColor: "#FCBF49" }}
            ></Grid>
            <Grid item>
              <Typography
                sx={{
                  fontFamily: "Inter , sans-serif",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                {((scope3 / total) * 1000).toFixed(2)}%{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChartCard;
