(function() {
  'use strict';

  window.lampa_settings = {
    torrents_use: true,    // кнопка торренты включена
    demo: false,           // demo off
    read_only: false,      // demo off
    socket_use: false,     // cub
    account_use: true,     // сохраним ради расширенных закладок
    account_sync: false,   // cub синхронизация
    plugins_store: false,  // cub магазин
    feed: false,           // cub лента
    white_use: false,      // cub
    push_state: false,     // адрес в url /?card=1241982&media=movie
    lang_use: false,        // выбор языка в настройках
    plugins_use: true      // настройки, расширения
  }

  window.lampa_settings.disable_features = {
    dmca: true,          // шлет нахер правообладателей - on
    reactions: false,    // cub реакции - on
    discuss: false,      // cub комментарии - on
    ai: true,            // cub AI-поиск - off
    install_proxy: true, // cub tmdb proxy - off
    subscribe: true,     // cub подписки - off
    blacklist: true,     // off
    persons: true        // off
  }

window.lampainit_invc = {};

// Лампа готова для использования
window.lampainit_invc.appload = function appload() {
// Добовляем плагины, но без возможности отключить (в плагинах отображаться не будет)
// ,"https://apxubatop.github.io/lmpPlugs/tvbutton.js"
// Удалить все плагины которые установлены в памяти устройства. Применять только когда лампа и плагин на одном сервере
// Scrypt error
// Lampa.Storage.set('plugins', '["https://bylampa.github.io/tmdb-proxy.js"]')
Lampa.Utils.putScriptAsync(["https://cub.red/plugin/tracks","https://bylampa.github.io/account.js","https://bylampa.github.io/source.js","https://bylampa.github.io/backmenu.js","https://bylampa.github.io/seas_and_eps.js","https://aviamovie.github.io/surs.js","https://levende.github.io/lampa-plugins/custom-favs.js","https://levende.github.io/lampa-plugins/lampac-src-filter.js","https://BDVBurik.github.io/rezkacomment.js","http://bwa.to/rc/889yfnh","https://bwa.to/r","https://anumbys.github.io/lampa/notextend.js"]);

// Постояные настроики, после изминений и перезагрузке настроики перключаются обратно на эти первоначалные
// Добовляем плагины по умолчанию, чтобы руками не вписывать.
var plugins = Lampa.Plugins.get();

var plugins_add = [
{"url": "https://kartmansms.github.io/lampa/Shikimori/Shikimori.js","status": 0,"name": "LME Shikimori Mod","author": "lampac"},
{"url": "https://lampame.github.io/main/MovieEnhancer/MovieEnhancer.js","status": 0,"name": "Доп. инфо в карточке","author": "lampac"},
{"url": "https://lampame.github.io/main/nc/nc.js","status": 0,"name": "Дополнительные категории","author": "lampac"}
//{"url": "https://anumbys.github.io/lampa/profiles.js","status": 0,"name": "Профили","author": "lampac"},
//{"url": "https://apxubatop.github.io/lmpPlugs/tvbutton.js","status": 1,"name": "tvbutton","author": "lampac"},
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


}

// Скрыть меню в настройках - Синхронизация, Парсер (, 'parser'), TorrServer (, 'server'), IPTV, Расширения, TMDB
    Lampa.Settings.listener.follow('open', function(e) {
      $(['account', 'parser', 'iptv', 'tmdb', 'parental_control'].map(function(c) {
        return '[data-component="' + c + '"]';
      }).join(','), e.body).remove();
    });



// убрать с интерфейса колокольчик и звёздочку
var styleElement = document.createElement('style');
    styleElement.innerHTML = '.head .notice--icon { display: none; }';
    document.body.appendChild(styleElement);

  var timer = setInterval(function() {
    if (typeof Lampa !== 'undefined') {
      clearInterval(timer);

      if (window.lampainit_invc)
        window.lampainit_invc.appload();

      if (false)
        Lampa.Storage.set('full_btn_priority', '966825172');

      var unic_id = Lampa.Storage.get('lampac_unic_id', '');
      if (!unic_id) {
        unic_id = Lampa.Utils.uid(8).toLowerCase();
        Lampa.Storage.set('lampac_unic_id', unic_id);
      }


    }
  }, 200);

// не работает
//function start() {

//    if (window.lampainit_invc)
//      window.lampainit_invc.first_initiale();
//}

})();
