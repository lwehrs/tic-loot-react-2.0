import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useSortBy } from 'react-table'
import MOCK_DATA from './DATA.json'
import { COLUMNS } from './columns'
import "../css/Table.css"
import { GlobalFilter } from './GlobalFilter'
import TableViusals from './TableVIsual'

export const FilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

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
                            {row.cells.map(cell => {
                                // console.log(row.values.player);
                                // console.log(row.values.itemName);
                                // console.log(row.values.response);
                                // console.log(row.values.date);
                                // console.log(row.values);

                                return(TableViusals(cell))
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}
