
import React, { useState } from 'react';

export const AddItem = (props) => {
    const [itemname, setItemname] = useState("");
    const [price, setPrice] = useState("");
    const submit =(a)=>{
        a.preventDefault();
        if(!itemname || !price){
            alert("itemname or Price cannot be blank")
        }
        props.addItem(itemname,price);
    }
    return (
        <>
        <div className="container">
            <h3>Add Items to Store</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="itemname" className="form-label">Item Name</label>
                <input type="text" value={itemname} onChange= {(a)=>{setItemname(a.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">Name of the Item to be Added to the Store</div>
        </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" value={price} onChange= {(a)=>{setPrice(a.target.value)}} className="form-control" id="exampleInputPassword1"/>
        </div>
                        <button type="submit" className="btn btn-sm btn-success">Submit</button>
      </form>
      </div>
      </>
    )
}
