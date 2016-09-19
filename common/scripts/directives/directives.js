/**
 * Created by yangbo on 2016/8/31.
 */
app.directive("myTabs",function(){
    return{
        restrict:"AE",
        transclude:true,
        scope:{},
        templateUrl:"myTabs.html",
        controller:["$scope",function($scope){
            var panes=$scope.scopes=[];
            $scope.select=function(pane){
                angular.forEach(panes,function(scope){
                    scope.selected=false;
                })
                pane.selected=true;
            };
            this.addScope=function(scope){
                if(panes.length==0){
                    $scope.select(scope);
                }
                panes.push(scope);
            }

        }]

    }
})
.directive("myPane",function(){
    return{
        restrict:"AE",
        scope:{
            tittle:"@"
        },
        transclude:true,
        require:"^myTabs",
        templateUrl:"myPane.html",
        link:function(scope,element,attr,myTabsController){
            myTabsController.addScope(scope);
        }
    }
})
  app.run(["$templateCache", function ($templateCache) {
        $templateCache.put("myTabs.html","<div class='table'>" +
            "<ul class='info-title-tab clearfix'>" +
            "<li ng-repeat='pane in scopes' ng-class='{active:pane.selected}' class='info-bar-item'>" +
            "<a  ng-click='select(pane)'>{{pane.tittle}}<a/>" +
            "</li>" +
            "</ul>" +
            "<div ng-transclude class='tab-content'></div>" +
            "</div>")
    }])
    .run(["$templateCache", function ($templateCache) {
        $templateCache.put("myPane.html","<div class='info-show-list' ng-show='selected' ng-transclude>" +
            "</div>")
    }])