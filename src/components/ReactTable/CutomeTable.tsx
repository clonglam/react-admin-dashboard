import {
  Box,
  InputBase,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import React from 'react'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import TablePaginationActions from './tableAction'
import { fuzzyFilter } from './fuzzyFilter'

import type { Dispatch, SetStateAction } from 'react'
import type {
  Column,
  ColumnDef,
  FilterFn,
  Table as ReactTable,
  // SortingState,
} from '@tanstack/react-table'

type TableColumnsType = {
  accessorKey: string
  cell?: (info: any) => any
  header?: () => JSX.Element | string
  footer?: (props: any) => any
}

interface Props {
  tableData: any[]
  tableColumns: TableColumnsType[]
  isLoading: boolean
  globalFilter?: string
  hiddenItem?: Record<string, boolean>
  setGlobalFilter?: Dispatch<SetStateAction<string>>
}

const CustomTable = ({
  tableData,
  globalFilter,
  tableColumns,
  isLoading,
  hiddenItem,
  setGlobalFilter,
}: Props): JSX.Element => {
  // const [sorting, setSorting] = React.useState<SortingState>([])

  const data = React.useMemo(
    () => (isLoading ? Array(30).fill({}) : tableData),
    [isLoading, tableData]
  )

  const columns = React.useMemo(
    () =>
      isLoading
        ? tableColumns.map((column) => ({
            ...column,
            Cell: <Skeleton />,
          }))
        : tableColumns,
    [isLoading, tableColumns]
  )

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },

    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //

    state: {
      columnVisibility: hiddenItem,
      globalFilter,
    },
    debugTable: false,
  })

  // const isEven = (idx) => idx % 2 === 0
  const { pageSize, pageIndex } = table.getState().pagination

  return (
    <Box sx={{ width: '100%', background: 'white' }}>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: data.length }]}
        component="div"
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true,
        }}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={(e) => {
          const size = e.target.value ? Number(e.target.value) : 10
          table.setPageSize(size)
        }}
        ActionsComponent={TablePaginationActions}
      />
      <TableContainer component={Paper} sx={{ maxHeight: 540 }}>
        <Table aria-label="Users table">
          <TableHead className="" sx={{ background: '#fafafc' }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                sx={{ height: '40px', background: '#fafafc' }}
              >
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: (
                            <span>
                              <AiOutlineSortAscending className=" ml-3 inline" />
                            </span>
                          ),
                          desc: (
                            <span>
                              <AiOutlineSortDescending className="ml-3 inline" />
                            </span>
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                        {/* 
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null} */}
                      </div>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody>
            {table.getRowModel().rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell, index) => {
                    return isLoading ? (
                      <TableCell key={`${row.id}_${index}`}>
                        <Skeleton width="100%" height="100%" />
                      </TableCell>
                    ) : (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export interface LocalTableProps {
  data: any
  columns: Array<ColumnDef<any>>
  fuzzyFilter: FilterFn<any>
  globalFilter: string
  isLoading: boolean
  setGlobalFilter: Dispatch<SetStateAction<string>>
}

export function Filter({
  column,
  table,
}: {
  column: Column<any, any>
  table: ReactTable<any>
}): JSX.Element {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2">
      <InputBase
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(e) => {
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }}
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <InputBase
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(e) => {
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }}
        placeholder={`Max`}
        className="w-24 border shadow rounded"
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  ) : (
    <InputBase
      value={(columnFilterValue ?? '') as string}
      onChange={(e) => {
        column.setFilterValue(e.target.value)
      }}
      placeholder={`Search...`}
      className="w-36 border shadow rounded"
      inputProps={{ 'aria-label': 'search' }}
    />
  )
}

export default CustomTable
