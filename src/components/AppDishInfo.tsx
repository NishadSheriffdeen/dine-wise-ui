import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

import meatIcon from '../assets/meatIcon.png'
import milkIcon from '../assets/milkIcon.png'
import veganIcon from '../assets/veganIcon.png'
import { Colors } from '../theme/colors'
import { AppDishInfoProps } from '../types/common'

const AppDishInfo: React.FC<AppDishInfoProps> = ({
  dishName,
  accuracy,
  containsMilk,
  containsMeat,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '175px',
      }}
    >
      <Typography variant="h1" sx={{ color: Colors.textWhite }}>
        {dishName}
      </Typography>
      <Typography variant="h5" sx={{ color: Colors.textWhite }}>
        Accuracy of the identified dish
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(accuracy ?? 0) * 100}
        sx={{
          width: '100%',
          marginTop: '10px',
          height: '15px',
          borderRadius: '20px',
        }}
        color="success"
      />
      <Box sx={{ marginTop: '10px' }}>
        {containsMilk === 1 ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={milkIcon}
              alt="Milk Icon"
              style={{ marginRight: '5px', maxWidth: '50px' }}
            />
          </Box>
        ) : null}
        {containsMeat === 1 ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={meatIcon}
              alt="Meat Icon"
              style={{ marginRight: '5px', maxWidth: '50px' }}
            />
          </Box>
        ) : null}
        {containsMilk === 0 && containsMeat === 0 ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={veganIcon}
              alt="Vegan Icon"
              style={{ marginRight: '5px', maxWidth: '50px' }}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default AppDishInfo
