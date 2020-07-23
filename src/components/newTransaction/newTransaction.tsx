import React, { useState, useContext } from 'react'
import { GlobalContext } from './../../services/Globalstate'

import './Newtransaction.css'
export default function Addnewtransaction() {
    let [text, settext] = useState("")
    let [amount, setamount] = useState(0)
    let { rem, addtransactions } = useContext(GlobalContext)


    const submit = e => {
        e.preventDefault()

    }
    const addincomee = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: +amount
    }
    const addexpensee = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: -amount
    }
    const handler = (e) => {
        e.preventDefault();
        if(amount.length > 2){
            rem(addexpensee);
            settext("");
            setamount("")

        }
    }
    const changedhandler = (e) => {
        e.preventDefault();
        if(text.length > 2){
         addtransactions(addincomee); 
         settext("");
         setamount("") 
        }
        
       
    }
    return (
        <div className="header">
            <div>
                <p className="transaction-historyy">Add new transactions</p>
            </div>
            <form onSubmit={submit}>
                <div>
                    <input  className="input"  type="text" value={text} onChange={e => settext(e.target.value)} placeholder="Enter your text here..." minLength={1}/>
                </div>
                <div >
                    <input type="number"   className="input" value={amount} onChange={e => setamount(e.target.value)} placeholder="Enter your Amount here..." minLength={1} />
                </div>
                <div >
                    <div className="btns" >
                        <div><input className="bt g" onSubmit={submit} onClick={changedhandler} type="submit" value="Add income" /></div>
                       <div><input  className="bt r" onClick={handler} type="submit" value="Add expense" /></div>
                    </div>
                 </div>
            </form>
        </div>
    )
}