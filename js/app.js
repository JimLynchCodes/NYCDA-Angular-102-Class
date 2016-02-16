angular.module('MyApp', [])

    .controller('MainController', function($scope) {
        var self = this;
        // self.greeting = 'Hello World!';

        console.log("FUCK");
        // self.simpleArray = ['Item1', 'Item2', 'Item3'];

        // self.interArray = [{
        // 	name: 'george'
        // }, {
        // 	name: 'Harry'
        // }, {
        // 	name: 'Sally'
        // }];


        // self.states = {
        // 	CA:'Clifornia',
        // 	NY: 'New York',
        // 	FL: 'Florida'
        // };

        // self.username = 'tommy';

        self.daFuck = function() {
          console.log("ok.. " + self.classObject.red);
        };

        self.myDog = {
            name:'Max'
        };

        self.myCat = {
            name:'Sally'
        };

        self.myCow = {
            name:'Harry'
        };

        self.animalSelected = self.myCow;


        self.onButtonClick = function () {
            alert('you clicked the button!');
        };

        self.classObject = {
            red:false,
            green:false,
            yellow:false
        }

    });

/**
 * Created by bobolicious3000 on 2/15/16.
 */
