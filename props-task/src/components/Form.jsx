import React from 'react'

const Form = ({perform}) => {
  return (
    <div>
      
      <h1>{perform ? "Add Employee" : "Update Employee"}</h1>

      <center>
        <form >

           name : <input type="text" /> <br /><br />
           role : <input type="text" /> <br /><br />
           salary : <input type="text" /> <br /><br />

           <button>{perform ? "Add Employee" : "Update Employee"}</button>
        </form>
      </center>
    </div>
  )
}

export default Form
