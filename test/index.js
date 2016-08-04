import test from 'ava'
import fs from 'fs'
import NoLimit from '..'

const testAppendix = __dirname+"/test.json"

test.cb('example exports correctly', (t) => {
  var limit = new NoLimit({
    anchor:testAppendix
  })
  fs.access(testAppendix, fs.R_OK | fs.W_OK, (err) => {
    t.falsy(err, 'why the fuck is there an error??')

    var content = fs.readFileSync(testAppendix, 'utf8')
    t.is(content, "{}", 'why the fuck is there an error??')
    t.end()
  })
})
