pytx.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'HomeCtrl',
      templateUrl: tpl('home.html'),
    })
    .when('/sponsors', {
      controller:'PageCtrl',
      templateUrl: tpl('page.html'),
      title: 'Our Sponsors'
    })
    .when('/sponsors/prospectus', {
      controller:'PageCtrl',
      templateUrl: tpl('page.html'),
      title: 'Sponsor Prospectus'
    })
    .when('/about/privacy-policy', {
      controller:'PageCtrl',
      templateUrl: tpl('page.html'),
      title: 'Privacy Policy'
    })
    .when('/about/code-of-conduct', {
      controller:'PageCtrl',
      templateUrl: tpl('page.html'),
      title: 'Code of Conduct'
    })
    .when('/about/registration', {
      controller:'PageCtrl',
      templateUrl: tpl('page.html'),
      title: 'Registration Info'
    })
    
    .when('/speakers/call-for-proposals', {
      controller:'PageCtrl',
      templateUrl: tpl('page.html'),
      title: 'Call for Proposals'
    })
    .when('/speakers/proposals', {
      controller:'ProposedTalksCtrl',
      templateUrl: tpl('speakers/proposed-talks.html')
    })
    .when('/speakers/submit-talk', {
      controller:'SubmitTalkCtrl',
      templateUrl: tpl('speakers/submit-talk.html')
    })
    .when('/talk/:id', {
      controller:'TalkDetailCtrl',
      templateUrl: tpl('speakers/talk-detail.html')
    })
    
    .when('/user/login', {
      controller:'LoginCtrl',
      templateUrl: tpl('users/login.html')
    })
    .when('/user/my-talks', {
      controller:'TalkListCtrl',
      templateUrl: tpl('users/my-talks.html')
    })
    .when('/user/my-profile', {
      controller:'ProfileCtrl',
      templateUrl: tpl('users/my-profile.html')
    })
    .when('/user/talk/:id', {
      controller:'EditTalkCtrl',
      templateUrl: tpl('users/edit-talk.html')
    })
    .when('/user/sign-up', {
      controller:'SignUpCtrl',
      templateUrl: tpl('users/sign-up.html')
    })
    .when('/user/verify', {
      controller:'VerifyCtrl',
      templateUrl: tpl('users/verify.html')
    })
    .when('/user/:username', {
      controller:'UserDetailCtrl',
      templateUrl: tpl('users/user-detail.html')
    })
    
    .otherwise({controller:'ErrorCtrl', templateUrl: tpl('404.html')});
});
