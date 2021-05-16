const express = require('express')
const router = express.Router()
const fileController = require('../controllers/fileController')

router.get('/', async (req, res) => {
  const diagramData = await fileController.getModuleDiagramData()
  res.render('index', {
    data: JSON.stringify(diagramData),
  })
})

module.exports = router
