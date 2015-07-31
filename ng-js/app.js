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
    'ngSanitize',
    'shoppinpal.mobile-menu'
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
                    controller:'index'

                }


            }
        })


        .state('intro',{
            url:"/intro",
            resolve:{
                'MyServiceData':function(MyService){
                    // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
                    return MyService.promise;
                }
            },

            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/intro.html' ,
                    controller:'loader'

                }


            }
        })

        .state('home',{
            url:"/home",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/home.html' ,
                    controller:'home'

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


gartitube.controller('index', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog) {



    $scope.init=function(){




        $scope.username=angular.element( document.querySelector( '#username' )).val();
        $scope.deviceid=angular.element( document.querySelector( '#deviceid' )).val();
        //alert($scope.username+'='+$scope.deviceid);
        if( ($scope.username)!='' &&  ($scope.deviceid)!=''){

            $scope.userinfo={
                username:$scope.username,
                deviceid:$scope.deviceid

            }



            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/register',
                data    : $.param($scope.userinfo),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                if(data>0){
                    $cookieStore.put('username',data);
                    $scope.username=''
                    $scope.deviceid=''
                    $scope.redirected='yes';
                    angular.element( document.querySelector( '#username' )).val('');
                    angular.element( document.querySelector( '#deviceid' )).val('');
                    $state.go('home');
                }
                else{
                    $cookieStore.put('loginfail','yes')
                    $scope.dialog1 = ngDialog.open({
                        template: '<div><div>Your Login failed .. please try again!</div><div>',
                        plain: true,
                        //showClose:false,
                        scope:$scope
                    });
                    $state.go('intro');

                }



            });
            //$scope.redirect();





        }else{
            $scope.redirect();
        }




    };

    setTimeout(function(){


        $scope.init();

    },3000);



    $scope.redirect=function(){


       // alert($cookieStore.get('username'));
        if( $cookieStore.get('username')>0){

            //alert($cookieStore.get('username'));
            $scope.username=''
            $scope.deviceid=''
            angular.element( document.querySelector( '#username' )).val('');
            angular.element( document.querySelector( '#deviceid' )).val('');
            $state.go('home');
        }else{
            //alert(2343);

            setTimeout(function(){
                $state.go('intro');
            },6000);
        }

    }


})

gartitube.controller('loader', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog) {

    alert("this is home");
})

gartitube.controller('loader', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog) {


    $scope.init=function(){

        $scope.username=angular.element( document.querySelector( '#username' )).val();
        $scope.deviceid=angular.element( document.querySelector( '#deviceid' )).val();
        //alert($scope.username+'='+$scope.deviceid);
        if( ($scope.username)!='' &&  ($scope.deviceid)!=''){

            $scope.userinfo={
                username:$scope.username,
                deviceid:$scope.deviceid

            }



            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/register',
                data    : $.param($scope.userinfo),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                if(data>0){
                    scope.username=''
                    $scope.deviceid=''
                    angular.element( document.querySelector( '#username' )).val('');
                    angular.element( document.querySelector( '#deviceid' )).val('');
                    $cookieStore.put('username',data);
                    alert(data);
                    $state.go('home');
                }
                else{
                    $cookieStore.put('loginfail','yes')
                    $scope.dialog1 = ngDialog.open({
                        template: '<div><div>Your Login failed .. please try again!</div><div>',
                        plain: true,
                        //showClose:false,
                        scope:$scope
                    });
                    $state.go('intro');

                }



            });





        }

    };

    setTimeout(function(){

        $scope.init();

    },3000);




    $scope.san= function(url) {
        alert( MyService.doStuff('slider1'));
        // $sce.getTrustedUrl(url);

    };

    var data=(MyService.doStuff('slider1'));
    // alert(data);
    $scope.images = [{
        //src: 'ng-images/mobile300.png',
        title: 'Pic 1',
        content:"partials/slider1.html"
    }, {
        // src: 'ng-images/T-Mobile-Comet-1.jpg',
        title: 'Pic 2',
        content:"partials/slider2.html"
    },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:"partials/slider3.html"
        },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:"partials/slider4.html"
        },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:"partials/slider5.html"
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



    if( $cookieStore.get('loginfail')=='yes'){
        $scope.currentIndex = $scope.images.length - 1;
        $cookieStore.remove('loginfail');
    }
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




gartitube.service('MyService', function($http) {
    var slider1data = null;
    var promise=null;
    var slider2data = null;
    var slider3data = null;
    var slider4data = null;
    var slider5data = null;
    var testimonialjson = null;

    var slider1 = $http.get('partials/slider1.html').success(function (slider1) {
        //alert(data);
        slider1data=slider1;
    });
    var slider2 = $http.get('partials/slider2.html').success(function (slider2) {
        //alert(data);
        slider2data=slider2;
    });
    var slider3 = $http.get('partials/slider3.html').success(function (slider3) {
        //alert(data);
        slider3data=slider3;
    });
    var slider4 = $http.get('partials/slider4.html').success(function (slider4) {
        //alert(data);
        slider4data=slider4;
    });
    var slider5 = $http.get('partials/slider5.html').success(function (slider5) {
        //alert(slider5);
        slider5data=slider5;
    });
    return {
        promise:slider1,
        setData: function (slider5data) {
            //alert(slider5data);
            slider1data = slider5data;
        },
        doStuff: function (t) {
            //alert(myData);
            if(t=='slider1')
            //alert(data);
                return slider1data;//.getSomeData();
            if(t=='slider2'){

                return slider2data;

            }
            if(t=='slider3'){
                return slider3data;

            }
            if(t=='slider4'){
                return slider4data;

            }
            if(t=='slider5'){
                return slider5data;

            }
        }
    };

});
