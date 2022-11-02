import React from 'react'
import "../css/Table.css"

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className='search-container'>
        <input className='search-input' value={filter || ''} onChange={(e) => setFilter(e.target.value)} placeholder='Search...' />
    </div>
  )
}
