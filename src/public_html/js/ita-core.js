/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['knockout'], function(ko) {
    
    var registeredTools = {};

    ko.bindingHandlers.itaComponent = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here
            var val = valueAccessor();
            if (val && val.component) {
                var component = registeredTools[val.component];
                if (component && component.init && typeof component.init === 'function') {
                    component.init(element, valueAccessor, allBindings, viewModel, bindingContext);
                }
            }
        },
        update: function(element, valueAccessor, allBindings) {
            // Leave as before
            var val = valueAccessor();
            if (val && val.component) {
                var component = registeredTools[val.component];
                if (component && component.update && typeof component.update === 'function') {
                    component.init(element, valueAccessor, allBindings);
                }
            }
        }
    };

    return {
        registerTool: function(toolConfig) {
            if (toolConfig && toolConfig.name) {
                registeredTools[toolConfig.name] = {
                    init: toolConfig.init,
                    update: toolConfig.update
                };
            }
        }
    };
});