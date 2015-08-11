(function() {
   var app = angular.module("noteApp", []);

   app.controller("NoteController", ['$http',  function($http) {
  	   var obj = this;
  	   obj.notes = [];
  	   $http.get('./title-notes.json').success(function (data) {
  	   	   obj.notes = data;
  	   });
  }]);

  app.controller("ContentController", ['http', function($http) {
       var content = this;
       content.statik = [];
       $http.get('./content-static.json').success(function (data) {
           content.statik = data;
       });
  }]); 

  app.controller('ReviewController', function() {
  	   this.review = {},

  	   this.addReview = function(note) {
  	   	  note.reviews.push(this.review);

  	   	  this.review = {}
  	   };
  });



})();