'use strict';

class DetailsCtrl {

    constructor ($routeParams, $location, dataService) {
        this.$routeParams = $routeParams;
        this.$location = $location;
        this.dataService = dataService;

        this.itemDetail = {};
        this.setItemId();

        this.current = 0;
        this.selected = 0;
    }

    setItemId () {
        return this.dataService.getItemById(this.$routeParams.id).then((item) => {
            this.itemDetail = item.data;
            return this.itemDetail;
        })
    }

    setCurrent (index){
        this.current = index || 0;
    }

    select (index){
        this.selected = index;
    }

    changeDetailItem(id) {
        this.dataService.changeDetailsUrl(id);
    }

}

DetailsCtrl.$inject = ['$routeParams', '$location', 'dataService'];
module.exports = DetailsCtrl;