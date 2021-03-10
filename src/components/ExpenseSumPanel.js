import getExpensesTotal from '../../selectors/expenses-total.js'
import expenses from '../tests/fixtures/expenses'

const total = getExpensesTotal(expenses)
console.log(total)