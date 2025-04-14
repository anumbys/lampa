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
            },
            {
              id: 'profile_4',
              title: '4',
              icon: 'https://cub.red/img/profiles/l_3.png'
            },
            {
              id: 'profile_5',
              title: '5',
              icon: 'https://cub.red/img/profiles/l_5.png'
            }
       ]
    };

    Lampa.Utils.putScript(['https://levende.github.io/lampa-plugins/profiles.js'], function() {});
})();
