import React from 'react'

const Sort = ({ onSort, isSorted }) => {
  return (
    <>
      <button onClick={onSort} style={{cursor: 'pointer'}}>{isSorted ? "Default Sort" : "Sort A-Z"}</button>
    </>
  )
}

export default Sort
