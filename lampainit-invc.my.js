(function() {
  'use strict';

  // Первоначальная сортировка меню
  if (!localStorage.getItem('menu_sort'))
    localStorage.setItem('menu_sort', '["Главная","Избранное","Торренты","Фильмы","Сериалы","История","Релизы","Аниме","IPTV","Каталог","Фильтр"]');

//  localStorage.setItem('cub_mirrors', '["mirror-kurwa.men", "cub.rip"]');

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

  // //////////////
// Переименуйте файл lampainit-invc.js в lampainit-invc.my.js
// //////////////


window.lampainit_invc = {};


// Лампа готова для использования
window.lampainit_invc.appload = function appload() {
Lampa.Utils.putScriptAsync(["https://cub.red/plugin/tracks", "https://bylampa.github.io/account.js", "https://bylampa.github.io/source.js", "https://bylampa.github.io/backmenu.js", "https://bylampa.github.io/seas_and_eps.js", "http://bwa.to/rc/889yfnh", "https://bwa.to/r", "https://levende.github.io/lampa-plugins/custom-favs.js", "https://levende.github.io/lampa-plugins/lampac-src-filter.js", "https://aviamovie.github.io/surs.js", "https://apxubatop.github.io/lmpPlugs/tvbutton.js", "https://anumbys.github.io/lampa/notextend.js", "https://BDVBurik.github.io/rezkacomment.js", "https://lampame.github.io/main/pubtorr/pubtorr.js"]);

    Lampa.Storage.set('parser_use', 'true');
    Lampa.Storage.set('jackett_url', 'https://jacred.xyz');
//    Lampa.Storage.set('jackett_key', '1');
    Lampa.Storage.set('parser_torrent_type', 'jackett');
    Lampa.Storage.set('parse_in_search', 'true');
//    Lampa.Storage.set('torrserver_url','https://ts.maxvol.pro'),
    Lampa.Storage.set('internal_torrclient', 'true');
//    Lampa.Storage.set('surs_disableCustomName', true);
    Lampa.Storage.set('surs_name', 'MIX');
}


//// Лампа полностью загружена, можно работать с интерфейсом   ( ne rabotaet)
//window.lampainit_invc.appready = function appready() {
//$('.head .notice--icon').remove();
//}


// Выполняется один раз, когда пользователь впервые открывает лампу
window.lampainit_invc.first_initiale = function firstinitiale() {
   Lampa.Storage.set('source', 'CUB');
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

//      Lampa.Utils.putScriptAsync(["https://lam.maxvol.pro/cubproxy.js", "https://lam.maxvol.pro/privateinit.js?account_email=" + encodeURIComponent(Lampa.Storage.get('account_email', '')) + "&uid=" + encodeURIComponent(Lampa.Storage.get('lampac_unic_id', ''))], function() {});

// Скрыть меню в настройках - Синхронизация, Парсер (, 'parser'), TorrServer (, 'server'), IPTV, Расширения, TMDB
    Lampa.Settings.listener.follow('open', function(e) {
      $(['account', 'iptv', 'plugins', 'tmdb'].map(function(c) {
        return '[data-component="' + c + '"]';
      }).join(','), e.body).remove();
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


    Lampa.Settings.listener.follow('open', function (e) {
//      if (e.name == 'tmdb') { // tmdb
//        e.body.find('[data-name="proxy_tmdb_auto"]').remove();
//        e.body.find('[data-name="proxy_tmdb"]').remove();
//      }

      // Разрешаем пользователю указывать локальный TS в "Дополнительная ссылка"
      // если хотите скрыть раздел, добавьте на 174й строке 'server' в массив
//      if (e.name == 'server') {
//        e.body.find('[data-parent="login"]').remove();
//        e.body.find('[data-name="torrserver_url"]').remove();
//        e.body.find('[data-name="torrserver_auth"]').remove();
//        e.body.find('[data-name="torrserver_savedb"]').remove();
//        e.body.find('[data-name="torrserver_preload"]').remove();
//      }

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

  function start() {
    Lampa.Storage.set('lampac_initiale', 'true');
    Lampa.Storage.set('video_quality_default', '2160');
//    Lampa.Storage.set('proxy_tmdb_auto', 'LT' == 'RU');
    Lampa.Storage.set('poster_size', 'w500');

//    var plugins = Lampa.Plugins.get();

//    var plugins_add = [{"url": "https://lam.maxvol.pro/tracks.js","status": 1,"name": "Tracks.js","author": "lampac"},{"url": "https://lam.maxvol.pro/tmdbproxy.js","status": 1,"name": "TMDB Proxy","author": "lampac"},{"url": "https://lam.maxvol.pro/online.js","status": 1,"name": "Онлайн","author": "lampac"},{"url": "https://lam.maxvol.pro/sisi.js","status": 1,"name": "Клубничка","author": "lampac"},{"url": "https://lam.maxvol.pro/startpage.js","status": 1,"name": "Стартовая страница","author": "lampac"},{"url": "https://lam.maxvol.pro/sync.js","status": 1,"name": "Синхронизация","author": "lampac"},{"url": "https://lam.maxvol.pro/backup.js","status": 1,"name": "Backup","author": "lampac"}];

//    var plugins_push = []

//    plugins_add.forEach(function(plugin) {
//      if (!plugins.find(function(a) {
//          return a.url == plugin.url
//        })) {
//        Lampa.Plugins.add(plugin);
//        Lampa.Plugins.save();

//        plugins_push.push(plugin.url)
//      }
//    });

//    if (plugins_push.length) Lampa.Utils.putScript(plugins_push, function() {}, function() {}, function() {}, true);

//    if (window.lampainit_invc)
//      window.lampainit_invc.first_initiale();

    /*
    setTimeout(function(){
        Lampa.Noty.show('Плагины установлены, перезагрузка через 5 секунд.',{time: 5000})
    },5000)
    */
  }
})();
