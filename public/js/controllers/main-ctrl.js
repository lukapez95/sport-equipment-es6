'use strict';

class MainCtrl{

    constructor($scope, $routeParams, $location, dataService) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$location = $location;
        this.dataService = dataService;

        this.clicked = -1;
        this.$scope.allData = {};
        this.setData();

        $scope.sportId = '';
        $scope.sportTitle = $routeParams.sportTitle;

    }

    setCurrent (index) {
        index === this.clicked ? this.clicked = -1 : this.clicked = index;
    }

    setData () {
        return this.dataService.getData().then((data)=>{
            this.$scope.allData = data.data;
            return this.$scope.allData;
        })
    }

    setSportId (sport) {
        let sport1 = sport.title.toLowerCase();
        this.$scope.sportId = sport.sportId;
        this.$location.path(`/sports/${sport1}`);
    }

    isActive (viewLocation) {
        return viewLocation === this.$location.path();
    }

    displayItem (item) {
        this.$scope.shownItem = item;
    }

    send () {
        location.reload();
    }
}

MainCtrl.$inject =  ['$scope', '$routeParams', '$location', 'dataService'];
module.exports = MainCtrl;