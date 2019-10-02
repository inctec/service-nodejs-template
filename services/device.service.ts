import { ServiceSchema } from 'moleculer';

const greeterService: ServiceSchema = {

  name: 'device',

  /**
   * Service settings
   */
  settings: {

  },

  /**
   * Service dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {

    /**
     * Say a 'Hello'
     *
     * @returns
     */
    register(): string {

      return 'Hello Moleculer';
    },

    /**
     * Welcome a username
     *
     * @param {String} name - User name
     */
    welcome: {
      params: {
        name: 'string',
      },
      handler(ctx): string {
        return `Welcome, ${ctx.params.name}`;
      },
    },
  },

  /**
   * Events
   */
  events: {

  },

  /**
   * Methods
   */
  methods: {

  },

  /**
   * Service created lifecycle event handler
   */
  created(): Promise<void> {
    return Promise.resolve();
  },

  /**
   * Service started lifecycle event handler
   */
  started(): Promise<void> {
    return Promise.resolve();
  },

  /**
   * Service stopped lifecycle event handler
   */
  stopped(): Promise<void> {
    return Promise.resolve();
  },
};

export = greeterService;
