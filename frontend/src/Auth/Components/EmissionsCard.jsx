import { Grid, Paper, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

const EmissionsCard = () => {
  const [pot1, setpot1] = useState(0);
  const [pot2, setpot2] = useState(0);
  const [pot3, setpot3] = useState(0);
  const [pot4, setpot4] = useState(0);
  const [pot5, setpot5] = useState(0);
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
        setpot1((prev) => prev + element.emissions);
      } else if (element.index === 2.1 || element.index === 2.2) {
        setpot2((prev) => prev + element.emissions);
      }
      if (
        element.index === 3.1 ||
        element.index === 3.2 ||
        element.index === 3.3 ||
        element.index === 3.4 ||
        element.index === 3.5
      ) {
        setpot3((prev) => prev + element.emissions);
      }
      if (
        element.index === 4.1 ||
        element.index === 4.2 ||
        element.index === 4.3 ||
        element.index === 4.4 ||
        element.index === 4.5
      ) {
        setpot4((prev) => prev + element.emissions);
      }
      if (
        element.index === 5.1 ||
        element.index === 5.2 ||
        element.index === 5.3 ||
        element.index === 5.4
      ) {
        setpot5((prev) => prev + element.emissions);
      }
    });
  };

  useEffect(() => {
    calculateScopeEmissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: "15px",
        background: "#D9D9D9",
        textAlign: "center",
      }}
    >
      <Typography
        style={{
          fontFamily: "Eudoxus , sans-serif",
          fontWeight: "700",
          fontSize: "3.5vh",
          marginBottom: "-5%",
        }}
      >
        Graph des émissions par catégorie
      </Typography>
      <Grid
        container
        xs={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BarChart
          series={[
            { data: [pot1], color: "#003049" },
            { data: [pot2], color: "#003049" },
            { data: [pot3], color: "#003049" },
            { data: [pot4], color: "#003049" },
            { data: [pot5], color: "#003049" },
            { data: [0], color: "#003049" },
          ]}
          leftAxis={null}
          bottomAxis={null}
          width={700}
          height={300}
          xAxis={[
            {
              scaleType: "band",
              data: ["Page 1"],
              categoryGapRatio: 0.1,
            },
          ]}
        />
      </Grid>
      <Grid
        container
        md={12}
        justifyContent="center"
        style={{
          marginTop: "-3%",
        }}
      >
        <Grid
          container
          md={8.45}
          justifyContent="space-around"
          style={{
            marginBottom: "2%",
          }}
        >
          <div className="bg-[#003049] h-[5vh] w-[5vh] flex justify-center items-center rounded-full">
            <img src="fire.svg" alt="SVG Image" className="h-[3.4vh]"></img>
          </div>
          <div className="bg-[#003049] h-[5vh] w-[5vh] flex justify-center items-center rounded-full">
            <img
              src="Battery.svg"
              alt="SVG Image"
              className="pl-[0.3vh] h-[3vh]"
            ></img>
          </div>
          <div className="bg-[#003049] h-[5vh] w-[5vh] flex justify-center items-center rounded-full">
            <img
              src="Car.svg"
              alt="SVG Image"
              className="pl-[0.1vh] h-[2.5vh]"
            ></img>
          </div>
          <div className="bg-[#003049] h-[5vh] w-[5vh] flex justify-center items-center rounded-full">
            <img src="Bag.svg" alt="SVG Image" className=" h-[3vh]"></img>
          </div>
          <div className="bg-[#003049] h-[5vh] w-[5vh] flex justify-center items-center rounded-full">
            <img
              src="Cart.svg"
              alt="SVG Image"
              className=" h-[2.6vh] pr-[0.3vh]"
            ></img>
          </div>
          <div className="bg-[#003049] h-[5vh] w-[5vh] flex justify-center items-center rounded-full">
            <img
              src="Other.svg"
              alt="SVG Image"
              className="h-[3vh] pr-[0.2vh]"
            ></img>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EmissionsCard;
