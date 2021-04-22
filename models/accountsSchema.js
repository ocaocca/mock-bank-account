const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema({
  name: String,
  currency: String,
  balance: String,
  lastTransactionDate: String()
})
const accountModel = mongoose.model('accounts', accountSchema)

module.exports = accountModel
