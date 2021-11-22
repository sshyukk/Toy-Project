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
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    let expensesContent = <p>No expenses found.</p>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                {/* [1] 조건부 렌더링 - 3항 연산자 */}
                {/* { filteredExpenses.length === 0 ? (
                    <p>No expenses found.</p>
                ) : (
                    filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
                )} */}
                {/* [2] 조건부 렌더링 - && 연산자 */}
                {/* { filteredExpenses.length === 0 && <p>No expenses found.</p> }
                { filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) } */}
                {/* [3] 조건부 렌더링 - 권장 */}
                {expensesContent}
            </Card>
        </div> 
    )
}

export default Expenses
