import React from 'react'

const Add = ({addClick}) => {

    
  return (
    <div>
      <button onClick={()=> addClick(true)}>Add Employee</button>
    </div>
  )
}

export default Add
