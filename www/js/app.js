// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'net.sourceforge.bsmi', // App bundle ID
  name: 'BSMI Mobile', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});
var infoView = app.views.create('#view-info', {
  url: '/info/'
});

var menuView = app.views.create('#view-menu', {
  url: '/menu/'
});

var exploreView = app.views.create('#view-explore', {
  url: '/explore/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

$(document).ready(function(){
       $.ajaxSetup({ cache: false });						      
      date_time('timepanelmasehi');
      date_time_hijri('timepanelhijri');
      
      gempadirasakan();
    
      gempaterkini();
      
      beritaterbaru();
      
      openBrowser();
      
      openPreview2();

      explorenews();
      
      openLiveTV();
});
		
