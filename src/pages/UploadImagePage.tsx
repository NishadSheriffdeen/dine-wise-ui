import { Box, Button, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'

import uploadImagePageWallpaper from '../assets/wallpaper.jpg'
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
        paddingLeft: 40,
        paddingRight: 40,
        backgroundImage: `url(${uploadImagePageWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" sx={{ color: Colors.textWhite }}>
          Give it a try
        </Typography>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="upload-file"
        />
        <label
          htmlFor="upload-file"
          style={{
            border: `2px dashed ${Colors.borderColorPrimary}`,
            minWidth: '750px',
            height: '250px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selectedFile ? (
            <img
              src={previewImage}
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <Typography sx={{ color: Colors.textWhite }}>
              Drag & Drop or Click Here to Upload
            </Typography>
          )}
        </label>
        <Button
          onClick={handleSubmit}
          sx={{
            marginTop: '20px',
            border: `1px solid ${Colors.borderColorPrimary}`,
            fontWeight: 'bold',
            color: Colors.info,
          }}
        >
          Search
        </Button>
        <Typography
          variant="h6"
          sx={{ color: Colors.textWhite, marginTop: '100px' }}
        >
          Find your Dish out of 101 different categories
        </Typography>
        <Typography
          sx={{
            color: Colors.textWhite,
            fontSize: '12px',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          Apple pie, Baby back ribs, Baklava, Beef carpaccio, Beef tartare, Beet
          salad, Beignets, Bibimbap, Bread pudding, Breakfast burrito,
          Bruschetta, Caesar salad, Cannoli, Caprese salad, Carrot cake,
          Ceviche, Cheesecake, Cheese plate, Chicken curry, Chicken quesadilla,
          Chicken wings, Chocolate cake, Chocolate mousse, Churros, Clam
          chowder, Club sandwich, Crab cakes, Creme brulee, Croque madame,
          Cupcakes, Deviled eggs, Donuts, Dumplings, Edamame, Eggs benedict,
          Escargots, Falafel, Filet mignon, Fish and chips, Foie gras, French
          fries, French onion soup, French toast, Fried calamari, Fried rice,
          Frozen yogurt, Garlic bread, Gnocchi etc...
        </Typography>
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
