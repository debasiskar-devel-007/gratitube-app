/**
 * Created by debasis on 18/7/15.
 */


'use strict';

/* App Module */

var gartitube = angular.module('gartitube', [
    'ui.router',
    'ngAnimate',
    'angularValidator',
    'ngCookies',
    'ngDialog',
    'ngSanitize'
    // 'homeControllers'
]);



gartitube.config(function($stateProvider, $urlRouterProvider,$sceProvider,$sceDelegateProvider) {


    //
    $sceProvider.enabled(false);
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from outer templates domain.
        'partials/**'
    ]);
    // For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");
    //
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",

            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                    controller:'loader'

                }


            }
        })


        .state('intro',{
            url:"/intro",

            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/intro.html' ,
                    controller:'loader'

                }


            }
        }

    )

});


gartitube.directive('slider', function($timeout) {
    return {
        restrict: 'AE',
        replace: true,
        //$sceProvider:false,
        scope: {
            images: '='
        },
        link: function(scope, elem, attrs) {},
        templateUrl: 'partials/slider.html'
    };
});



gartitube.controller('loader', function($scope,$sce,$http,$templateCache,$compile) {


    $scope.san= function(url) {
        alert(url);

        $sce.parseAsResourceUrl(value['content']);
        $sce.trustAsUrl(value['content']);

        $http({
            method  : 'GET',
            async:   false,
            url     : url,
            //data    : {username: $stateParams.userId},  // pass in data as strings
           // headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            alert( data);

        });
        return url;
        // $sce.getTrustedUrl(url);

    };

    $scope.images = [{
        //src: 'ng-images/mobile300.png',
        title: 'Pic 1',
        content:$sce.trustAsUrl('partials/slider1.html')
    }, {
        // src: 'ng-images/T-Mobile-Comet-1.jpg',
        title: 'Pic 2',
        content:$sce.trustAsUrl('partials/slider2.html')
    },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:$sce.trustAsUrl('partials/slider3.html')
        },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:$sce.trustAsUrl('partials/slider4.html'),
        },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:$sce.trustAsUrl('partials/slider5.html')
        }
    ];
    //alert($sce.isEnabled());


    angular.forEach($scope.images, function(value, key) {
        //this.push(key + ': ' + value);
        //alert(value['content']);
        $sce.parseAsResourceUrl(value['content'])
        //alert($sce.trustAsUrl(value['content']));
    });
    //$sce.trustAsUrl('partial/slider1.html')




    $scope.currentIndex = 0; // Initially the index is at the first image

    $scope.next1= function() {
       // $sce();
        //alert(8);
        $scope.currentIndex < $scope.images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex =  $scope.currentIndex;
       // alert( $scope.currentIndex);
    };

    $scope.prev1 = function() {
       // $sce();
        $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = 0;
        //alert( $scope.currentIndex);
    };

    $scope.$watch('currentIndex', function() {
        //alert(9);
        $scope.images.forEach(function(image) {
            //alert(image);
            //$(image).hide(2000);
            image.visible = false; // make every image invisible
        });

        $scope.images[$scope.currentIndex].visible = true; // make the current image visible
    });

});




