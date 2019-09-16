import moleculerWeb from 'moleculer-web';

const apiService = {
  name: 'api',
  mixins: [moleculerWeb],

  // More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
  settings: {
    port: process.env.PORT || 3000,

    routes: [{
      path: '/api',
      whitelist: [
        // Access to any actions in all services under "/api" URL
        '**',
      ],
    }],

    // Serve assets from "public" folder
    assets: {
      folder: 'public',
    },
  },
};

export = apiService;
