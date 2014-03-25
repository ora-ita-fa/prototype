/**
 * Example of Require.js boostrap javascript
 */
requirejs.config({
  baseUrl:'js',
  // Path mappings for the logical module names
  paths: {
    'knockout': 'libs/knockout/knockout-3.1.0',
    'jquery': 'libs/jquery/jquery-2.1.0.min',
    'jqueryui': 'libs/jquery/jquery-ui-1.10.4.custom',
    'ojs': 'libs/oj/v1.0/min',
    'ojL10n': 'libs/oj/v1.0/ojL10n',
    'ojtranslations': 'libs/oj/v1.0/resources'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    },
    'jqueryui': {
      deps: ['jquery']
    }
  },
  
// This section configures the i18n plugin. It is merging the Oracle JET built-in translation 
// resources with a custom translation file.
// Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
// a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
            }
        }
    }
});

