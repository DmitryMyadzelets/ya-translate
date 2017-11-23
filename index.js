'use strict'

const https = require('https')
const qs = require('querystring')

function request (method, query) {
  query = qs.stringify(query)

  const opt = {
    host: 'translate.yandex.net',
    path: `/api/v1.5/tr.json/${method}?${query}`
  }

  let data = ''

  return new Promise((resolve, reject) => {
    const req = https.get(opt, res => {
      res.setEncoding('utf8')

      res.on('data', chunk => {
        data += chunk
      })

      res.on('end', () => {
        if (res.statusCode !== 200) {
          const e = new Error(res.statusMessage)
          e.statusCode = res.statusCode
          e.data = data
          return reject(e)
        }

        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(e)
        }
      })
    })

    req.on('error', reject)
  })
}

module.exports = key => (data, lang) => {
  if (typeof data !== 'object' || data === null) {
    data = {
      lang: lang || 'en',
      options: 1,
      text: data
    }
  }
  data.key = key

  return request('translate', data)
}
