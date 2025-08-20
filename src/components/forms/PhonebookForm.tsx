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



const PhonebookForm = () => {
    return (
        <>
            <Grid size={{ xs:12, sm:6 }}>
              <TextField fullWidth label='Client Name' placeholder='John Doe' />
            </Grid>
            <Grid size={{ xs:12, sm:6 }}>
              <TextField fullWidth label='Phone No.' placeholder='+91-123-456-8790' />
            </Grid>
            <Grid size={{ xs:12, sm:6 }}>
              <Autocomplete
                {...defaultProps}
                id="auto-complete"
                autoComplete
                includeInputInList
                renderInput={(params) => (
                  <TextField {...params} label="Company" placeholder='Select Company' />
                )}
              />
            </Grid>
        </>
    )
}

export default PhonebookForm
