const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const Schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, Schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'you must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `the password provided failed to match the following rules:
              <br>
              1. must contain ONLY the following characters: lower case,upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greaters than 32 characters i length.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
