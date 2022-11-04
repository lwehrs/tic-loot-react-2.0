import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useSortBy } from 'react-table'
import DATA from './DATA.json'
import { COLUMNS } from './columns'
import "../css/Table.css"
import { GlobalFilter } from './GlobalFilter'
import CellStyler from './CellStyler'

export const FilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy)

    const { globalFilter } = state

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? ' ⬇️' : ' ⬆️') : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return(CellStyler(cell))
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}
