import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Grid from '@mui/material/Grid';

const CustomBarChart = () => {
  const data = [
    { year: '2018', scope1: 20, scope2: 30, scope3: 50 },
    { year: '2019', scope1: 40, scope2: 25, scope3: 35 },
    { year: '2020', scope1: 15, scope2: 45, scope3: 40 },
    { year: '2021', scope1: 35, scope2: 20, scope3: 45 },
    { year: '2022', scope1: 50, scope2: 10, scope3: 40 },
  ];

  return (
    <Grid container spacing={2}>
      {/* Premier GridItem pour le graphique */}
      <Grid item xs={12} md={8}>
        <BarChart width={329} height={246} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          {/* Ajoutez barGap pour créer un espace entre les barres */}
          <Bar dataKey="scope3" stackId="a" fill="#FCBF49" barGap={10} />
          <Bar dataKey="scope2" stackId="a" fill="#F77F00" barGap={10} />
          <Bar dataKey="scope1" stackId="a" fill="#FF0000" barGap={10} />
          {/* Incluez la légende dans le graphique */}
          
        </BarChart>
      </Grid>
      
      {/* Deuxième GridItem pour la légende */}
      <Grid item xs={12} md={4}>
        {/* Pour les petits écrans, la légende est affichée sous forme de tableau */}
        <Legend />
      </Grid>
    </Grid>
  );
};

export default CustomBarChart;
