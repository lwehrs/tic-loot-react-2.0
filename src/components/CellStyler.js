import React from "react";

export default function TableViusals(cell) {
    const playerClass = cell.row.original.class
    const {player, itemName, response, date, itemID} = cell.row.original

    switch(cell.value) {
        case player:
            return (<td className={playerClass} {...cell.getCellProps()}>{cell.render('Cell')}</td>)
        case itemName:
            return (
                <td {...cell.getCellProps()}>
                    <a 
                        className="item-link" 
                        href={"https://www.wowhead.com/wotlk/item=" + itemID}
                        data-wh-icon-size="small"
                        >
                            {cell.render('Cell')}
                    </a>
                </td>)
        case response:
            return (<td className={playerClass} {...cell.getCellProps()}>{cell.render('Cell')}</td>)
        case date:
            return (<td className={playerClass} {...cell.getCellProps()}>{cell.render('Cell')}</td>)
        default:
            return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
    }
}