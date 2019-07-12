const express = require('express')

const db = require('../db/foods')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.put('/:id', (req, res) => {
  const food = req.body
  food.id = Number(req.params.id)
  db.editFood(food)
    .then(updatedFood => res.status(200).json(updatedFood))
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

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteFood(id)
    .then(successful => {
      successful
        ? res.status(200).json({ Okay: true })
        : res.status(500).json({ Okay: false })
    })
})

module.exports = router
