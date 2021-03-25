import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total.js'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'


export const ExpensesSummary = ({ expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
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