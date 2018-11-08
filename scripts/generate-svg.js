const spawn = require('child_process').spawn
const mustache = require('mustache')
const fs = require('fs')
const _ = require('lodash')

const TEMPLATE_NAME = './scripts/templates/IoniconSvgTemplate.mustache'
const TEMPLATE_INDEX = './scripts/templates/indexTemplate.mustache'

generateFile = (path, params, outDir, fileName) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      console.log('error:', error)
    } else {
      processTemplate(data, params, outDir, fileName)
    }
  })
}

writeResult = (outDir, result, params, fileName) => {
  fs.writeFile(`${outDir}/${fileName}`, result, error => {
    if (error) {
      console.log('error: ', error)
    }
  })
}

processTemplate = (template, params, outDir, fileName) => {
  const result = mustache.render(template, params)
  fs.access(outDir, fs.constants.F_OK, error => {
    if (error) {
      fs.mkdir(outDir, error => {
        if (error) {
          console.error('error on creating dir:', error)
        } else {
          writeResult(outDir, result, params, fileName)
        }
      })
    } else {
      writeResult(outDir, result, params, fileName)
    }
  })
}

readSvgs = (inDir, outDir) => {
  const components = []
  fs.readdir(inDir, (error, files) => {
    if (!error) {
      _.forEach(files, file => {
        if (_.endsWith(file, '.svg')) {
          let iconName = file.substring(0, file.length - 4)
          let componentName = _.camelCase(iconName)
          componentName = `Ionicon${componentName.charAt(0).toUpperCase()}${
            componentName.length > 1 ? componentName.slice(1, componentName.length) : ''
          }`

          generateFile(TEMPLATE_NAME, { componentName, iconName }, outDir, `${componentName}.js`)
          components.push(componentName)
        }
      })

      generateIndexFile(components, outDir)
    }
  })

  return components
}

generateIndexFile = (components, outDir) => {
  console.log('Generating index.js...')
  generateFile(TEMPLATE_INDEX, { components }, outDir, 'index.js')
}

run = () => {
  console.log('Generating svgs...')

  const inDir = './node_modules/ionicons/dist/ionicons/svg'
  const outDir = './src/generated'
  const components = readSvgs(inDir, outDir)
}

run()
