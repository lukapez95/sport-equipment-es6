'use strict';

class itemsController{

    constructor($location) {
        this.$location = $location;
    }

    goToDetails (item) {
        let itemColor = '';
        let itemBrand = item.brand.split(' ').join('_');

        if (item.color.indexOf(' ') >= 0) {
            itemColor = item.color.split(' ').join('_');
        } else {
            itemColor = item.color.split('/').join('_');
        }

        let itemName = itemBrand + '_' + item.name.split(' ').join('_') + '_' + itemColor;
        this.$location.path('/details/' + itemName + '/' + item.id);
    }
}

itemsController.$inject = ['$location'];
module.exports = itemsController;