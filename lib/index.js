import fs from 'fs'
import path from 'path'

export default class NoLimit {

  constructor (config) {
    this.filename = config.filename
    this.writeTheStatement({})
  }

  writeTheStatement (file) {
    fs.writeFileSync(this.filename, JSON.stringify(file))
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
