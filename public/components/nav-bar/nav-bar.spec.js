describe('main controller', function () {

    beforeEach(module('myApp'));

    beforeEach(inject(function($controller){
        this.$controller = $controller;
        this.controller = new $controller("MainCtrl", {});
        spyOn(this.controller, 'setData').and.callThrough();
        this.controller.setData();
    }));

    it('allData should be defined', function () {
        expect(this.controller.allData).toBeDefined();
        expect(this.controller.allData).toEqual({});
    });

    it('setData should have been called', function () {
       expect(this.controller.setData).toHaveBeenCalled();
       expect(this.controller.setData).toHaveBeenCalledWith();
    });

    it('clicked should be null', function () {
       expect(this.controller.clicked).toEqual(null);
    });

});