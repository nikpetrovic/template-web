const spawn = require('child_process').spawn
const mustache = require('mustache')
const fs = require('fs')
const _ = require('lodash')

const TEMPLATE_NAME = './scripts/templates/IoniconSvgTemplate.mustache'

generateFile = (path, params) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      console.log('error:', error)
    } else {
      processTemplate(data, params)
    }
  })
}

writeResult = (outDir, result, params) => {
  fs.writeFile(`${outDir}/${params.componentName}.js`, result, error => {
    if (error) {
      console.log('error: ', error)
    }
  })
}

processTemplate = (template, params) => {
  const outDir = './src/generated'
  const result = mustache.render(template, params)
  fs.access(outDir, fs.constants.F_OK, error => {
    if (error) {
      fs.mkdir(outDir, error => {
        if (error) {
          console.error('error on creating dir:', error)
        } else {
          writeResult(outDir, result, params)
        }
      })
    } else {
      writeResult(outDir, result, params)
    }
  })
}

readSvgs = () => {
  fs.readdir('./node_modules/ionicons/dist/ionicons/svg', (error, files) => {
    if (!error) {
      _.forEach(files, file => {
        if (_.endsWith(file, '.svg')) {
          let iconName = file.substring(0, file.length-4)
          let componentName = _.camelCase(iconName)
          componentName = `Ionicon${componentName.charAt(0).toUpperCase()}${
            componentName.length > 1 ? componentName.slice(1, componentName.length) : ''
          }`

          generateFile(TEMPLATE_NAME, {componentName, iconName})
        }
      })
    }
  })
}

run = () => {
  console.log('generating svg...')
  generateFile(TEMPLATE_NAME, {
    componentName: 'IoniconAlbums',
    iconName: 'ios-albums',
  })
  readSvgs()
}

run()
