const express = require('express')
const router = express.Router()
const fileController = require('../controllers/fileController')

// Follows HTTP verbs
router.get('/', async (req, res) => {
  const diagramData = await fileController.getModuleDiagramData()

  // res.sendFile('index.html', { root: './src/views' })
  res.render('index', {
    email: 'this is a passed variable',
    data: JSON.stringify(diagramData),
  })
})

module.exports = router
