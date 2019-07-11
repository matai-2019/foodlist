const express = require('express')

const db = require('../db/foods')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.put('/:id', (req, res) => {
  const food = req.body
  db.editFood(food)
    .then(updateFood => res.status(200).json(updateFood))
})
module.exports = router
