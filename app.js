angular.module('app',[]).controller('mainCtrl', function ($scope) {
  $scope.tasks = [
    {content: "Jiza",
     priority: "low"
    },
     {content: "Postirat",
     priority: "low"
    }];
  
    $scope.archiveTasks = [];
    $scope.newTask={};
  
  $scope.toArchive = function(ind){
    $scope.archiveTasks.push($scope.tasks[ind]);
    $scope.tasks.splice(ind,1);
  }
  
  $scope.deleteTask = function(ind) {
    $scope.tasks.splice(ind,1);
  }
  $scope.deleteTaskFromArchive = function(ind) {
    $scope.archiveTasks.splice(ind,1);
  }
  
  $scope.addTask = function() {
    $scope.tasks.push($scope.newTask);
    $scope.newTask = {};
  }
});