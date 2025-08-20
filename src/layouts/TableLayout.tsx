// ** React Imports
import { useState, ChangeEvent, useRef, useEffect, ReactNode } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'

import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net";
import { useTheme } from '@mui/material/styles'
import Link from 'next/link'


export interface Column {
  id: string
  label: string
  minWidth?: number
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  format?: (value: any, row?: any) => ReactNode
  render?: (row: any) => ReactNode
}

interface TableLayoutProps<T = any> {
  columns: Column[]
  rows: T[]
  getRowKey?: (row: T, index: number) => string | number
  title?: string
  addHref?: string
  deleteHref?: string
  addLabel?: string
  deleteLabel?: string
  actions?: ReactNode
}

const TableLayout = ({ columns, rows, getRowKey, title, addHref, deleteHref, addLabel = 'Add', deleteLabel = 'Delete', actions }: TableLayoutProps) => {

  const theme = useTheme()

  const tableRef = useRef<HTMLTableElement>(null);
  let dataTable: any = null;

  useEffect(() => {
    if (tableRef.current) {
      // Destroy existing instance to avoid duplicates
      if ($.fn.dataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
      }

      // Initialize DataTable with API only (no UI elements)
      dataTable = $(tableRef.current).DataTable({
        paging: false, 
        searching: true,
        info: false, 
        ordering: true, 
        dom: 'lrtp',
        orderCellsTop: true,   
      });

      // Optional: global search if an input with id #global-search exists in the DOM
      const globalSearch = $('#global-search');
      if (globalSearch && globalSearch.length) {
        globalSearch.on('keyup change', (event) => {
          const value = (event.target as HTMLInputElement).value;
          dataTable.search(value).draw();
        });
      }

      // Attach events to each column input after DataTable renders
      $(tableRef.current).find('thead tr:eq(1) th input').each(function (index) {
        $(this).on('keyup change', function () {
          dataTable.column(index).search((this as HTMLInputElement).value).draw();
        });
      });

      
    }

    return () => {
      if (tableRef.current && $.fn.dataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
      }
    };
  }, [theme.palette.mode]);


  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(5)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Card>
      {(title || actions || addHref || deleteHref) && (
        <CardHeader
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          title={
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              {title && <Typography variant='h6' sx={{ flexGrow: 1 }}>{title}</Typography>}
              <div style={{ display: 'flex', gap: 8 }}>
                {actions}
                {addHref && (
                  <Link href={addHref} passHref>
                    <Button variant='contained' size='medium'>{addLabel}</Button>
                  </Link>
                )}
                {deleteHref && (
                  <Link href={deleteHref} passHref>
                    <Button color='error' variant='outlined' size='medium'>{deleteLabel}</Button>
                  </Link>
                )}
              </div>
            </div>
          }
        />
      )}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: '65vh' }} key={theme.palette.mode}>
          <Table ref={tableRef} stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id}>
                    <TextField fullWidth size='small' placeholder={`Search for ${column.label}...`} />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={
                    getRowKey ? getRowKey(row, idx) : (row && (row.id ?? row.code ?? `${idx}`))
                  }>
                    {columns.map(column => {
                      const cellValue = column.render ? column.render(row) : row?.[column.id]

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(cellValue, row) : cellValue}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Card>
  )
}

export default TableLayout
