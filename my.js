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

// Скрыть меню в настройках - Синхронизация, Парсер (, 'parser'), TorrServer (, 'server'), IPTV, Расширения, TMDB
    Lampa.Settings.listener.follow('open', function(e) {
      $(['account', 'iptv', 'tmdb', 'parental_control'].map(function(c) {
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
        $("[data-action=about]").hide();
        $("[data-action=console]").hide();
        $("[data-action=timetable]").hide();
      }
    });

// убрать с интерфейса колокольчик и звёздочку
var styleElement = document.createElement('style');
    styleElement.innerHTML = '.head .notice--icon { display: none; }';
    document.body.appendChild(styleElement);

})();
