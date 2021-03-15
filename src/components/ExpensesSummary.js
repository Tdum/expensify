import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total.js'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'


export const ExpensesSummary = (props) => (
    <div>
        Viewing {props.expensesCount} expense{props.expensesCount > 1 && 's'} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpensesSummary)


// reprendre le modèle d'ExpenseList