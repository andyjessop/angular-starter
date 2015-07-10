# Angular Starter

This is a starter app based on [Todd Motto's styleguide](https://github.com/toddmotto/angularjs-styleguide). It uses:

* ui-router
* IIFE scoping
* Functions passed into module methods rather than assigned as callback
* `controllerAs` syntax
* One-time binding syntax

Contributions and/or suggestions are most welcome.

## Installation

    // Bower components
    $ bower install --save angular
    $ bower install --save angular-ui-router
    $ bower install --save angular-cookies
    $ bower install --save html5-boilerplate

## Todos

There are lots of todos here. It is meant to be a working project with many common
patterns implemented as modules, such as authentication/authorization, API communication,
socket.io integration, and more.

## File structure

    app --> all files required to run app
        css --> css assets
        img --> img
        modules --> all functionality is a module
            app --> main app module. Instantiates app, loads modules, and handles routing
                app.controller.js --> app controller logic
                app.module.js --> app module declaration
                app.router.js --> all app routing
                index.html --> 
            view1
                view1.controller.js --> view1 controller logic
                view1.module.js --> view1 module declaration
                index.html --> view1 html
            view2
                view2.controller.js --> view2 controller logic
                view2.module.js --> view2 module declaration
                index.html --> view2 html
        index.html --> main entry point
    bower.json
    .bowerrc
    readme.md

## IIFE scoping

    (function() {

        'use strict';

        angular
            .module('app', [

                /* Contrib modules */
                'ui.router',

                /* Custom modules */
                'app.view1',
                'app.view2'

            ]);

    })();

## controllerAs syntax and one-time binding syntax

In the template:

    <div ng-controller="View1Controller as vm">

        <h1>{{ ::vm.title }}</h1>

    </div>

In the controller:

    (function() {

        'use strict';

        angular
            .module('app.view1')
            .controller('View1Controller', View1Controller);

            function View1Controller() {

                var vm = this;

                vm.title = "View 1";

            }

    })();

## Functions passed into modules

    angular
        .module('app')
        .controller('AppController', AppController);