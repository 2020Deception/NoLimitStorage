import test from 'ava'
import fs from 'fs'
import NoLimit from '..'

const foo = __dirname+"/test.json"

test.cb('example sets up correctly', (t) => {
  try { fs.unlinkSync(foo) } catch (err) { console.log(err) }
  var limit = new NoLimit({ filename: foo })
  fs.access(foo, fs.R_OK | fs.W_OK, (err) => {
    if (err) t.end(err, 'Why the fuck is there an error?? Some silly shit happened to the fizzile.')
    var content = fs.readFileSync(foo, 'utf8')
    t.is(content, "{}", 'why the fuck is there an error?? Some silly shit happened trying to read this dumb ass shit.')
    t.end()
  })
})

test ('example saves up correctly', (t) => {
  var limit = new NoLimit({ filename: foo })
  limit.stash({ key: 'key', value: 20 })
  var result = fs.readFileSync(foo, 'utf8')
  result = JSON.parse(result)
  t.truthy(result['key'] === 20)
})

test ('example gets correctly', (t) => {
  var limit = new NoLimit({ filename: foo })
  limit.stash({ key: 'key', value: 20 })
  var value = limit.fetch({ key: 'key' })
  t.truthy(value === 20)
})
