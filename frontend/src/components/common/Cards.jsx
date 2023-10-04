
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from './Box';

const Cards = ({ data }) => {
  const { name, icon, range, target, arrowIcon, value } = data;

  return (
    <Box sx={{ display: 'flex', mx: '2px', p: 2 }} direction="row">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            <Typography sx={{ fontSize: 14 }} color="#344054" gutterBottom>
              {name}
            </Typography>
            <img src={icon} alt="icon" width="21.129px" height="21.8px" />
          </Stack>
          <Typography fontWeight={700} fontSize="24px" lineHeight="32px" mt={2}>
            {range}
          </Typography>
          <Stack direction="row" spacing={1} mt={2.5}>
            <img src={`/assets/images/${arrowIcon}.svg`} alt="arrow" width={18} height={18} />
            <Typography fontSize={12} color="#101828">
              {value}
            </Typography>
            <Typography fontSize={12} color="#667085">
              {target}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cards;



