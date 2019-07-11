const express = require('express')

const db = require('../db/foods')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.post('/', (req, res) => {
  const foods = req.body
  db.addFood(foods)
    .then(id => res.status(201).send(id[0]))
})

module.exports = router
