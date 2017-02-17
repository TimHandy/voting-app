'use strict'

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {Grid} from 'react-bootstrap';

const ChartDisplay = (props) => {
  const data = props.poll.pollOptions

  return (
    <Grid>
      <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 0}}>
       <XAxis dataKey="option"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </Grid>
  );
}

export default ChartDisplay;