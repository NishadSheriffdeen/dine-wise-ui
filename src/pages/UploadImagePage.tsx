import { Box, Button, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'

import AppDishInfo from '../components/AppDishInfo'
import AppSnackBar from '../components/AppSnackBar'
import { Colors } from '../theme/colors'
import { ResponseData } from '../types/response'

const UploadImagePage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string>('')
  const [prediction, setPrediction] = useState<ResponseData>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null) // State for error message

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      setSelectedFile(file)
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError('Please select an image first.')
      return
    }

    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      setLoading(true)
      const response = await axios.post<ResponseData>(
        'http://127.0.0.1:5000/predict',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      if (response.status >= 200 && response.status < 300) {
        setPrediction(response.data)
      } else {
        throw new Error(`Request failed with status ${response.status}`)
      }
    } catch (error) {
      setError('An error occurred. Invalid image or no network.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'space-between',
        marginLeft: 40,
        marginRight: 40,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2">Give it a try</Typography>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="upload-file"
        />
        <label
          htmlFor="upload-file"
          style={{
            border: `2px dashed ${Colors.boxShadowPrimary}`,
            minWidth: '750px',
            height: '250px',
            textAlign: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          {selectedFile ? (
            <img
              src={previewImage}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          ) : (
            <Typography>Drag & Drop or Click Here to Upload</Typography>
          )}
        </label>
        <Button variant="contained" onClick={handleSubmit}>
          Search
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {prediction ? (
              <AppDishInfo
                dishName={prediction?.dishName}
                accuracy={prediction?.dishPredictionAccuracy}
                containsMilk={prediction?.containsMilk ?? 0}
                containsMeat={prediction?.containsMeat ?? 0}
              />
            ) : null}
          </>
        )}
      </Box>
      <AppSnackBar
        error={error}
        open={error !== null}
        setOpen={() => setError(null)}
        backgroundColor={Colors.danger}
      />
    </Box>
  )
}

export default UploadImagePage
