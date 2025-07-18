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


// Постояные настроики, после изминений и перезагрузке настроики перключаются обратно на эти первоначалные

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
Lampa.Storage.set('lampac_initiale', 'true');
Lampa.Storage.set('animation', 'false');               // Анимация отключена
Lampa.Storage.set('protocol', 'http');                 // cub api протокол http/https
Lampa.Storage.set('start_page', 'last');  // Стартовая страница
Lampa.Storage.set('menu_sort', ([ "Главная", "Избранное", "История","Торренты", "Фильмы", "Аниме", "Сериалы", "Радио"]));  // Cортировка меню
Lampa.Storage.set('menu_hide', ([ "Расписание", "Релизы"]));

//    Lampa.Storage.set('video_quality_default', '2160');    // Настройки, плеер, качество видео по умолчанию 2160/1080/720
Lampa.Storage.set('poster_size', 'w500');

// Постояные настроики END
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
