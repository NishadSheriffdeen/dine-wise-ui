export interface AppDishInfoProps {
  dishName: string
  accuracy: number
  containsMilk: number
  containsMeat: number
}

export interface AppSnackBarProps {
  error: string | null
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  backgroundColor: string
}
