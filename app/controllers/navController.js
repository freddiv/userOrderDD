(function() {
  
    var NavController = function ($scope, $log, $window, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        
        function init() {
            customersFactory.getCustomers()
                .then(function(response) {
                    $scope.customers = response.data;
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }
        
        init();

    };
    
    NavController.$inject = ['$scope', '$log', '$window', 'customersFactory', 
                                   'appSettings'];

    angular.module('customersApp')
      .controller('navController', NavController);
    
}());