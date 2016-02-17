angular.module('MyApp', [])

    .controller('MainController', function($scope) {
        var self = this;

        self.folderOrItemRadioButton = "folder";

        self.allFalseObject = {
            red:false,
            blue:false,
            green:false,
            yellow:false
        };

        self.deselectNoneCheckbox = function() {
            self.isNoneSelected = false;
        }

        self.classObject = self.allFalseObject;

        self.noneCheckBoxClicked = function() {

            console.log("none clicked");
            self.classObject = { red:false,
                blue:false,
                green:false,
                yellow:false}
        };

        self.submitButtonClicked = function() {
            console.log("the input text is " + self.currentInputText);

            var newItem = {
                name: self.currentInputText,
                items: []
            };

            self.folders.push(newItem);

            console.log(self);
            console.log(this);

        };

        self.folders = [
            {
                name:"first folder",
                items: [
                    {
                        name: "First item"
                    },
                    {
                        name: "Seconds Item"
                    }

                ]
            },
            {
                name:"second folder",
                items: [
                    {
                        name: "First item"
                    },
                    {
                        name: "Seconds Item"
                    }

                ]
            }

        ];


    });

/**
 * Created by bobolicious3000 on 2/15/16.
 */
