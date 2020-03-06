import React from 'react'
import { Link } from 'react-router-dom'


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount} - {createdAt}</p>
  </div>
)
// connect to state so that you can have access to dispatch. We don't need anything from the state so not passing callback functiob to connect
export default ExpenseListItem