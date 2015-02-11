'use strict';

describe('Controller: <%= classedName %>Ctrl', function () {

	// load the controller's module
	beforeEach(module('<%= scriptAppName %>.<%= _.slugify(name) %>.controller'));

	var controller;
	var scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		controller = $controller('<%= classedName %>ListController', {
			// $scope: scope
		});
	}));

	it('object should exist', function () {
		Should.exist(controller);
		controller.should.be.an.instanceof(Object);
	});

	it('should have an awesome title property', function () {
		Should.exist(controller.title);
		controller.title.should.equal('<%= name %>');
	});

	it('should have a working doSomething method', function () {
		Should.exist(controller.doSomething);
		controller.doSomething().should.equal('<%= name %> - a sublime controller');
	});
});
