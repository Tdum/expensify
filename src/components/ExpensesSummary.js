import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getExpensesTotal from '../selectors/expenses-total.js'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'


export const ExpensesSummary = ({ expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link to="/create" className="btn">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpensesSummary)


// reprendre le modèle d'ExpenseList