import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link className="list-item" to={`/edit/${id}`}>

        <div>
          <h3 className="list-item__title">{description}</h3>
          <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
  </div>
)
// connect to state so that you can have access to dispatch. We don't need anything from the state so not passing callback functiob to connect
export default ExpenseListItem