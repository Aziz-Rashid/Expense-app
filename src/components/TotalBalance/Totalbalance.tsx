 
import React, {useContext} from 'react'
import {GlobalContext} from '../../services/Globalstate'
import './Totalbalance.css'
export default function Totalbalance() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map((transaction:any) => transaction.amount);
    const total = amount.reduce((acc:any, item:any) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <div className="total">
                <p className="balance">Balance:</p>
                <p className={total > 0 ? 'balance-total':'balance-total2' }><span>$</span>{total}</p>
            </div>
        </div>
    )
}