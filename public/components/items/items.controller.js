'use strict';

class itemsController{

    constructor(dataService) {
        this.dataService = dataService;
    }

    goToDetails(one) {
        this.dataService.changeDetailsUrl(one);
    }
}

itemsController.$inject = ['dataService'];
module.exports = itemsController;