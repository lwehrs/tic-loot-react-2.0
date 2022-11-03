import React from "react";

export default function TableViusals(cell) {
    const playerClass = JSON.stringify(cell.row.original.class)

    // console.log(cell.row.original);

    // const newCell = {
    //     column: cell.column,
    //     getCellProps: cell.getCellProps,
    //     render: cell.render,
    //     row: cell.row,
    //     value: cell.value,
    // }

    // PLAYER COLOR
    if (playerClass.includes("DEATHKNIGHT")) {
        return (
            <td className='death-knight' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (playerClass.includes("DRUID")) {
        return (
            <td className='druid' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (playerClass.includes("HUNTER")) {
        return (
            <td className='hunter' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (playerClass.includes("MAGE")) {
        return (
            <td className='mage' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (playerClass.includes("PALADIN")) {
        return (
            <td className='paladin' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (playerClass.includes("PRIEST")) {
        return (
            <td className='priest' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (playerClass.includes("ROGUE")) {
        return (
            <td className='rogue' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (JSON.stringify(cell.row.original.class).includes("SHAMAN")) {
        return (
            <td className='shaman' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (JSON.stringify(cell.row.original.class).includes("WARLOCK")) {
        return (
            <td className='warlock' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else if (JSON.stringify(cell.row.original.class).includes("WARRIOR")) {
        return (
            <td className='warrior' {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    } else {
        return (
            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
        )
    }
}