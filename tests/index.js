'use strict'

const yat = require('..')
const key = 'trnsl.1.1.20171122T140415Z.cc6d3a200a337f58.ef2328c35087935bdef9e2ef86574c9602d9faeb'

yat(key)('Привет из Простоквашино')
  .then(console.log)
  .catch(console.error)
