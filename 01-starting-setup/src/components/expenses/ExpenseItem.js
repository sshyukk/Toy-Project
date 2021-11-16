import React from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js"
import Card from "../UI/Card.js"

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('Click!!!')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>click</button>
        </Card>
    )
}
export default ExpenseItem
