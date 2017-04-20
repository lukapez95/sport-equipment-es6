'use strict';

class DetailsCtrl {

    constructor ($scope, $routeParams, $location, dataService) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$location = $location;
        this.dataService = dataService;

        $scope.current = 0;
        $scope.selected = 0;

        this.$scope.itemDetail = {};
        this.setItemId();
    }

    setItemId () {
        return this.dataService.getItemById(this.$routeParams.id).then((item) => {
            this.$scope.itemDetail = item.data;
            return this.$scope.itemDetail;
        })
    }

    setCurrent (index){
        this.$scope.current = index || 0;
    }

    select (index){
        this.$scope.selected = index;
    }

    changeDetailItem(id) {
        this.dataService.changeDetailsUrl(id);
    }

}

DetailsCtrl.$inject = ['$scope', '$routeParams', '$location', 'dataService'];
module.exports = DetailsCtrl;