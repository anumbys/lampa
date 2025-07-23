(function () {
  'use strict';
  
// Jacket and Torrserver
  Lampa.Storage.set('parser_use', 'true');
  Lampa.Storage.set('jackett_url', 'https://jacred.xyz');
//  Lampa.Storage.set('jackett_key', '1');
  Lampa.Storage.set('parser_torrent_type', 'jackett');
  Lampa.Storage.set('parse_in_search', 'true');
  Lampa.Storage.set('internal_torrclient', 'true'); // включенный встроенный клиент торсервера

  Lampa.Storage.set('source', 'surs');    //    Источник по умолчанию
  Lampa.Storage.set('lampac_initiale', 'true');
  Lampa.Storage.set('start_page', 'last');  // Стартовая страница
  Lampa.Storage.set('menu_sort', ([ "Главная", "Избранное", "История","Торренты", "Фильмы", "Аниме", "Сериалы", "Радио"]));  // Cортировка меню
  Lampa.Storage.set('menu_hide', ([ "Расписание", "Релизы"]));
// Skrypt error
  Lampa.Storage.set('torrents_sort', 'size');
  Lampa.Storage.set('poster_size', 'w500');
  
  })();
