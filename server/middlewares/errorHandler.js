const errorHandler = (err, req, res, next) => {
    console.log(err)
    let status = 500
    let message = 'Internal server error'

    if (err.name === 'empty_email') {
        status = 400
        message = 'Email is required'
    } else if (err.name === 'empty_password') {
        status = 400
        message = 'Password is required'
    } else if (err.name === 'invalid_email/password') {
        status = 401
        message = 'Invalid Email or Password'
    } else if (err.name === 'unauthenticated') {
        status = 401
        message = 'Invalid token'
    } else if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        status = 400
        message = err.errors[0].message
    } else if (err.name === 'item_not_found') {
        status = 404
        message = "Item not found"
    } else if (err.name === 'category_not_found') {
        status = 404
        message = "Category not found"
    } else if (err.name === "AggregateError") {
        status = 400
        message = "Ingredient is required"
    }

    res.status(status).json({ message })
}

module.exports = errorHandler