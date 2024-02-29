const express = require('express')
const inventoryController = require('../controllers/inventory.controller')
const router = express.Router()

router.get('/:companyAccount', inventoryController.getAll)
router.post('/', inventoryController.create)
router.put('/', inventoryController.updateInventory)
router.delete('/:_id', inventoryController.deleteItem)

module.exports = router