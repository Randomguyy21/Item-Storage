import React from 'react'

export const Items = ({item, onDelete}) => {
    return (
        <div>
            <h4>{item.itemname}</h4>
            <h4>{item.price}</h4>
            <button className="btn btn-danger" onClick={()=>{onDelete(item)}}>Delete</button>
        </div>
    )
}
