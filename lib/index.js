import fs from 'fs'
import path from 'path'

export default class NoLimit {
  constructor (config) {
    this.path = config.anchor
    fs.writeFileSync(this.path, JSON.stringify({}))
  }

  get () {
    fs.readFileSync(this.path)
  }
}
