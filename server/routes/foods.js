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
    .then(id => {
      const idObj = { id: id[0] }
      return res.status(201).json(idObj)
    })
})

module.exports = router
