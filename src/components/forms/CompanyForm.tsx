// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const groups = [
    { title: 'Group 1' },
    { title: 'Group 2' },
    { title: 'Group 3' },
  ]
  
  // Add this type definition for GroupOptionType
  type GroupOptionType = {
    title: string
  }
  
  const defaultProps = {
    options: groups,
    getOptionLabel: (option: GroupOptionType) => option.title,
  };
  

const CompanyForm = () => {
    return (
        <>
            <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label='Company' placeholder='XYZ Pvt Ltd' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <Autocomplete
                    {...defaultProps}
                    id="auto-complete"
                    autoComplete
                    includeInputInList
                    renderInput={(params) => (
                        <TextField {...params} label="Group" placeholder='Select Group' />
                    )}
                />
            </Grid>
        </>
    )
}

export default CompanyForm
