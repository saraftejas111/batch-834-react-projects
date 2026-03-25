import React from 'react'

const ChildComp = ({sendMsg}) => {

    let msg = "Hello from Child Component"

    sendMsg(msg)

    return (
        <div>
           
        </div>
    )
}

export default ChildComp
