import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import "../css/Table.css"

export const GlobalFilter = ({ filter, setFilter }) => {

  const [value, setValue] = useState(filter)

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 300)

  return (
    <div className='search-container'>
        <input 
          className='search-input' 
          value={value || ''} 
          onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
          }} 
          placeholder='Search...' 
        />
    </div>
  )
}
