/**
 * Example of Require.js boostrap javascript
 */
requirejs.config({
    baseUrl: '/src/js',
    // Path mappings for the logical module names
    paths: {
        'knockout': 'libs/knockout/knockout-3.1.0',
        'jquery': 'libs/jquery/jquery-2.1.0.min',
        'jqueryui': 'libs/jquery/jquery-ui.min',
        'ojs': 'libs/oj/v1.0/min',
        'ojL10n': 'libs/oj/v1.0/ojL10n',
        'text': 'libs/require/text',
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
require(['ojs/ojcore', 'knockout', 'jquery',
//    'text!../patterntemplates/demoAppHeaderTemplateLite.html',
//    'text!../patterntemplates/demoAppFooterTemplate.html',
    'ojs/ojknockout', 'ojs/ojcomponents'],
        function(oj, ko, $, t0, t1)
        {
            $(function() {
                $.get('/src/patterntemplates/demoAppHeaderTemplateLite.html', function(data) {
                    var $header = $('#demo_appheader_div');
                    function headerViewModel() {

                        // 
                        // Dropdown menu states
                        // 
                        this.selectedMenuItem = ko.observable("(None selected yet)");

                        this.menuItemSelect = function(event, ui) {
                            switch (ui.item.attr("id")) {
                                case "open":
                                    this.selectedMenuItem(ui.item.children("a").text());
                                    break;
                                default:
                                    // isLeaf check needed if submenus are 
                                    // present until 17501993 is resolved
                                    var isLeaf = !ui.item.children("ul").length;
                                    if (!isLeaf)
                                        return;

                                    // this.selectedMenuItem(ui.item.children("a").text());
                            }
                        };

                        // Data for application name
                        var appName = {
                            "id": "jetId",
                            "name": "Enterprise Manager SaaS",
                        };

                        // 
                        // Toolbar buttons
                        // 
                        var toolbarData = {
                            // user name in toolbar
                            "userName": "sysman",
                            "toolbar_buttons": [
                                {
                                    "iconClass": "demo-palette-icon",
                                    "label": "toolbar_button_1",
                                    "url": "#"
                                },
                                {
                                    "iconClass": "demo-gear-icon",
                                    "label": "toolbar_button_2",
                                    "url": "#"
                                },
                            ],
                            // Data for global nav dropdown menu embedded in toolbar.
                            "global_nav_dropdown_items": [
                                {"label": "preferences",
                                    "url": "#"
                                },
                                {"label": "help",
                                    "url": "#"
                                },
                                {"label": "about",
                                    "url": "#"
                                },
                                {"label": "sign out",
                                    "url": "#"
                                },
                            ]
                        };

                        this.appId = appName.id;
                        this.title =' - ' + $header.attr("title");

                        this.userName = ko.observable(toolbarData.userName);
                        this.toolbarButtons = toolbarData.toolbar_buttons;
                        this.globalNavItems = toolbarData.global_nav_dropdown_items;

                    }
                    oj.koStringTemplateEngine.install();
                    ko.templates["demoAppHeaderTemplateLite"] = data;
                    if ($header[0]) {
                        ko.applyBindings(new headerViewModel(),
                                $header[0]);
                    }
                });
                $.get('/src/patterntemplates/demoAppFooterTemplate.html', function(data) {
                    function footerViewModel() {
                        var templateData = {
                            "footer_links": [
                                {"name": "About Oracle",
                                    "linkId": "aboutOracle",
                                    "linkTarget": "http://www.oracle.com/us/corporate/index.html#menu-about"
                                },
                                {"name": "Contact Us",
                                    "linkId": "contactUs",
                                    "linkTarget": "http://www.oracle.com/us/corporate/contact/index.html"
                                },
                                {"name": "Legal Notices",
                                    "linkId": "legalNotices",
                                    "linkTarget": "http://www.oracle.com/us/legal/index.html"
                                },
                                {"name": "Terms Of Use",
                                    "linkId": "termsOfUse",
                                    "linkTarget": "http://www.oracle.com/us/legal/terms/index.html"
                                },
                                {"name": "Your Privacy Rights",
                                    "linkId": "yourPrivacyRights",
                                    "linkTarget": "http://www.oracle.com/us/legal/privacy/index.html"
                                },
                            ]
                        }
                        this.footerLinks = templateData.footer_links;
                    }
                    oj.koStringTemplateEngine.install();
                    ko.templates["demoAppFooterTemplate"] = data;
                    if ($('#demo_appfooter_div')[0] != null) {
                        ko.applyBindings(new footerViewModel(), $('#demo_appfooter_div')[0]);
                    }
                });
//                ko.templates["demoAppHeaderTemplateLite"] = t0;
//                ko.templates["demoAppFooterTemplate"] = t1;


            });

        });