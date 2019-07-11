const express = require('express')

const db = require('../db/foods')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.post('/', (req, res) => {
  const foods = req.body
  console.log('api', foods)
  db.addFood(foods)
    .then(id => res.status(201).send(foods))
})

module.exports = router
