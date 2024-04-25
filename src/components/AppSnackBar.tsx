import { Alert, Snackbar } from '@mui/material'
import React from 'react'

import { Colors } from '../theme/colors'
import { AppSnackBarProps } from '../types/common'

const AppSnackBar: React.FunctionComponent<AppSnackBarProps> = (props) => {
  const { error, open, setOpen, backgroundColor } = props

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        variant="filled"
        severity="error"
        onClose={handleClose}
        style={{
          backgroundColor: backgroundColor,
          color: Colors.textWhite,
          display: 'flex',
          alignItems: 'center',
          lineHeight: '26px',
        }}
      >
        {error}
      </Alert>
    </Snackbar>
  )
}

export default AppSnackBar
