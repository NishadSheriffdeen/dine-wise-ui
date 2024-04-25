import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import home from '../assets/home.jpeg'
import { Colors } from '../theme/colors'

function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: Colors.backgroundPrimary,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '20px',
          maxWidth: '600px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          margin: '20px',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
          Welcome to Dine Wise!
        </Typography>
        <Typography
          variant="body1"
          align="left"
          gutterBottom
          style={{ color: 'white' }}
        >
          Discover the world of cuisine with Dine Wise. Our advanced food
          recognition system helps you identify dishes instantly out of 101
          different varieties of categories.
        </Typography>
        <Link to="/predict" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginTop: '20px' }}
          >
            Get Started
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default HomePage
