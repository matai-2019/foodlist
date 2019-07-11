const express = require('express')

const db = require('../db/foods')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.put('/:id', (req, res) => {
  const food = req.body
  const id = Number(req.params.id)
  if (id === food.id) {
    db.editFood(food)
      .then(updateFood => res.status(200).json(updateFood))
  } else {
    res.status(500).json('object.id should match request parameter id')
  }
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

module.exports = router
