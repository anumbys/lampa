(function () {
    'use strict';

    window.profiles_settings = {
        profiles: [
    {
      "id": ""
      "title": 'Profile 1',
    },
    {
      "id": "profile_2", 
      "title": "John", 
      "icon": "https://cdn.cub.red/img/profiles/f_2.png",
      "params": {
        "adult": true,
        "extraSettings": {
//          "hideAnime": true
        }
      }
    },
    {
      "id": "profile_3", 
      "title": "Anna", 
      "icon": "https://cdn.cub.red/img/profiles/f_1.png",
      "params": {
//        "hideHorrors": true
      }
    }
       ]
    };

    Lampa.Utils.putScript(['https://levende.github.io/lampa-plugins/profiles.js'], function() {});
})();
