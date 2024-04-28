import { Box, Typography } from '@mui/material'
import React from 'react'

import contactUsPageWallpaper from '../assets/contactUsWallpaper.jpg'
import { Colors } from '../theme/colors'

const ContactUsPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        height: '100vh',
        backgroundImage: `url(${contactUsPageWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          borderRadius: '28px',
          width: 'fit-content',
          padding: '30px',
          boxShadow: `0px 15px 35px 0px ${Colors.boxShadowPrimary}`,
          margin: 'auto',
        }}
      >
        <Typography variant="h1" sx={{ color: Colors.textWhite }}>
          Contact Us
        </Typography>
        <Typography variant="h5" sx={{ color: Colors.textWhite }}>
          Please feel free to send us an email nishadsheriffdeen@gmail.com for
          any feedback or collaboration!
        </Typography>
      </Box>
    </Box>
  )
}

export default ContactUsPage
