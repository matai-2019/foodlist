const express = require('express')

const db = require('../db/foods')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getFood(id)
    .then(food => {
      res.status(200).json(food)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
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
