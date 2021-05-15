const glob = require('glob-promise')
const findInFiles = require('find-in-files')

const getModuleDiagramData = async () => {
  const files = await glob('./Zeeguu-API/**/*.py', {})
  files.sort() // sort files alphabetically
  const modules = extractModules(files)
  const dependencies = await extractDependencies(files, modules)
  return { modules, dependencies }
}

const extractModules = files => {
  const modules = []
  files.forEach(fileName => {
    let moduleName = extractModuleFromFileName(fileName)
    if (moduleName) modules.push(moduleName)
  })
  return [...new Set(modules)]
}

const extractDependencies = async (files, modules) => {
  let dependenciesMap = []

  const allDependencies = await findInFiles.find(
    'import',
    './Zeeguu-API',
    '.py$'
  )
  for (var result in allDependencies) {
    var match = allDependencies[result]
    moduleName = extractModuleFromFileName(result)
    if (moduleName && modules.includes(moduleName)) {
      match.line.forEach(line => {
        modules.forEach(module => {
          if (line.includes(module) && moduleName !== module)
            addDependency(dependenciesMap, moduleName, module)
        })
      })
    }
  }
  // console.log(dependenciesMap)
  return dependenciesMap
}

const extractModuleFromFileName = fileName => {
  let module = fileName.split('/')
  let index = 1
  if (module[0] === '.') index = 2
  if (module.length > index + 1 && module[index + 1].includes('zeegu'))
    return module[index + 1]
  if (module[index] && !module[index].includes('.py')) return module[index]
  return null
}

const addDependency = (dependencies, from, to, count) => {
  // console.log(`Addind dependency: FROM: ${from} TO: ${to} `)
  // if depencency already exists, just increase count
  let found = dependencies.find(
    dependency => dependency['from'] === from && dependency['to'] === to
  )
  if (found) return found['text']++
  // create dependency
  dependencies.push({
    from,
    to,
    text: 1,
  })
}

module.exports = {
  getModuleDiagramData,
}
