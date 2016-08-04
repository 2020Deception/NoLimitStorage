# nolimit

[![npm](http://img.shields.io/npm/v/nolimit.svg?style=flat)](https://badge.fury.io/js/nolimit) [![tests](http://img.shields.io/travis/carrot/nolimit/master.svg?style=flat)](https://travis-ci.org/carrot/nolimit) [![dependencies](http://img.shields.io/gemnasium/carrot/nolimit.svg?style=flat)](https://gemnasium.com/carrot/nolimit)

no limit to this json storage life

> **Note:** This project is in early development, and versioning is a little different. [Read this](http://markup.im/#q4_cRZ1Q) for more details.

### Why should you care?

Simple JSON storage that is compatible with the now server, and most bot servers. It's just as bad as json-storage-kit
so this project makes things all good.

### Installation

`npm install nolimit`

### Usage

Import the library and use it.

```js
var NoLimit = require('nolimit')

var nolimit = new NoLimit({ filename: 'nolimit.json' })

nolimit.stash({ key: 'key', value: 'value' })
var object = nolimit.fetch({ key: 'key' })
console.log(object)
```

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)
