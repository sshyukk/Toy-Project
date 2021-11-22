import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card.js"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                {props.item.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div> 
    )
}

export default Expenses
