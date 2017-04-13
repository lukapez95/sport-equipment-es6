'use strict';

class MainCtrl{

    constructor($scope, $routeParams, $location, dataService) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$location = $location;
        this.dataService = dataService;

        $scope.allData = {};
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

        $scope.displayItem = function () {
            $scope.shownItem = this.item;
        };

    }

    setSportId (sport) {
        let sport1 = sport.title.toLowerCase();
        this.$scope.sportId = sport.sportId;
        this.$location.path('/sports/' + sport1);
    }


    send () {
        location.reload();
    }
}

MainCtrl.$inject =  ['$scope', '$routeParams', '$location', 'dataService'];
module.exports = MainCtrl;