import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (update) => {
        this.props.startEditExpense(this.props.expense.id, update)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">                
                    <ExpenseForm
                        expense={ this.props.expense }
                        onSubmit={ this.onSubmit }
                    />
                    <button 
                        className="btn btn--secondary"
                        onClick={ this.onRemove }>
                        Remove Expense
                    </button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, update) => dispatch(startEditExpense(id, update)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)