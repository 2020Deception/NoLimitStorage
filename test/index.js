const test = require('ava')
const fs = require('fs')
const path = require('path')
const NoLimit = require('..')

const foo = path.join(__dirname, '/test.json')

test.cb('example sets up correctly', (t) => {
  try { fs.unlinkSync(foo) } catch (err) { console.log(err) }
  new NoLimit({ filename: foo }) // eslint-disable-line
  fs.access(foo, fs.R_OK | fs.W_OK, (err) => {
    if (err) t.end(err, 'Why tis there an error??.')
    const content = fs.readFileSync(foo, 'utf8')
    t.is(content, '{}', 'why is there an error?? ')
    t.end()
  })
})

test('example saves up correctly', (t) => {
  const limit = new NoLimit({ filename: foo })
  limit.stash({ key: 'key', value: 20 })
  const result = JSON.parse(fs.readFileSync(foo, 'utf8'))
  t.truthy(result['key'] === 20)
})

test('example gets correctly', (t) => {
  const limit = new NoLimit({ filename: foo })
  limit.stash({ key: 'key', value: 20 })
  t.truthy(limit.fetch({ key: 'key' }) === 20)
})
