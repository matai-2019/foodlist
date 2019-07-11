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

router.get('/category/:categoryName', (req, res) => {
  let category = req.params.categoryName
  category = category[0].toUpperCase() + category.slice(1)
  db.getFoodsByCategory(category)
    .then(category => {
      res.status(200).json(category)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
