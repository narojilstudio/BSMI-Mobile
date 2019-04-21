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
/*
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
*/
var exploreView = app.views.create('#view-explore', {
  url: '/explore/'
});

var akunView = app.views.create('#view-akun', {
  url: '/akun/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {

  if (!$$('#my-login-screen')[0].checkValidity()) {
        //console.log('Check Validity!');
        return;
  }
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val(); 
  app.preloader.show();
            $.ajax({
                type: "POST",
                data : { login: 'yes', usr: username, pw: password },
                url: serverhost+"loginapi.php",
                error: function(jqXHR, textStatus, errorThrown) {app.dialog.alert('Error');app.preloader.hide();},
                success: function(data, textStatus, jqXHR){}
            })
            .done(function (data) {
                    //console.log(data);
                    var password = randomPassword(10);
                    window.localStorage["password"] = password;
                    var tokenenc = enkripsi(data, password);
                    
                            $.ajax({
                                //headers: {'Authorization' : 'Bearer '+data},
                                //xhrFields: {withCredentials: true},
                                //beforeSend: function(xhr) { xhr.setRequestHeader('Authorization' , 'hook '+data); },
                                type: "POST",
                                data : { register: 'yes', data: tokenenc},
                                url: serverhost+"tokenapi.php",
                                error: function(jqXHR, textStatus, errorThrown) {app.dialog.alert('Error');app.preloader.hide();}
                            }).done(function (data1) {
                                //console.log(data1);
                                window.localStorage["token"] = data1;
                                //app.loginScreen.close('#my-login-screen');
                                checkPreAuth();
                            }); 
            });

  // Close login screen
  //app.loginScreen.close('#my-login-screen');

  // Alert username and password
  //app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

$$('#my-register-screen .register-button').on('click', function () {
  
  if (!$$('#my-register-screen')[0].checkValidity()) {
        //console.log('Check Validity!');
        return;
  }

  var fullname = $$('#my-register-screen [name="fullname"]').val();
  var username = $$('#my-register-screen [name="username"]').val();
  var email = $$('#my-register-screen [name="email"]').val();
  var password = $$('#my-register-screen [name="password"]').val();
  app.preloader.show();

            $.ajax({
                type: "POST",
                data : { register: 'yes', name: fullname, username: username, email: email,password: password },
                url: serverhost+"registerapi.php",
                error: function(jqXHR, textStatus, errorThrown) {app.dialog.alert('Error');app.preloader.hide();},
                success: function(data, textStatus, jqXHR) 
                  {
                  }
            }).done(function (data) {
                    var password = randomPassword(10);
                    window.localStorage["password"] = password;
                    var tokenenc = enkripsi(data, password);
                    
                            $.ajax({
                                //headers: {'Authorization' : 'Bearer '+data},
                                //xhrFields: {withCredentials: true},
                                //beforeSend: function(xhr) { xhr.setRequestHeader('Authorization' , 'hook '+data); },
                                type: "POST",
                                data : { register: 'yes', data: tokenenc},
                                url: serverhost+"tokenapi.php",
                                error: function(jqXHR, textStatus, errorThrown) {app.dialog.alert('Error');app.preloader.hide();}
                            }).done(function (data1) {
                                //console.log(data1);
                                window.localStorage["token"] = data1;
                                //app.loginScreen.close('#my-register-screen');
                                //app.loginScreen.close('#my-login-screen');
                                checkPreAuth();
                                //app.dialog.alert('Register Success');
                            });
            });

});

$$('#my-register-screen .close-login-button').on('click', function () {
app.loginScreen.close('#my-register-screen');
app.loginScreen.close('#my-login-screen');
onloginscreenclose();
});

$$('#my-login-screen .close-login-button').on('click', function () {
app.loginScreen.close('#my-login-screen');
app.loginScreen.close('#my-register-screen');
onloginscreenclose();
});

$(document).on("beforeAjaxSend.ic", function (evt, settings) { 
    delete settings.headers['X-IC-Request']; 
    delete settings.headers['X-HTTP-Method-Override']; 
}); 

function readyapp(){

      $.ajaxSetup({ cache: false });
      						      
      date_time('timepanelmasehi');      
      date_time_hijri('timepanelhijri');
      //if (app.views.main.router.url = '/'){date_time_hijri('timepanelhijri');date_time('timepanelmasehi');}
      
      gempadirasakan();
    
      gempaterkini();
      
      openBrowser();
      
      openPreview2();

      explorenews2();
      
      //openLiveTV2();
      //openlivetv3(); //gak bisa
      //openlivetv3a();
      openlivetv3b();
      
      openiframe();
      
      openBsmiTV();
      
      exploreig();
     
      fancyboxinstall();
      
      copytoclipboard();
}

$(document).ready(function(){
  readyapp();
});
		
