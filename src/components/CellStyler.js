import React from "react";

export default function TableViusals(cell) {
    const playerClass = cell.row.original.class
    const {player, itemName, equipLoc, response, date, itemID} = cell.row.original

    // Determines what type of cell is to be rendered and styles accordingly
    switch(cell.value) {
        // ITEM
        case itemName:
            return (
                <td className="item" {...cell.getCellProps()}>
                    <a 
                        className="item-link"
                        href={"https://wotlk.wowhead.com/item=" + itemID}
                        data-wowhead={"item="+itemID+"?domain=wotlk"}
                        data-wh-icon-size="small"
                        >
                            {cell.render('Cell')}
                    </a>
                </td>
            )
        // RESPONSE
        case response:
            if (response === "BIS") {
                return (<td className="bis" {...cell.getCellProps()}>{cell.render('Cell')}</td>)
            } else if(response === "Major") {
                return (<td className="major" {...cell.getCellProps()}>{cell.render('Cell')}</td>)
            } else if(response === "Minor") {
                return (<td className="minor" {...cell.getCellProps()}>{cell.render('Cell')}</td>)
            } else {
                return (<td className="greed" {...cell.getCellProps()}>{cell.render('Cell')}</td>)
            }
        // PLAYER, EQUIPMENT SLOT, DATE
        case player:
        case equipLoc:
        case date:
            return (<td className={playerClass} {...cell.getCellProps()}>{cell.render('Cell')}</td>)
        default:
            return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
    }
}