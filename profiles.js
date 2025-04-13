(function () {
    'use strict';

    window.profiles_settings = {
        profiles: [
            {
              id: '',
              name: 'Profile 1',
              params: {
                adult: true,
              },
            },
            {
              id: 'profile_2',
              icon: 'https://cdn.cub.red/img/profiles/f_2.png'
            },
            {
              id: 'profile_3',
              icon: 'https://cdn.cub.red/img/profiles/f_2.png'
            }
       ]
    };

    Lampa.Utils.putScript(['https://levende.github.io/lampa-plugins/profiles.js'], function() {});
})();
