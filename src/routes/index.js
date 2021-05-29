const express = require('express')
const router = express.Router()
const fileController = require('../controllers/fileController')
const repoController = require('../controllers/repoController')

router.get('/', async (req, res) => {
  res.render('home')
})

router.post('/generateModuleDiagram', async (req, res) => {
  const { projectUrl } = req.body
  const projectName = await repoController.cloneProject(projectUrl)
  const diagramData = await fileController.getModuleDiagramData(projectName)
  await repoController.deleteProject(projectName)
  res.render('index', {
    data: JSON.stringify(diagramData),
  })
})

module.exports = router
