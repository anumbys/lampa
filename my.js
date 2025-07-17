(function() {
  'use strict';



// Добовляем плагины, но без возможности отключить (в плагинах отображаться не будет)
// ,"https://apxubatop.github.io/lmpPlugs/tvbutton.js"
// Удалить все плагины которые установлены в памяти устройства. Применять только когда лампа и плагин на одном сервере
// Scrypt error
// Lampa.Storage.set('plugins', '["https://bylampa.github.io/tmdb-proxy.js"]')
Lampa.Utils.putScriptAsync(["https://cub.red/plugin/tracks","https://bylampa.github.io/account.js","https://bylampa.github.io/source.js","https://bylampa.github.io/backmenu.js","https://bylampa.github.io/seas_and_eps.js","https://aviamovie.github.io/surs.js","https://levende.github.io/lampa-plugins/custom-favs.js","https://levende.github.io/lampa-plugins/lampac-src-filter.js","https://anumbys.github.io/lampa/notextend.js","https://BDVBurik.github.io/rezkacomment.js","http://bwa.to/rc/889yfnh","https://bwa.to/r"]);




    // Добовляем плагины по умолчанию, чтобы руками не вписывать.
var plugins = Lampa.Plugins.get();

var plugins_add = [
//{"url": "https://anumbys.github.io/lampa/profiles.js","status": 0,"name": "Профили","author": "lampac"},
{"url": "https://apxubatop.github.io/lmpPlugs/tvbutton.js","status": 1,"name": "tvbutton","author": "lampac"},
{"url": "https://kartmansms.github.io/lampa/Shikimori/Shikimori.js","status": 0,"name": "LME Shikimori Mod","author": "lampac"},
{"url": "https://lampame.github.io/main/MovieEnhancer/MovieEnhancer.js","status": 0,"name": "Доп. инфо в карточке","author": "lampac"},
{"url": "https://lampame.github.io/main/nc/nc.js","status": 0,"name": "Дополнительные категории","author": "lampac"}
//{"url": "https://lampame.github.io/main/pubtorr/pubtorr.js","status": 0,"name": "Публичные парсеры","author": "lampac"}
];

var plugins_push = []

plugins_add.forEach(function (plugin) {
    if (!plugins.find(function (a) {
        return a.url == plugin.url
    })) {
        Lampa.Plugins.add(plugin);
        Lampa.Plugins.save();

        plugins_push.push(plugin.url)
    }
});

if (plugins_push.length) Lampa.Utils.putScript(plugins_push, function () { }, function () { }, function () { }, true);
    // Добовляем плагины по умолчанию, чтобы руками не вписывать. END






//function start() {

//    if (window.lampainit_invc)
//      window.lampainit_invc.first_initiale();
//}

})();
