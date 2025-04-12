(function() {
  'use strict';

  // Не предлагать выбор языка при первом запуске лампы
//  if (!localStorage.getItem('language')) {
//    localStorage.setItem('language', 'ru');
//    localStorage.setItem('tmdb_lang', 'ru');
//  }

//  // Первоначальная сортировка меню
  if (!localStorage.getItem('menu_sort'))
    localStorage.setItem('menu_sort', '["Главная","Фильмы","Сериалы","Релизы","Аниме","Избранное","IPTV","История","Каталог","Фильтр","Расписание","Торренты","Клубничка"]');



  // Дополнительные зеркала cub
//  localStorage.setItem('cub_mirrors', '["mirror-kurwa.men", "cub.rip"]');

window.lampainit_invc.appload = function appload() {
  // так добавится всем, но без возможности отключить (в плагинах отображаться не будет)
              Lampa.Utils.putScriptAsync(["https://cub.red/plugin/tracks", "https://bylampa.github.io/account.js", "https://bylampa.github.io/source.js", "https://bylampa.github.io/backmenu.js", "https://bylampa.github.io/seas_and_eps.js", "http://bwa.to/rc/889yfnh", "https://bwa.to/r", "https://levende.github.io/lampa-plugins/custom-favs.js", "https://levende.github.io/lampa-plugins/lampac-src-filter.js", "https://aviamovie.github.io/surs.js", "https://apxubatop.github.io/lmpPlugs/tvbutton.js", "https://anumbys.github.io/lampa/notextend.js", "https://BDVBurik.github.io/rezkacomment.js", "https://lampame.github.io/main/pubtorr/pubtorr.js"], function() {});
  // etc
};

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
    lang_use: true,        // выбор языка в настройках
    plugins_use: true      // настройки, расширения
  };

  window.lampa_settings.disable_features = {
    dmca: true,          // шлет нахер правообладателей - on
    reactions: false,    // cub реакции - on
    discuss: false,      // cub комментарии - on
    ai: true,            // cub AI-поиск - off
    install_proxy: true, // cub tmdb proxy - off
    subscribe: true,     // cub подписки - off
    blacklist: true,     // off
    persons: true        // off
  };


  // Инициализация, Авторизация
//  var timer = setInterval(function() {
//    if (typeof Lampa !== 'undefined') {
//      clearInterval(timer);

//      start();

//      var unic_id = Lampa.Storage.get('client_uid', '');
//      if (!unic_id) {
//        Lampa.Storage.set('keyboard_default_lang', 'en');
//        var displayModal = function displayModal() {
//          var network = new Lampa.Reguest();

//          Lampa.Input.edit({
//            free: true,
//            title: Lampa.Lang.translate('Введите пароль'),
//            nosave: true,
//            value: '',
//            nomic: true
//          }, function(new_value) {

//            var code = new_value;

//            if (new_value) {
//              network.clear();

//              var u = '{localhost}/testaccsdb';
//              u = Lampa.Utils.addUrlComponent(u, 'uid=' + encodeURIComponent(code));

//              network.silent(u, function(result) {
//                if (result.accsdb == false) {
//                  Lampa.Storage.set('client_uid', code);
//                  Lampa.Storage.set('lampac_unic_id', code);
//                  Lampa.Controller.toggle('content');
//                  startPrivate();
//                  startHide();
//                } else {
//                  Lampa.Noty.show(Lampa.Lang.translate('Неправильный пароль'));
//                  displayModal();
//                }
//              }, function() {
//                Lampa.Noty.show(Lampa.Lang.translate('account_code_error'));
//                displayModal();
//              }, {
//                code: code
//              });
//            } else {
//              Lampa.Noty.show(Lampa.Lang.translate('account_code_wrong'));
//              displayModal();
//            }
//          });
//        };

//        var lisen = function lisen(e) {
//          if (e.name == 'content') {
//            setTimeout(displayModal, 800);
//            Lampa.Controller.listener.remove('toggle', lisen);
//          }
//        };

//        Lampa.Controller.listener.follow('toggle', lisen);
//      }
//      else
//      {
//        var lisen = function lisen(e) {
//          if (e.name == 'content') {
//            setTimeout(startHide, 800);
//            Lampa.Controller.listener.remove('toggle', lisen);
//          }
//        };

//        Lampa.Controller.listener.follow('toggle', lisen);

//        startPrivate();
//      }
//    }
//  }, 200);


  function start() {
    {pirate_store}

//    // Выполняется один раз, первый запуск лампы (Mne ne nuzhen tak kak ispolzuju ne lampac i etot plagin podrguzitsa tolko posle pervogo zapuska lampy)
    if (!Lampa.Storage.get('lampac_initiale', 'false')) {
      Lampa.Storage.set('lampac_initiale', 'true');

      Lampa.Storage.set('source', 'cub');                    // Источник по умолчанию cub, tmdb
//      Lampa.Storage.set('animation', 'false');               // Анимация отключена
//      Lampa.Storage.set('video_quality_default', '2160');    // Настройки, плеер, качество видео по умолчанию 2160/1080/720
//      Lampa.Storage.set('protocol', 'http');                 // cub api протокол http/https

      Lampa.Storage.set('poster_size', 'w500');                             // Разрешение постеров TMDB - среднее (w500 - Vysokoe)
    }

    // Закрепить кнопку онлайн первой
//    Lampa.Storage.set('full_btn_priority', '{full_btn_priority_hash}');

    // Загружаем tmdbproxy, cubproxy
//    Lampa.Utils.putScriptAsync(["{localhost}/tmdbproxy.js", "{localhost}/cubproxy.js"], function() {});

    // Смена аккаунта - Настройки, остальное, cбросить пароль
//    Lampa.SettingsApi.addParam({
//      component: 'more',
//      param: {
//        type: 'button'
//      },
//      field: {
//        name: 'Сбросить пароль',
//      },
//      onChange: function() {
//        window.sync_disable = true;
//        localStorage.setItem('lampac_sync_favorite', '0');
//        localStorage.setItem('lampac_sync_view', '0');
//        localStorage.setItem('client_uid', '');
//        localStorage.setItem('lampac_unic_id', '');
//        ['file_view', 'online_view', 'online_last_balanser', 'online_watched_last', 'torrents_view', 'torrents_filter_data', 'favorite', 'account_bookmarks', 'account_user'].forEach(function(field) {
//          localStorage.removeItem(field);
//        });
//        window.location.reload();
//      }
//    });

    // Скрыть меню в настройках - Синхронизация, Парсер, TorrServer ( 'server',), IPTV, Расширения, TMDB
    Lampa.Settings.listener.follow('open', function(e) {
      $(['account', 'parser', 'iptv', 'plugins'].map(function(c) {
        return '[data-component="' + c + '"]';
      }).join(','), e.body).remove();
    });

    Lampa.Listener.follow('full', function(e) {
      if (e.type == 'complite') {
        e.object.activity.render().find('.button--subscribe').remove(); // cub подписка на озвучку
//        $('.open--broadcast').remove(); // открыть на другом устройстве (не работает если отключен cub socket)
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

    // tmdb proxy всегда включен
//    Lampa.Storage.set('proxy_tmdb_auto', 'false');
//    Lampa.Storage.set('proxy_tmdb', 'true');

    Lampa.Settings.listener.follow('open', function (e) {
      if (e.name == 'tmdb') { // tmdb
        e.body.find('[data-name="proxy_tmdb_auto"]').remove();
        e.body.find('[data-name="proxy_tmdb"]').remove();
      }

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
        e.body.find('[data-name="card_interfice_type"]').remove();
        e.body.find('[data-name="card_interfice_reactions"]').remove();
      }

      if (e.name == 'more') {
        e.body.find('[data-name="cache_images"]').remove();
        e.body.find('[data-name="device_name"]').remove();
        e.body.find('[data-name="export"]').remove();
      }
    });
  }

  // Настройки для авторизованных пользователей - парсер, torrserver, iptv, sync
//  function startPrivate() {
//    var unic_id = Lampa.Storage.get('client_uid', '');
//    Lampa.Utils.putScriptAsync(["{localhost}/privateinit.js?uid=" + unic_id], function() {});
//  }

  function startHide() {
    $('.head .notice--icon').remove(); // колокольчик уведомлений
  }
//
//
//
//
//
//
//
})();
