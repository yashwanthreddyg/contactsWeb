angular.module('ContactsExplorer')
	.controller('AddController',['NetworkService','$location',function(NetworkService,$location){
		
		console.log("AddController");
		var controller=this;
		controller.contact={
			FirstName:"",
			LastName:"",
			Email:"",
			Phone:""
		};

		controller.goHome = function(){
			$location.path("/all");
		}

		controller.addContact =function(){
			NetworkService.addNewContact(controller.contact,function(data){
				controller.goHome();
			},function(data){
				console.log("deletion failed");
			});
		};
	}]);