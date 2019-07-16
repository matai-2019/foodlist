const express = require('express')

const db = require('../db/category')

const router = express.Router()

router.get('/:categoryName', (req, res) => {
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

router.get('/', (req, res) => {
  db.getCategories()
    .then(categories => {
      res.status(200).json(categories)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
