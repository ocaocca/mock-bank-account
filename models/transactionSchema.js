const mongoose = require('mongoose')
const { Schema } = mongoose

const transactionSchema = new Schema({
  valueDate: String,
  currency: String,
  debit: Number,
  kredit: Number,
  transactionNarative: String
})
const transactionModel = mongoose.model('transaction', transactionSchema)

module.exports = transactionModel
