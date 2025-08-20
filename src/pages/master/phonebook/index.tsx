// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Layout
import TableLayout, { Column } from 'src/layouts/TableLayout'

// Sample columns/rows (replace with real data)
const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Code', minWidth: 100 },
  { id: 'population', label: 'Population', align: 'right', format: v => Number(v).toLocaleString('en-US') },
  { id: 'size', label: 'Size (km²)', align: 'right', format: v => Number(v).toLocaleString('en-US') },
  { id: 'density', label: 'Density', align: 'right', format: v => Number(v).toFixed(2) }
]

type Row = { id?: string | number, name: string, code: string, population: number, size: number, density: number }

const createData = (name: string, code: string, population: number, size: number): Row => {
  const density = population / size
  return { id: code, name, code, population, size, density }
}

const rows: Row[] = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670)
]

const PhonebookTable = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs:12}}>
        <TableLayout
          title='Phonebook'
          columns={columns}
          rows={rows}
          addHref='/master/phonebook/add'
          deleteHref='/master/phonebook/delete'
        />
      </Grid>
    </Grid>
  )
}

export default PhonebookTable



