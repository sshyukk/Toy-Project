import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {
    // [1] state를 개별로 관리하기.
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // [2] state를 하나로 관리하기.
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        console.log(expenseData)
        
    }

    const titleChangeHandler = (event) => {
        // [1] state를 개별로 관리하기.
        setEnteredTitle(event.target.value)
        console.log(enteredTitle)
        // [2] state를 하나로 관리하기.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // console.log(userInput)
        // [3] state를 하나로 관리하기. 함수를 매개변수로 사용.
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
        // console.log(userInput)
    }
    const amountChangeHandler = (event) => {
        // [1] state를 개별로 관리하기.
        setEnteredAmount(event.target.value)
        console.log(enteredAmount)
        // [2] state를 하나로 관리하기.
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // console.log(userInput)
        // [3] state를 하나로 관리하기. 함수를 매개변수로 사용.
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // })
        // console.log(userInput)
    }
    const dateChangeHandler = (event) => {
        // [1] state를 개별로 관리하기.
        setEnteredDate(event.target.value)
        console.log(enteredDate)

        // [2] state를 하나로 관리하기.
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // console.log(userInput)
        // [3] state를 하나로 관리하기. 함수를 매개변수로 사용.
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })
        // console.log(userInput)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
