const express = require('express')
const inventoryController = require('../controllers/inventory.controller')
const router = express.Router()

router.get('/', inventoryController.getAll)
router.post('/', inventoryController.create)
router.put('/:_id', inventoryController.updateInventory)
router.delete('/:_id', inventoryController.deleteItem)

module.exports = router