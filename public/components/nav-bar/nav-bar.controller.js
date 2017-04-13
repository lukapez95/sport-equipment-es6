'use strict';

class navbarController{

    constructor($location, dataService) {
        this.$location = $location;
        this.dataService = dataService;
        this.allData = {};

        dataService.getData().then((data) => {
            this.allData = data.data;
        }).catch(function(e) {
            console.log(e);
        });
    }

    setSportId (sport) {
        let sport1 = sport.title.toLowerCase();
        this.sportId = sport.sportId;
        this.$location.path('/sports/' + sport1);
    }

    isActive (viewLocation) {
        return viewLocation === this.$location.path();
    }
}

navbarController.$inject = ['$location', 'dataService'];
module.exports = navbarController;