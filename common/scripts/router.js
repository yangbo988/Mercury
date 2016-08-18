var allowState = [
    'app.home',
    'user.login',
    'app.storeroom',
    'app.housesPic',
    'user.register',
    'user.PasswordFound',
    'app.invite',
    'app.housesBuy',
    'app.brand',
    'app.BrandDetail'

];
app.config(['$stateProvider','$urlRouterProvider','MAIN_CONFIG',function($stateProvider,$urlRouterProvider,MAIN_CONFIG){
        $urlRouterProvider
            .otherwise('/home');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'modules/Index/view/index.html',
                data:{title:'首页'}
            })
            .state('goodsDetail',{
                url:'/goodsDetail',
                templateUrl:'modules/Index/view/goodsDetail.html'
            })
    }]);