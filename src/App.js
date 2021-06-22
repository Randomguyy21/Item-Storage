
import './App.css';
import Header from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Items} from "./Components/Items";
import {Store} from "./Components/Store";
import {AddItem} from "./Components/AddItem"
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
    let initItem;
    if(localStorage.getItem("store")===null){
      initItem=[];
    }
    else
    {
      initItem=JSON.parse(localStorage.getItem("store"));
    }
  
  const  onDelete= (item)=>{
    console.log("Delete",item);
    setStore(store.filter((a)=>{
      return a!==item;
    }));
    localStorage.setItem("store", JSON.stringify(store));
  }
  const addItem = (itemname,price)=>{
    console.log("I am adding this", itemname, price);
    let sno;
    if(store.length==0)
    {sno=1;}
    else{
     sno=store[store.length-1].sno +1;}
    const myItem={
      sno: sno,
      itemname: itemname,
      price: price
    }
    setStore([...store, myItem]);
    console.log(myItem);
  }
  const [store, setStore] = useState( [initItem]);
  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, [store])
  
  return (
    <>
    <Router>
    <Header title="My App"/>
    <Switch>
          <Route exact path="/" render={()=>{
            return (
            <>
               <Store store={store} onDelete={onDelete}/>
               <AddItem addItem={addItem}/>
               </>)
          }}>
          </Route>
        </Switch>
 
    <Footer/>
    </Router>
    </>
  );
}

export default App;
