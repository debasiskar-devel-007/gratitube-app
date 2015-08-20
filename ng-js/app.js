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
    'ap.lateralSlideMenu',
    'com.2fdevs.videogular',
    'ui.calendar',
    'ui.bootstrap'
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
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/home.html' ,
                    controller:'home'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'home'

                }



            }
        }
    )


        .state('record',{
            url:"/record",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    //ontroller:'loader'
                    controller:'navigation'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/record.html' ,
                    controller:'record'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'record'

                }



            }
        }

    )



        .state('friends',{
            url:"/friends",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                 'navigation': { templateUrl: 'partials/navigation.html',
                 //ontroller:'loader'
                     controller:'navigation'

                 },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/friends.html' ,
                    controller:'friends'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                 controller:'record'

                 }



            }
        }

    )

        .state('logout',{
            url:"/logout",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
               /* 'navigation': { templateUrl: 'partials/navigation.html'
                    //ontroller:'loader'

                },*/

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/home.html' ,
                    controller:'logout'

                },
                /*'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'record'

                }*/



            }
        }

    )

        .state('share',{
            url:"/share",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/share.html' ,
                    controller:'share'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'record'

                }



            }
        })

            .state('templates',{
                url:"/templates",


                views: {

                    // the main template will be placed here (relatively named)
                    '': { templateUrl: 'index.html' },
                    'navigation': { templateUrl: 'partials/navigation.html',
                        controller:'navigation'
                        //ontroller:'loader'

                    },

                    // the child views will be defined here (absolutely named)
                    'content': { templateUrl: 'partials/templates.html' ,
                        controller:'templates'

                    },
                    'footer': { templateUrl: 'partials/footer.html' ,
                        controller:'record'

                    }



                }
            }

        )
        .state('chartity',{
            url:"/chartity",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/chartity.html' ,
                    controller:'chartity'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'record'

                }



            }
        }

    )
        .state('reminders',{
            url:"/reminders",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/reminders.html' ,
                    controller:'reminders'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'record'

                }



            }
        }

    )
        .state('details',{
            url:"/details",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/details.html' ,
                    controller:'details'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'record'

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

gartitube.directive('imageslider', function($timeout) {
    return {
        restrict: 'AE',
        replace: true,
        //$sceProvider:false,
        scope: {
            images: '='
        },
        link: function(scope, elem, attrs) {},
        templateUrl: 'partials/imageslider.html'
    };
});

gartitube.service('number',  function() {
    return {
        isPositive: function(operationPrice) {
            return String(operationPrice).indexOf("-") == -1;
        }
    };
});

gartitube.controller('index', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog) {


    if(typeof($cookieStore.get('recordFile')) != 'undefined'){

        var dialog1 = ngDialog.open({
            template: '<div><div>Processing...</div><div>',
            plain: true,
            //showClose:false,
            scope:$scope
        });

        setTimeout(function(){
            dialog1.close();
            $state.go('record');
            return;
        },5000);

    }

    var winh = $(window).height();
    var winw = $(window).width();

    $('.introbody').css('height',winh);
    $('.introbody').css('width',winw);

    $('.sliderbody').css('height',winh);
    $('.sliderbody').css('width',winw);



    $scope.init=function(){




        $scope.username=angular.element( document.querySelector( '#username' )).val();
        $scope.deviceid=angular.element( document.querySelector( '#deviceid' )).val();
        $scope.accessToken=angular.element( document.querySelector( '#accessToken' )).val();
        //alert($scope.username+'='+$scope.deviceid+"----"+$scope.accessToken);
        if( ($scope.username)!='' &&  ($scope.deviceid)!=''){

            $scope.userinfo={
                username:$scope.username,
                deviceid:$scope.deviceid,
                accessToken:$scope.accessToken
               // accessToken:$scope.accessToken

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
                    return;
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
                    return;

                }



            });
            //$scope.redirect();





        }else{
            $scope.redirect();
        }

/*        setTimeout(function(){
            var winh = $(window).height();
            var winw = $(window).width();

            $('.introbody').css('height',winh);
            $('.introbody').css('width',winw);

            $('.sliderbody').css('height',winh);
            $('.sliderbody').css('width',winw);

        },1000);
*/


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
            return;
        }else{
            //alert(2343);
           /* setTimeInterval(function(){



            },4000);*/

            setTimeout(function(){

                $state.go('intro');
                return;
            },3100);
        }

    }


})
gartitube.controller('record', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

    $cookieStore.put('username',34);

    $scope.filename = '';
    $scope.filetype = '';

    $scope.privacyVal = 'Public';
    $scope.recipientId = [];

    $scope.images = [{
            src: 'ng-images/anniversary.png',
            title: 'Pic 1'
        },
        {
            src: 'ng-images/bday.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/congrats.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/get-well.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/graduation.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/just-because.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/new-baby.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/new-home.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/religious-events.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/retirement.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/thank-you.png',
            title: 'Pic 2'
        },
        {
            src: 'ng-images/wedding.png',
            title: 'Pic 2'
        }
    ];

    $scope.currentIndex = 0;
    $scope.next1= function() {
        $scope.currentIndex < $scope.images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex =  0;
    };

    $scope.prev1 = function() {
        // $sce();
        $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.images.length - 1;
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



    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getfriendinfo',
        data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
        // data    : $.param({'username':34}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.friendList = data.data;

    });

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getCharityList'
    }) .success(function(data) {

        $scope.charityList = data;

    });

    $scope.selRecipient = function(id){
        var idx = $scope.recipientId.indexOf(id);
        if($scope.recipientId.indexOf(id) < 0){
            if($scope.recipientId.length){
                $scope.recipientId.push(id);
            }else{
                $scope.recipientId = [id];
            }
        }else{
            $scope.recipientId.splice(idx,1);
        }
    }

    $scope.sharegratitube=function(){

        $scope.formsubmitflag=0;
        //dialog1.close();
        //dialog2.close();
        ///alert(345);
        $scope.title=angular.element( document.querySelector( '#title' )).val();
        $scope.message=angular.element( document.querySelector( '#message' )).val();

        if($scope.recipientId.length <1) {
            $scope.formsubmitflag=1;

            var dialog5 = ngDialog.open({
                template: '<div><div>Please Select Atleast One Recipient</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });
        }

        if($scope.title.length<1) {
            $scope.formsubmitflag=1;

            var dialog1 = ngDialog.open({
                template: '<div><div>Please Enter a Title</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });
        }

        if($scope.message.length<1) {
            $scope.formsubmitflag=1;

            var dialog2 = ngDialog.open({
                template: '<div><div>Please Enter a Message</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });
        }

        if($scope.filename=='') {
            $scope.formsubmitflag=1;

            var dialog2 = ngDialog.open({
                template: '<div><div>Upload file</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });
        }

        if($scope.formsubmitflag==0 && $scope.filename!=''){

            var dialog1 = ngDialog.open({
                template: '<div><div>Sharing...</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });

            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/saveGratitube',
                data    : $.param({'filename':$scope.filename,'filetype':$scope.filetype,'title':$scope.title,'message':$scope.message,'user_name':$cookieStore.get('username'),'privacyVal':$scope.privacyVal,'recipientId':$scope.recipientId}),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {

                //alert(data);

                dialog1.close();
                $cookieStore.put('lastUpFileName',$scope.filename);
                $cookieStore.put('lastUpFileType',$scope.filetype);
                $cookieStore.put('lastUpFileTitle',$scope.title);

                $state.go('share');
            });
        }



    }


    if(typeof($cookieStore.get('recordFile')) != 'undefined'){

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/gettempfile',
            data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {

            $scope.filename = data.filename;
            $scope.filetype = data.filetype;



            $cookieStore.remove('recordFile');

        });



    }


    $scope.uploadvideochoose=function(){

        $cookieStore.put('recordFile',1);
        window.location = "uploadvideoapp";
    }


    $scope.uploadvideo=function(){

        //alert(89);
        $cookieStore.put('recordFile',1);
        window.location = "uploadvideochoose"
    }

    $scope.uploadimage=function(){

        //alert(89);
        $cookieStore.put('recordFile',1);
        window.location = "uploadimageapp"
    }

    $scope.saveRecord = function(){
        $state.go('home');
        return;
    }

})
gartitube.controller('share', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

    $scope.fbShare = function(){

        var dialog1 = ngDialog.open({
            template: '<div><div>Sharing...</div><div>',
            plain: true,
            //showClose:false,
            scope:$scope
        });

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/sharetofb',
            data    : $.param({'filename':$cookieStore.get('lastUpFileName'),'filetype':$cookieStore.get('lastUpFileType'),'username':$cookieStore.get('username')}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            dialog1.close();
        });

    }

    $scope.emailShare = function(){
        $scope.dialog2 = ngDialog.open({
            template: '<div><input type="text" id="emailList" /><input type="button" ng-click="emailShare1()" value="send"><div>',
            plain: true,
            //showClose:false,
            scope:$scope
        });
    }

    $scope.emailShare1 = function(){
        $scope.dialog2.close();

        var dialog1 = ngDialog.open({
            template: '<div><div>Sharing...</div><div>',
            plain: true,
            //showClose:false,
            scope:$scope
        });

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/sharetoemail',
            data    : $.param({'userMail':$('#emailList').val(),'filename':$cookieStore.get('lastUpFileName'),'filetype':$cookieStore.get('lastUpFileType'),'filetitle':$cookieStore.get('lastUpFileTitle')}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            dialog1.close();
        });
    }

});

gartitube.controller('templates', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {
    // alert(1);
});

gartitube.controller('chartity', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {
    // alert(1);
});

gartitube.controller('reminders', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number,$compile, $timeout, uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* config object */
    $scope.uiConfig = {
        calendar:{
            height: 450,
            editable: true,
            header:{
                left: 'title',
                center: '',
                right: 'today prev,next'
            },
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender
        }
    };

    /* event source that pulls from google.com */
    $scope.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
        className: 'gcal-event',           // an option!
        currentTimezone: 'America/Chicago' // an option!
    };
    /* event source that contains custom events on the scope */
    $scope.events = [
        {title: 'All Day Event',start: new Date(y, m, 1)},
        {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
        {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
        {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
        var s = new Date(start).getTime() / 1000;
        var e = new Date(end).getTime() / 1000;
        var m = new Date(start).getMonth();
        var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
        callback(events);
    };

    $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];


});


gartitube.controller('details', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {
    // alert(1);
});


gartitube.controller('navigation', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {


    $scope.inIt= function () {

        $scope.userinfo={
            username:$cookieStore.get('username')
            //username:34


        }


        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getuserpic',
            data    : $.param($scope.userinfo),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //alert(data.id);
            //alert(data.name);
            $scope.userimage=data.id;
            $scope.name=data.name;



        });
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getfriendinfo',
            data    : $.param($scope.userinfo),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
           // alert(angular.fromJson(data));
            //console.log(data.summary['total_count']);
            //alert(data.name);
            $scope.friendno=data.summary['total_count'];
            //$scope.name=data.name;



        });


    }

    setTimeout(function(){

        $scope.inIt();
    },3100);

})

gartitube.controller('home', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

    //alert("this is home");

    //alert($cookieStore.get('username'));

    $scope.fileList = [];

    $scope.tabs = [{
        title: 'My Gratitubes',
        url: 'one.tpl.html'
    }, {
        title: 'Good news',
        url: 'two.tpl.html'
    }, {
        title: 'Trending',
        url: 'three.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getallfile',
        data    : $.param({'user_id':$cookieStore.get('username')}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(result) {

        $scope.fileList = result;

    });

    $scope.showFile = function(item){
        var hhh = '';
        if(item.filetype == 'image'){
            hhh = '<img src="http://torqkd.com/uploads/video1/images/'+item.filename+'.jpg" alt="#" style="width: 100%;" />';
        }
        if(item.filetype == 'video'){
            hhh = '<videogular>\
                <vg-media vg-src="[{src: (\'http://torqkd.com/uploads/video1/converted/'+item.filename+'.mp4\'), type: \'video/mp4\'}]" vg-native-controls="true" ></vg-media>\
                <vg-poster vg-url="\'http://torqkd.com/uploads/video1/thumb/'+item.filename+'.jpg\'"></vg-poster>\
            </videogular>';
        }


        $scope.dialog1 = ngDialog.open({
            template: '<div>'+hhh+'<div>',
            plain: true,
            showClose:false,
            scope:$scope
        });
    }

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
                    return;
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
                    return;

                }



            });





        }



    };

    setTimeout(function(){
        var winh = $(window).height();
        var winw = $(window).width();

        $('.introbody').css('height',winh);
        $('.introbody').css('width',winw);

        $('.sliderbody').css('height',winh);
        $('.sliderbody').css('width',winw);


        $('.arrows').css('height',winh);
        $('.arrows').css('width',winw);

        $('.arrowswrapper').css('height',winh);
        $('.arrowswrapper').css('width',winw);

        $('.arrows').css('display','block');

    },1000);

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



gartitube.controller('logout', function($scope,$http,$state,$cookieStore,$cookies) {


    $scope.init = function () {
        $cookieStore.remove('username');
        //$cookieStore.remove('userid');
        $state.go('index');
        //alert($cookieStore.get('userid'));
    };

    $scope.init();

});


gartitube.controller('friends', function($scope,$http,$state,$cookieStore,$cookies) {

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getfriendinfo',
         data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
       // data    : $.param({'username':34}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.friendList = data.data;

    });

    $scope.friendStatus = [];

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getUserFriendRel',
        data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
        //data    : $.param({'username':34}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.friendStatus = data;

    });

    $scope.changeStatus = function(itemId,status){
        $scope.friendStatus[itemId] = status;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/userfriendrel',
            data    : $.param({'username':$cookieStore.get('username'),'friend_id':itemId,'status':status}),  // pass in data as strings
        //    data    : $.param({'username':34,'friend_id':itemId,'status':status}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
        });
    }

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
