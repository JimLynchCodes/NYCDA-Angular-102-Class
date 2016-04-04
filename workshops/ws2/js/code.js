(function(){

angular.module('MyApp', ['CalculatorModule'])

    .controller('MainController', function($scope, $log, CalculatorService, StudentInfo) {
        var self = this;
        self.studentInfo = new StudentInfo("Jim");
        $log.log("student info is: " + self.studentInfo);

        self.onAddButtonClicked = function() {
            self.studentInfo.addAssignment();
            $log.log("Adding assignment!");
        };

    })

})();
