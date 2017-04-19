'use strict';

class MainCtrl{

    constructor($scope, $routeParams, $location, dataService) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$location = $location;
        this.dataService = dataService;

        $scope.myVal = true;
        $scope.sportId = '';
        $scope.sportTitle = $routeParams.sportTitle;

        dataService.getData().then(function (data) {
            $scope.allData = {};
            $scope.allData = data.data;
        }).catch(function(e) {
            console.log(e);
        });

        $scope.setCurrent = function () {
            this.myVal = !this.myVal;
        };

    }

    setSportId (sport) {
        let sport1 = sport.title.toLowerCase();
        this.$scope.sportId = sport.sportId;
        this.$location.path('/sports/' + sport1);
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