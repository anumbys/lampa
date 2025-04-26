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

window.lampainit_invc.appload = function appload() {
// Удалить все плагины которые установлены в памяти устройства. Применять только когда лампа и плагин на одном сервере
// Lampa.Storage.set('plugins', '["https://bylampa.github.io/tmdb-proxy.js"]')
// Добовляем плагины, но без возможности отключить (в плагинах отображаться не будет)

    // Добовляем плагины по умолчанию, чтобы руками не вписывать.
var plugins = Lampa.Plugins.get();

var plugins_add = [
{"url": "http://bwa.to/rc/889yfnh","status": 1,"name": "BwaRC Онлайн","author": "lampac"},
{"url": "https://bwa.to/r","status": 1,"name": "Radio Record","author": "lampac"},
{"url": "https://anumbys.github.io/lampa/profiles.js","status": 0,"name": "Профили","author": "lampac"},
{"url": "https://kartmansms.github.io/lampa/Shikimori/Shikimori.js","status": 0,"name": "LME Shikimori Mod","author": "lampac"},
{"url": "https://lampame.github.io/main/MovieEnhancer/MovieEnhancer.js","status": 0,"name": "Доп. инфо в карточке","author": "lampac"},
{"url": "https://lampame.github.io/main/nc/nc.js","status": 0,"name": "Дополнительные категории","author": "lampac"},
{"url": "https://cub.red/plugin/tracks","status": 1},
{"url": "https://bylampa.github.io/account.js","status": 1},
{"url": "https://bylampa.github.io/source.js","status": 1},
{"url": "https://bylampa.github.io/backmenu.js","status": 1},
{"url": "https://bylampa.github.io/seas_and_eps.js","status": 1},
{"url": "https://aviamovie.github.io/surs.js","status": 1},
{"url": "https://levende.github.io/lampa-plugins/custom-favs.js","status": 1},
{"url": "https://levende.github.io/lampa-plugins/lampac-src-filter.js","status": 1},
{"url": "https://apxubatop.github.io/lmpPlugs/tvbutton.js","status": 1},
{"url": "https://anumbys.github.io/lampa/notextend.js","status": 1},
{"url": "https://BDVBurik.github.io/rezkacomment.js","status": 1}
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


//// Лампа полностью загружена, можно работать с интерфейсом
//    Lampa.Storage.set('video_quality_default', '2160');    // Настройки, плеер, качество видео по умолчанию 2160/1080/720
    Lampa.Storage.set('poster_size', 'w500');
}

// Выполняется один раз, когда пользователь впервые открывает лампу
window.lampainit_invc.first_initiale = function firstinitiale() {
//   Lampa.Storage.set('source', 'MIX');
}

    // Скрыть разделы в меню
    Lampa.Listener.follow('app', function(e) {
      if (e.type === 'ready') {
        $("[data-action=feed]").hide();        // лента
        $("[data-action=myperson]").hide();    // cub подписка на актеров
        $("[data-action=subscribes]").hide();  // cub подписки
//        $("[data-action=mytorrents]").hide();
        $("[data-action=about]").hide();
        $("[data-action=console]").hide();
        $("[data-action=timetable]").hide();
      }
    });

// убрать с интерфейса колокольчик и звёздочку
var styleElement = document.createElement('style');
    styleElement.innerHTML = '.head .notice--icon { display: none; }';
    document.body.appendChild(styleElement);


// Удаляю компоненты
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

// Скрыть меню в настройках - Синхронизация, Парсер (, 'parser'), TorrServer (, 'server'), IPTV, Расширения, TMDB
    Lampa.Settings.listener.follow('open', function(e) {
      $(['account', 'parser', 'iptv', 'tmdb', 'parental_control'].map(function(c) {
        return '[data-component="' + c + '"]';
      }).join(','), e.body).remove();
    });

    Lampa.Settings.listener.follow('open', function (e) {

      if (e.name == 'interface') {
        e.body.find('[data-name="light_version"]').remove();
//        e.body.find('[data-name="card_interfice_type"]').remove();  // CUB
//        e.body.find('[data-name="card_interfice_reactions"]').remove();  // CUB
      }

      if (e.name == 'more') {
        e.body.find('[data-name="cache_images"]').remove();
        e.body.find('[data-name="device_name"]').remove();
        e.body.find('[data-name="export"]').remove();
      }
    });

      if (!Lampa.Storage.get('lampac_initiale', 'false')) {
        if (window.appready) {
          if (window.lampainit_invc) window.lampainit_invc.appready();
          start();
        }
        else {
          Lampa.Listener.follow('app', function(e) {
            if (e.type == 'ready') {
              if (window.lampainit_invc) window.lampainit_invc.appready();
              start();
            }
          })
        }
      }

    }
  }, 200);
// Удаляю компоненты END

function start() {

//    if (window.lampainit_invc)
//      window.lampainit_invc.first_initiale();
}

})();
