const router = require('express').Router()
const accountsControllers = require('../controllers/accountsController')

router.post('/newAccounts', accountsControllers.insertNewAccounts)
router.post('/newTransaction', accountsControllers.insertNewTransaction)
router.get('/getAllAccounts', accountsControllers.getAllAccounts)
router.get('/getAccountDetails/:accountId', accountsControllers.getAccountDetails)

module.exports = router
