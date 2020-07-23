import React, {useContext} from 'react'
import './income.css'
import {GlobalContext} from '../../services/Globalstate'
export default function Income() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map((transaction:any) => transaction.amount);
    const income = amount.filter((item:any) => item > 0 ).reduce((acc:any,item:any) => (acc += item), 0).toFixed(2)
    const expense = amount.filter((item:any) => item < 0).reduce((acc:any,item:any) => (acc -= item), 0).toFixed(2)
    return (
        <div className="income">
            {/* <FlipMove duration={800} easing="ease-in-out"> */}

            <hr />
            <div>
                {/* <p className="inc">Income: <span><span className={income > 0 ? 'greens':null}>$+</span><Countup start={0} end={income} duration={2.75} /></span></p> */}
            </div>
            <hr />
            <div>
                {/* <p className="exp">Expense: <span ><span className="reds">$-</span><Countup start={0} end={expense} duration={2.75} /></span></p> */}
                </div>
            {/* </FlipMove> */}
        </div>
    )
}