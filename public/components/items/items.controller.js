'use strict';

class itemsController{

    constructor($location, dataService) {
        this.$location = $location;
        this.dataService = dataService;
    }

    goToDetails(one) {
        this.dataService.changeDetailsUrl(one);
    }
}

itemsController.$inject = ['$location', 'dataService'];
module.exports = itemsController;