'use strict';

class dataService{

    constructor($http, $location) {
        this.$http = $http;
        this.$location = $location;
    }

    changeDetailsUrl(id) {
        this.getItemById(id).then((item) => {
            let itemColor;
            let itemBrand = item.data.brand.split(' ').join('_');
            item.data.color.indexOf(' ') >= 0 ?  itemColor = item.data.color.split(' ').join('_') : itemColor = item.data.color.split('/').join('_');
            let itemName = `${itemBrand}_${item.data.name.split(' ').join('_')}_${itemColor}`;
            this.$location.url(`/details/${itemName}/${item.data.id}`);
        })
    }

    getData(){
        return this.$http.get('/api/data');
    }

    getItemById(id){
        return this.$http.get(`/api/item/${id}`);
    }


    findInJsonById(data, id){
        for(let i = 0; i < data.sports.length; i++) {
            for(let j = 0; j < data.sports[i].categories.length; j++) {
                for(let k = 0; k < data.sports[i].categories[j].subCategories.length; k++) {
                    for(let l = 0; l < data.sports[i].categories[j].subCategories[k].items.length; l++) {
                        if(data.sports[i].categories[j].subCategories[k].items[l].id === id)
                            return data.sports[i].categories[j].subCategories[k].items[l];
                    }
                }
            }
        }
    }
}

dataService.$inject = ['$http', '$location'];
module.exports = dataService;