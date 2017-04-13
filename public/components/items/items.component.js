'use strict';
let itemsComponent = {
    templateUrl: './components/items/items.html',
    controller: 'itemsController',
    bindings: {
        one: '='
    }
};

module.exports = itemsComponent;