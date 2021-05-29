const shell = require('shelljs')

const cloneProject = async url => {
  shell.cd(appRoot)
  shell.exec(`git clone ${url}`)
  const projectName = url.split('/')
  return projectName[projectName.length - 1]
}

const deleteProject = async projectName => {
  shell.cd(appRoot)
  shell.exec(`rm -rf ${projectName}`)
}

module.exports = {
  cloneProject,
  deleteProject,
}
