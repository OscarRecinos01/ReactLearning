import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import "./Expenses.css"
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'

function Expenses(props) {
    const[filteredYear, setFilteredYear] = useState("2020")



    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear = {filteredYear} onFilterChanged ={filterChangeHandler} />
            <ExpenseItem title={props.item[0].title} price={props.item[0].price} date={props.item[0].date} />
            <ExpenseItem title={props.item[1].title} price={props.item[1].price} date={props.item[1].date} />
            <ExpenseItem title={props.item[2].title} price={props.item[2].price} date={props.item[2].date} />
        </Card>
    )
}

export default Expenses