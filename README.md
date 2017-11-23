# ya-translate

Node.js module for [Yandex Translate API's](https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/) [`translate` method](https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/).


```bash
npm install ya-translate --save
```

Get [your own API key](https://translate.yandex.com/developers/keys) first.

## How to use

```javascript
  const translate = require('ya-translate')(YOUR-API-KEY)


  // Translates to English by default

  translate('Parli italiano?')
    .then(console.log)
    .catch(console.error)

    // { code: 200,
    //   detected: { lang: 'it' },
    //   lang: 'it-en',
    //   text: [ 'Do you speak Italian?' ] }


  // Translates to a language of your choice
  // (yes, the translation might be wrong)

  translate('Parli italiano?', 'de')
    .then(console.log)
    .catch(console.error)

    // { code: 200,
    //   detected: { lang: 'it' },
    //   lang: 'it-de',
    //   text: [ 'Sprechen sie deutsch?' ] }


  // Can use an object as in the Yandex.Translate API

  translate({lang: 'ru', text: 'You can pass an object (see the Yandex.Translate docs)'})

    // { code: 200,
    // lang: 'en-ru',
    // text: [ 'Вы можете передать объект (см. Яндекс.Перевод документов)' ] }


  // Can translate many texts at once

  translate(({lang: 'zh-en', text: ['\u5F00\u6E90', '\u8F6F\u4EF6']})
    .then(console.log)
    .catch(console.error)
  // { code: 200, lang: 'zh-en', text: [ 'Open source', 'Software' ] }

```

## Thanks

To [nkt](https://github.com/nkt) and his nicely written [`yandex.translate`](https://github.com/nkt/yandex.translate).

## Links

* Your keys: https://translate.yandex.com/developers/keys
* Your statistics: https://translate.yandex.com/developers/stat
* Docs: https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/
