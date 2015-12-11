var thisApp = angular.module('ContactsExplorer');
angular.module('ContactsExplorer')
	.config(function($routeProvider){
		console.log("Configuring routes");
		$routeProvider.when('/',{
			templateUrl: "./templates/contacts_all.html",
			controller: "ContactsController",
			controllerAs: "contacts"
		})
		.when('/details/:id',{
			templateUrl: "./templates/contacts_details.html",
			controller: "DetailsController",
			controllerAs: "details"
		})
		.when('/edit/:id',{
			templateUrl: "./templates/contacts_edit.html",
			controller: "EditController",
			controllerAs: "editor"
		})
		.when('/add',{
			templateUrl: "./templates/contacts_add.html",
			controller: "AddController",
			controllerAs: "adder"
		})
		.otherwise({
			redirectTo:'/'
		});
	});
/*
.when(path,route)

.otherwise(params)
*/