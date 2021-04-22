const bodyParser = require('body-parser')
const accountModel = require('./../models/accountsSchema')
const transactionModel = require('./../models/transactionSchema')

module.exports = {
  insertNewAccounts: async (req, res) => {
    try {
      const payload = req.body
      const data = {
        name: payload.name,
        currency: payload.currency,
        balance: payload.balance,
        updatedAt: Date.now()
      }
      const newAccount = await accountModel.create(data)
      return res.status(200).send({ newAccount })
    } catch (e) {
      console.log(e)
      return res.status(500).send(e)
    }
  },
  insertNewTransaction: async (req, res) => {
    try {
      const accountId = req.params.accountId
      const payload = req.body
      const data = {
        valueDate: Date.now(),
        currency: payload.currency,
        debit: payload.debit,
        kredit: payload.kredit,
        balance: payload.balance,
        updatedAt: Date.now()
      }
      const newTransaction = await transactionModel.create(data)
      return res.status(200).send({ newTransaction })
    } catch (e) {
      console.log(e)
      return res.status(500).send(e)
    }
  },
  getAllAccounts: async (req, res) => {
    try {
      const result = await accountModel.findAll()
      return res.status(200).send({ result })
    } catch (e) {
      console.log(e)
      return res.status(500).send(e)
    }
  },
  getAccountDetails: async (req, res) => {
    try {
      const accountId = req.params.accountId
      let balance = await accountModel.findById({ _id: accountId }, { balance: balance })
      const credit = await transactionModel.findOne({ _id: accountId }, { credit: credit })
      const debit = await transactionModel.findOne({ _id: accountId }, { debit: debit })
      balance = balance - credit + debit
      await accountModel.findOneAndUpdate({ _id: accountId }, { balance: balance })
      return res.status(200).send({ balance: balance, credit: credit, debit: debit })
    } catch (e) {
      console.log(e)
      return res.status(500).send(e)
    }
  }
}
