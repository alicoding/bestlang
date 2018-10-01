# best-lang

Simple parser for parsing language code based on the Accept-Language array of language objects sorted by quality.


### Installation
```
npm install bestlang
```

### Usage

This is a very simple parser that will look for the supported language then for the locale with no region then default to the language passed.

```
bestLang(arrayOfLanguages, supportedLanguages, defaultLanguage);
```

### Example

```js
var bestLang = require('bestlang');
bestLang(['fr', 'en-CA', 'fr-CA'], ['en', 'en-IN', 'en-CA', 'id', 'de'], 'en-US')
```

The above will return `en-CA`.


Please file an issue if you find a bug and I will be happy to fix them or PR always accepted :)
