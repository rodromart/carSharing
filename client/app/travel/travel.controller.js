'use strict';

(function(){

  class TravelController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.awesomeTravel = [];

      $http.get('/api/travels').then(response => {
        this.awesomeTravel = response.data;
        socket.syncUpdates('travel', this.awesomeTravel);
      });

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('travel');
      });
    }

    addTravel(){
      if (this.newTravel) {
        this.$http.post('/api/travels',
        {
          carOwner:this.User,
          origin:this.newTravel.origin,
          destination: this.newTravel.destination,
          seats: this.newTravel.seats
        });
        this.newTravel = '';
      }
    }

    deleteTravel(travel) {
      this.$http.delete('/api/travel/' + travel._id);
    }
  }


  angular.module('carsharingApp')
    .controller('TravelController', TravelController);


})();
