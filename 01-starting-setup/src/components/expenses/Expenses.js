import React, { useState } from "react"
import "./Expenses.css"
import Card from "../UI/Card.js"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onChangeFilter={filterChangeHandler} 
                    selected={filteredYear} 
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div> 
    )
}

export default Expenses
