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

    <div ng-controller="View1Controller as vm">

        <h1>{{ ::vm.title }}</h1>

    </div>

## Functions passed into modules

    angular
        .module('app')
        .controller('AppController', AppController);