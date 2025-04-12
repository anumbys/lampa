(function() {
  'use strict';

  // Первоначальная сортировка меню
  if (!localStorage.getItem('menu_sort'))
    localStorage.setItem('menu_sort', '["Главная","Избранное","Фильмы","Сериалы","История","Релизы","Аниме","IPTV","Каталог","Фильтр","Расписание","Торренты","Клубничка"]');

  localStorage.setItem('cub_mirrors', '["mirror-kurwa.men", "cub.rip"]');

  window.lampa_settings = {
    torrents_use: true,
    demo: false,
    read_only: false,
    socket_use: false,
    account_use: true,
    account_sync: false,
    plugins_store: false,
    feed: false,
    white_use: false,
    push_state: true,
    lang_use: true,
    plugins_use: true
  }

  window.lampa_settings.disable_features = {
    dmca: true,
    reactions: true,
    discuss: true,
    ai: true,
    install_proxy: true,
    subscribe: true,
    blacklist: true,
    persons: true
  }

  // //////////////
// Переименуйте файл lampainit-invc.js в lampainit-invc.my.js
// //////////////


window.lampainit_invc = {};


// Лампа готова для использования
window.lampainit_invc.appload = function appload() {
Lampa.Utils.putScriptAsync(["https://lam.maxvol.pro/plugins/surs.js","https://lam.maxvol.pro/plugins/profiles.js","https://plugin.rootu.top/trailers.js","https://plugin.rootu.top/rutube.js","https://lam.maxvol.pro/plugins/kp.js","https://lam.maxvol.pro/plugins/imdb.js","https://lam.maxvol.pro/plugins/anonce.js"]);

    Lampa.Storage.set('parser_use', 'true');
    Lampa.Storage.set('jackett_url', 'https://jac.maxvol.pro');
    Lampa.Storage.set('jackett_key', '1');
    Lampa.Storage.set('parser_torrent_type', 'jackett');
    Lampa.Storage.set('parse_in_search', 'true'); Lampa.Storage.set('torrserver_url','https://ts.maxvol.pro'),
    Lampa.Storage.set('internal_torrclient', 'true');
    Lampa.Storage.set('surs_disableCustomName', true);
    Lampa.Storage.set('surs_name', 'MIXMOVIE');
  // Lampa.Storage.set('proxy_tmdb', 'true');
  // etc
}


// Лампа полностью загружена, можно работать с интерфейсом
window.lampainit_invc.appready = function appready() {
$('.head .notice--icon').remove();
}


// Выполняется один раз, когда пользователь впервые открывает лампу
window.lampainit_invc.first_initiale = function firstinitiale() {
   Lampa.Storage.set('source', 'MIXMOVIE');
}


// Ниже код выполняется до загрузки лампы, например можно изменить настройки
// window.lampa_settings.push_state = false;
// localStorage.setItem('cub_domain', 'cub.rip');
// localStorage.setItem('cub_mirrors', '["cub.rip", "mirror-kurwa.men", "lampadev.ru"]');


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

      Lampa.Utils.putScriptAsync(["https://lam.maxvol.pro/cubproxy.js", "https://lam.maxvol.pro/privateinit.js?account_email=" + encodeURIComponent(Lampa.Storage.get('account_email', '')) + "&uid=" + encodeURIComponent(Lampa.Storage.get('lampac_unic_id', ''))], function() {});

// Скрыть меню в настройках - Синхронизация, Парсер, TorrServer, IPTV, Расширения, TMDB
    Lampa.Settings.listener.follow('open', function(e) {
      $(['account', 'parser', 'server', 'iptv', 'plugins', 'tmdb'].map(function(c) {
        return '[data-component="' + c + '"]';
      }).join(','), e.body).remove();
    });

    // Скрыть разделы в меню
    Lampa.Listener.follow('app', (e) => {
      if (e.type === 'ready') {
        $("[data-action=feed]").hide();        // лента
        $("[data-action=myperson]").hide();    // cub подписка на актеров
        $("[data-action=subscribes]").hide();
        $("[data-action=mytorrents]").hide();
        $("[data-action=about]").hide();
        $("[data-action=console]").hide();
        $("[data-action=timetable]").hide();
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

  function start() {
    Lampa.Storage.set('lampac_initiale', 'true');
    Lampa.Storage.set('video_quality_default', '1080');
    Lampa.Storage.set('full_btn_priority', '966825172');
    Lampa.Storage.set('proxy_tmdb_auto', 'LT' == 'RU');
    Lampa.Storage.set('poster_size', 'w300');

    var plugins = Lampa.Plugins.get();

    var plugins_add = [{"url": "https://lam.maxvol.pro/tracks.js","status": 1,"name": "Tracks.js","author": "lampac"},{"url": "https://lam.maxvol.pro/tmdbproxy.js","status": 1,"name": "TMDB Proxy","author": "lampac"},{"url": "https://lam.maxvol.pro/online.js","status": 1,"name": "Онлайн","author": "lampac"},{"url": "https://lam.maxvol.pro/sisi.js","status": 1,"name": "Клубничка","author": "lampac"},{"url": "https://lam.maxvol.pro/startpage.js","status": 1,"name": "Стартовая страница","author": "lampac"},{"url": "https://lam.maxvol.pro/sync.js","status": 1,"name": "Синхронизация","author": "lampac"},{"url": "https://lam.maxvol.pro/backup.js","status": 1,"name": "Backup","author": "lampac"}];

    var plugins_push = []

    plugins_add.forEach(function(plugin) {
      if (!plugins.find(function(a) {
          return a.url == plugin.url
        })) {
        Lampa.Plugins.add(plugin);
        Lampa.Plugins.save();

        plugins_push.push(plugin.url)
      }
    });

    if (plugins_push.length) Lampa.Utils.putScript(plugins_push, function() {}, function() {}, function() {}, true);

    if (window.lampainit_invc)
      window.lampainit_invc.first_initiale();

    /*
    setTimeout(function(){
        Lampa.Noty.show('Плагины установлены, перезагрузка через 5 секунд.',{time: 5000})
    },5000)
    */
  }
})();
