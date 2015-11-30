module.exports = function(languages, supported_languages, defaultLang) {
  if(!defaultLang) {
    throw new Error('Missing default language. Please see the docs for more info.');
    return;
  }
  if(supported_languages instanceof Array === false) {
    throw new Error('supported_languages must be an array type. Please see the docs for more info.');
    return;
  }
  if(languages instanceof Array === false) {
    throw new Error('languages must be an array type. Please see the docs for more info.');
    return;
  }
  var i, lq;
  var lower = supported_languages.map(function(l) { return l.toLowerCase(); });
  for (i=0; i < languages.length; i++) {
    lq = languages[i];
    if (lower.indexOf(lq.toLowerCase()) !== -1) {
      return lq;
    } else if (lower.indexOf(lq.split('-')[0].toLowerCase()) !== -1) {
      return lq.split('-')[0];
    }
  }
  return defaultLang;
}
