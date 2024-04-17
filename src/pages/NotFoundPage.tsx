import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'

import { Colors } from '../theme/colors'

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(172deg, ${Colors.backgroundDark} 50%, ${Colors.backgroundPrimary} 50%)`,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '500px',
          }}
        >
          <Box>
            <h2>Dine Wise</h2>
          </Box>

          <Paper
            sx={{
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              p: 5,
              pb: 8,
              boxShadow: `0px 15px 35px 0px ${Colors.boxShadowPrimary}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontSize: '6rem',
                color: Colors.primary,
              }}
            >
              404
            </Typography>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              Not Found
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
              We're sorry. The page you requested cannot be found.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFoundPage
