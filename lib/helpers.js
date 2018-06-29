const fs = require('fs')
const path = require(`path`)
const request = require('request')

const ensureDirectoryExistence = filePath => {
  var dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}

exports.ensureDirectoryExistence = ensureDirectoryExistence

exports.downloadImage = (uri, filename) => {
  return new Promise((resolve, reject) => {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', resolve())
      .on('error', reject())
  })
}

exports.makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })
