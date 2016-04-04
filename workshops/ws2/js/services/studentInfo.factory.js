/**
 * Created by bobolicious3000 on 2/29/16.
 */
(function() {
    angular
        .module('MyApp')
        .factory('StudentInfo', function($log, CalculatorService) {
            $log.log("Add clicked");

            function StudentInfo(name) {
                var self = this;
                self.studentName = name;
                self.numberGrade = "a";
                self.letterGrade = "b";
                self.passOrFail = "c";

                self.assignments = [{
                    student:"Bobby Lee",
                    name:"homework 1",
                    grade:23
                },
                    {
                        student:"Bobby Lee",
                        name:"homework 2",
                        grade:25
                    }

                ];
            }

            StudentInfo.prototype.addAssignment = function() {
                // this inside of prototype functions is
                var self = this;

                console.log(self.name);
                console.log(self.assignment);
                console.log(self.grade);

                var assignment = {
                    name:self.name,
                    assignment: self.assignment,
                    grade:self.grade
                };

                // objects with prototype functions

                // factory for student info with assignmentsArray, addAssignment function, grades variables

                self.assignments.push(assignment);
                var added = parseInt(self.grade) + 7;
                $log.log(added);

                self.currentNumberGrade = CalculatorService.calculateAverage(self.assignments);
                self.letterGrade = CalculatorService.calculateLetterGrade(self.currentNumberGrade);
                self.passOrFail = CalculatorService.calculatePassing(self.assignments);

                $log.log("self.currentNumberGrade " + self.currentNumberGrade);
                $log.log("self.letterGrade " + self.letterGrade);
                $log.log("self.passOrFail " + self.passOrFail);



            };

            return StudentInfo;

        })

})();