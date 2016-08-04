const fs = require('fs')

module.exports = class NoLimit {

  constructor (config) {
    this.filename = config.filename
    this.writeTheStatement({})
  }

  writeTheStatement (file) {
    fs.writeFileSync(this.filename, JSON.stringify(file, null, 2))
  }

  readTheStatement () {
    return JSON.parse(fs.readFileSync(this.filename, 'utf8'))
  }

  stash ({ key, value }) {
    var evidence = this.readTheStatement()
    evidence[key] = value
    this.writeTheStatement(evidence)
  }

  fetch ({key}) {
    return this.readTheStatement()[key]
  }
}
