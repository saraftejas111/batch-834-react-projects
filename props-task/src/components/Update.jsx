import React from 'react'

const Update = ({updateClick}) => {
  return (
    <div>
       <button onClick={()=> updateClick(false)}>Update Employee</button>
    </div>
  )
}

export default Update
