(function () {
    'use strict';

    window.profiles_settings = {
        profiles: [
            {
              id: '',
              name: 'Profile 1',
              icon: 'https://cdn.cub.red/img/profiles/f_10.png'
              params: {
                adult: true,
              },
            },
            {
              id: '',
              icon: 'https://cdn.cub.red/img/profiles/f_2.png'
              name: 'Profile 2',
              params: {
                adult: true,
              },
            },
            {
              id: 'profile_3',
              icon: 'https://cdn.cub.red/img/profiles/f_1.png'
            }
       ]
    };

    Lampa.Utils.putScript(['https://levende.github.io/lampa-plugins/profiles.js'], function() {});
})();
