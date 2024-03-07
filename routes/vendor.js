const express = require('express')
const vendorController = require('../controllers/vendor.controller')
const router = express.Router()

router.get('/:companyAccount', vendorController.getAll)
router.post('/', vendorController.create)
router.put('/', vendorController.updateVendor)
router.delete('/:_id', vendorController.deleteItem)

module.exports = router