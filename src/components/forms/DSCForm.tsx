// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import DatePicker from 'react-datepicker'

// ** React Imports
import { useState, forwardRef } from 'react'

const companies = [
    { title: 'XYZ Pvt Ltd' },
    { title: 'ABC Pvt Ltd' },
    { title: 'PQR Pvt Ltd' },
  ]
  
  const Users: readonly UserOptionType[] = [
    { title: 'User 1' },
    { title: 'User 2' },
    { title: 'User 3' },
  ]
  
  // Add this type definition for CompanyOptionType
  type CompanyOptionType = {
    title: string
  }
  
  type UserOptionType = {
    inputValue?: string
    title: string
  }
  
  const defaultProps = {
    options: companies,
    getOptionLabel: (option: CompanyOptionType) => option.title,
  };
  
  const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
  })
  
  const filter = createFilterOptions<UserOptionType>();



const DSCForm = () => {

    const [date, setDate] = useState<Date | null | undefined>(null)
  const [receivedBy, setReceivedBy] = useState<UserOptionType | null>(null);
  const [deliveredBy, setDeliveredBy] = useState<UserOptionType | null>(null);
  const [receivedFrom, setReceivedFrom] = useState<UserOptionType | null>(null);
  const [deliveredTo, setDeliveredTo] = useState<UserOptionType | null>(null);
    return (
        <>
           <Grid size={{ xs:12, sm:6 }}>
              <TextField fullWidth label='Client Name' placeholder='John Doe' />
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
            <Grid size={{ xs:12, sm:6 }}>
              <TextField fullWidth disabled label='Group' placeholder='Agarwal Group' />
            </Grid>
            <Grid size={{ xs:12, sm:3 }}>
              <TextField fullWidth label='Location' placeholder='Box 4' />
            </Grid>
            <Grid size={{ xs:12, sm:3 }}>
              <FormControl fullWidth>
                <InputLabel id='status-label'>Status</InputLabel>
                <Select
                  label='Status'
                  defaultValue=''
                  id='status'
                  labelId='status-label'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='OUT'>OUT</MenuItem>
                  <MenuItem value='IN'>IN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs:12, sm:6 }}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
              />
            </Grid>
            <Grid size={{ xs:12, sm:3 }}>
              <Autocomplete
                value={receivedBy}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setReceivedBy({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setReceivedBy({
                      title: newValue.inputValue,
                    });
                  } else {
                    setReceivedBy(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.title);
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="received-by"
                options={Users}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                renderOption={(props, option) => {
                  const { key, ...optionProps } = props;
                  return (
                    <li key={key} {...optionProps}>
                      {option.title}
                    </li>
                  );
                }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} fullWidth label="Received By" placeholder='User' />
                )}
              />
            </Grid>
            <Grid size={{ xs:12, sm:3 }}>
              <Autocomplete
                value={deliveredBy}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setDeliveredBy({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setDeliveredBy({
                      title: newValue.inputValue,
                    });
                  } else {
                    setDeliveredBy(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.title);
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="delivered-by"
                options={Users}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                renderOption={(props, option) => {
                  const { key, ...optionProps } = props;
                  return (
                    <li key={key} {...optionProps}>
                      {option.title}
                    </li>
                  );
                }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} fullWidth label="Delivered By" placeholder='User' />
                )}
              />
            </Grid>
            <Grid size={{ xs:12, sm:3 }}>
              <Autocomplete
                value={receivedFrom}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setReceivedFrom({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setReceivedFrom({
                      title: newValue.inputValue,
                    });
                  } else {
                    setReceivedFrom(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.title);
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="received-from"
                options={Users}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                renderOption={(props, option) => {
                  const { key, ...optionProps } = props;
                  return (
                    <li key={key} {...optionProps}>
                      {option.title}
                    </li>
                  );
                }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} fullWidth label="Received From" placeholder='Client' />
                )}
              />
            </Grid>
            <Grid size={{ xs:12, sm:3 }}>
              <Autocomplete
                value={deliveredTo}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setDeliveredTo({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setDeliveredTo({
                      title: newValue.inputValue,
                    });
                  } else {
                    setDeliveredTo(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.title);
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="delivered-to"
                options={Users}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                renderOption={(props, option) => {
                  const { key, ...optionProps } = props;
                  return (
                    <li key={key} {...optionProps}>
                      {option.title}
                    </li>
                  );
                }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} fullWidth label="Delivered To" placeholder='Client' />
                )}
              />
            </Grid>
            <Grid size={{ xs:12, sm:6 }}>
              <TextField fullWidth label='Phone No.' placeholder='+91-123-456-8790' />
            </Grid>
        </>
    )
}

export default DSCForm
