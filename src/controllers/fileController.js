const glob = require('glob-promise')

const getModuleDiagramData = async () => {
  const files = await glob('./Zeeguu-API/**/*.py', {})
  // console.log(files)
  const modules = extractModules(files)
  return modules
}

const extractModules = files => {
  const modules = []
  files.forEach(file => {
    let module = file.split('/')
    if (module[2] && !module[2].includes('.py')) modules.push(module[2])
  })

  return [...new Set(modules)]
}

module.exports = {
  getModuleDiagramData,
}
