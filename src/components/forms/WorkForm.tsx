// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const companies = [
    { title: 'XYZ Pvt Ltd' },
    { title: 'ABC Pvt Ltd' },
    { title: 'PQR Pvt Ltd' },
]

// Add this type definition for CompanyOptionType
type CompanyOptionType = {
    title: string
}

const defaultProps = {
    options: companies,
    getOptionLabel: (option: CompanyOptionType) => option.title,
};



const WorkForm = () => {
    return (
        <>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label='Form No.' placeholder='123456' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label='Mater' placeholder='To change name' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth type='number' label='Filing Days' placeholder='5' />
            </Grid>
        </>
    )
}

export default WorkForm
