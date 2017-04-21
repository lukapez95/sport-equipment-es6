'use strict';

class MainCtrl{

    constructor($routeParams, $location, dataService) {
        this.$routeParams = $routeParams;
        this.$location = $location;
        this.dataService = dataService;

        this.clicked = null;
        this.allData = {};
        this.setData();
        this.sportTitle = $routeParams.sportTitle;

    }


    setCurrent (index) {
        index === this.clicked ? this.clicked = -1 : this.clicked = index;
    }

    setData () {
        return this.dataService.getData().then((data)=>{
            this.allData = data.data;
            return this.allData;
        })
    }

    setSportId (sport) {
        let sport1 = sport.title.toLowerCase();
        this.$location.path(`/sports/${sport1}`);
    }

    isActive (viewLocation) {
        return viewLocation === this.$location.path();
    }

    displayItem (item) {
        this.shownItem = item;
    }

    send () {
        location.reload();
    }
}

MainCtrl.$inject =  ['$routeParams', '$location', 'dataService'];
module.exports = MainCtrl;