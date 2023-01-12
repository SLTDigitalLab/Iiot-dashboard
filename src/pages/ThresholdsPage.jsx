import React from 'react';
import Box from '@mui/material/Box';
import Thresholds from "../appComponents/thresholds/thresholds";

function ThresholdsPage() {
  return (
    <>
      <Box height={60} />
      <Box sx={{ flexGrow: 1 }}>
        <Thresholds />
      </Box>
    </>
  );
}

export default ThresholdsPage