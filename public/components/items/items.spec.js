describe('items controller', function () {

    let item = {
        id: '1',
        name: 'Crossover Basketball Shorts Mens',
        color: 'Blue',
        brand: 'Nike'
    };

    beforeEach(module('myApp'));

    beforeEach(inject(function($controller){
        this.$controller = $controller;
        this.controller = new $controller("itemsController", {});
        spyOn(this.controller, 'goToDetails').and.callThrough();
        this.controller.goToDetails(item);
    }));

    it('should have been called with item object', function () {
        expect(this.controller.goToDetails).toHaveBeenCalled();
        expect(this.controller.goToDetails).toHaveBeenCalledWith(item);
    });

});