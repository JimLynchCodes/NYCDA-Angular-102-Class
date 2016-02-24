angular.module('MyApp', [])

    .controller('MainController', function($scope) {
        var self = this;

        self.editModeEnabled = false;

        self.savedUser = {
            firstName: "Jim",
            lastName: "Lynch",
            email: "jim@jim.jim"
        };

        self.onEditButtonClicked = function() {
            self.editModeEnabled = true;
            self.editingUser = angular.copy(self.savedUser);

            console.log("Edit button clicked.");
        };

        self.onCancelButtonClicked = function() {
            self.editModeEnabled = false;
            self.editingUser = angular.copy(self.savedUser);

            console.log("Cancel button clicked.");
        };

        self.onSaveButtonClicked = function() {
            self.editModeEnabled = false;
            self.savedUser = angular.copy(self.editingUser);

            console.log("Save button clicked.");
        };



    });