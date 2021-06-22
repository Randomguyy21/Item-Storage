import React from 'react'
import { Items } from "./Items"

export const Store = (props) => {
    return (
        <div className="container">
            <h3 className="my-4">STORE</h3>
            {props.store.length===0? "No Items left" :
                    props.store.map((item) => {
                        return (
                            <>
                        <Items item={item} key={item.sno} onDelete={props.onDelete} />
                        <hr/>
                        </>
                        )
                    })
                }
                <br></br> <br></br>
        </div>
    )
}
