angular.module('MyApp', [])

    .controller('MainController', function($scope) {
        var self = this;

        self.noneCheckBoxClicked = function() {

            console.log("none clicked");
            self.classObject = {
                red:false,
                blue:false,
                green:false,
                yellow:false}
        };

        self.createItemButtonClicked = function() {
            console.log("the input text is " + self.currentInputText);

            var newItem = {
                name: self.currentInputText,
                items: []
            };

            self.currentFolder.items.push(newItem);

            console.log("items in 1: " + self.folders[0].items);
            console.log(self);
            console.log(this);

        };

        self.expandAll = function() {
            for (var i=0; i < self.folders.length; i++)
            {
                self.folders[i].expanded = true;
            }
        };

        self.collapseAll = function() {
            for (var i=0; i < self.folders.length; i++)
            {
                self.folders[i].expanded = false;
            }
        };

        self.folderClicked = function(folderClicked) {
            folderClicked.expanded = !folderClicked.expanded;
        };

        self.folders = [
            {
                name:"first folder",
                expanded:false,
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
                expanded:false,
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
