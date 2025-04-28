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

// Jacket and Torrserver
    Lampa.Storage.set('parser_use', 'true');
    Lampa.Storage.set('jackett_url', 'https://jacred.xyz');
//    Lampa.Storage.set('jackett_key', '1');
    Lampa.Storage.set('parser_torrent_type', 'jackett');
    Lampa.Storage.set('parse_in_search', 'true');
//    Lampa.Storage.set('torrserver_url',''),
    Lampa.Storage.set('internal_torrclient', 'true'); // включенный встроенный клиент торсервера

//    Lampa.Storage.set('surs_disableCustomName', true);
    Lampa.Storage.set('surs_name', 'MIX'); // Название источника AVIAMOVIE
    Lampa.Storage.set('source', 'MIX');    //    Источник по умолчанию
// Постояные настроики, после изминений и перезагрузке настроики перключаются обратно на эти первоначалные
//   "function start() {}" не работает
    Lampa.Storage.set('lampac_initiale', 'true');
      Lampa.Storage.set('animation', 'false');               // Анимация отключена
      Lampa.Storage.set('protocol', 'http');                 // cub api протокол http/https
Lampa.Storage.set('start_page', 'last');  // Стартовая страница
Lampa.Storage.set('menu_sort', ([ "Главная", "Избранное", "История","Торренты", "Фильмы", "Аниме", "Сериалы", "Радио"]));  // Cортировка меню
Lampa.Storage.set('menu_hide', ([ "Расписание", "Релизы"]));
// Skrypt error
//Lampa.Storage.set('torrents_sort', 'size');

//// Лампа полностью загружена, можно работать с интерфейсом
//    Lampa.Storage.set('video_quality_default', '2160');    // Настройки, плеер, качество видео по умолчанию 2160/1080/720
    Lampa.Storage.set('poster_size', 'w500');


// Выполняется один раз, когда пользователь впервые открывает лампу
//window.lampainit_invc.first_initiale = function firstinitiale() {
//   Lampa.Storage.set('source', 'MIX');
//}

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




//function start() {

//    if (window.lampainit_invc)
//      window.lampainit_invc.first_initiale();
//}

})();
