import LogRocket from 'logrocket';
import createPlugin from 'logrocket-vuex';

const LOGROCKET_ID = '<%= options.logRocketId %>'
const DEV_MODE_ALLOWED = <%= options.devModeAllowed %>

export default function ({ app, store }, inject) {
    try {
        // variable for detecting production mode
        const isProduction = process.env.NODE_ENV === 'production';
        // only run on browser and when in production mode
        // or when the developer enables devModeAllowed
        if (LOGROCKET_ID && ((process.client && isProduction) || DEV_MODE_ALLOWED)) {
            // initialize LogRocket with the provided id
            LogRocket.init(LOGROCKET_ID);

            // if nuxt app has a store initialized, load the logrocket-vuex plugin
            if (store) {
                const logrocketPlugin = createPlugin(LogRocket);
                // add plugin to vuex store
                logrocketPlugin(store);
            }

            // if @nuxt/sentry module is installed, add LogRocket session recording URL to sentry scope
            // https://docs.logrocket.com/docs/sentry
            if (app.$sentry) {
                console.log('has sentry')
                LogRocket.getSessionURL(sessionURL => {
                    app.$sentry.configureScope(scope => {
                        scope.setExtra('sessionURL', sessionURL);
                    });
                });
            }
        }
        // globally inject LogRocket instance
        inject('logRocket', LogRocket);
    } catch (error) {
        console.log('[LOGROCKET] ', error)
    }
};
