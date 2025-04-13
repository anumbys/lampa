(function () {
    'use strict';

    window.profiles_settings = {
        profiles: [
            {
              id: '',
              name: 'Profile 1',
              title: 'Главный',
              params: {
                adult: true,
                hideAnime: true,
              },
            },
            {
              id: 'profile_2',
              title: '2',
              icon: 'https://cdn.cub.red/img/profiles/f_2.png'
            },
            {
              id: 'profile_3',
              title: '3',
              icon: 'https://cdn.cub.red/img/profiles/f_1.png'
            }
       ]
    };

    Lampa.Utils.putScript(['https://levende.github.io/lampa-plugins/profiles.js'], function() {});
})();
