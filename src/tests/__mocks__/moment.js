// import moment from "moment" -> this will call an error because it refers to mocked function
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp)
}