/**
 * Created by bobolicious3000 on 2/29/16.
 */
(function() {

    angular
        .module('CalculatorModule', [])
        .service('CalculatorService', function () {
            var self = this;
            self.calculateAverage = function(assignmentArray) {

                var sum = 0;

                angular.forEach(assignmentArray, function(a)  {
                    sum += parseInt(a.grade);
                });

                var average = sum / assignmentArray.length;
                return Math.round(average);
            };

            self.calculateLetterGrade = function(numberGrade) {

                var letterGrade = "F";

                if (numberGrade >= 92) {
                    letterGrade = "A";
                } else if (numberGrade >= 84) {
                    letterGrade = "B";
                } else if (numberGrade >= 75) {
                    letterGrade = "C";
                } else if (numberGrade >= 64) {
                    letterGrade = "D";
                }

                return letterGrade;
            };

            self.calculatePassing = function(letterGrade) {

                var passOrFail = "Passing";

                if (letterGrade === "F") {
                    passOrFail = "Failing";
                }

                return passOrFail;
            }


        })

})();