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
            item.data.color.indexOf(' ') >= 0 ?  itemColor = item.data.color.split(' ').join('_') :
                                                 itemColor = item.data.color.split('/').join('_');
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

    
    static findInJsonById(data, id){
        for(let sport of data.sports) {
            for(let category of sport.categories) {
                for(let subCategory of category.subCategories) {
                    for(let item of subCategory.items) {
                        if(item.id === id) return item;
                    }
                }
            }
        }
    }
}

dataService.$inject = ['$http', '$location'];
module.exports = dataService;