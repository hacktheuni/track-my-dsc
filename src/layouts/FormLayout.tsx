// src/components/FormLayout.tsx
import { ReactNode } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import DatePickerWrapper from 'src/styles/react-datepicker'

interface FormLayoutProps {
  title: string
  children: ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  onReset?: () => void
}

const FormLayout = ({ title, children, onSubmit, onReset }: FormLayoutProps) => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Card>
            <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <form onSubmit={onSubmit || (e => e.preventDefault())}>
                <Grid container spacing={5}>
                  {children}

                  {/* Action buttons */}
                  <Grid size={{ xs: 12 }}>
                    <Box
                      sx={{
                        gap: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                      }}
                    >
                      <Button type="submit" variant="contained" size="large">
                        Save
                      </Button>
                      <Button
                        type="reset"
                        color="secondary"
                        variant="outlined"
                        size="large"
                        onClick={onReset}
                      >
                        Reset
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper >
  )
}

export default FormLayout
