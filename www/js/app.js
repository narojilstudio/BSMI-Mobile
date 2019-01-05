// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
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
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
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
			
			// Example by className
			$(".demo").htmlfromrss(
				limit = 10
			);
			
      $(document).on("click", "#openBrowser", function() {
          var url = $(this).attr('href');
          window.open(url, "_blank", "location=yes");
      })
      
      date_time('timepanelmasehi');
      date_time_hijri('timepanelhijri');
      
      $("#gempaterkini").append("<ul></ul>");
      $.ajax({
        type: "GET",
        url: "http://data.bmkg.go.id/autogempa.xml",
        dataType: "xml",
        success: function(xml){
        $( "#gempaterkini" ).append( "Tanggal : " + $(xml).find('Tanggal').text() +"</br>");
        $( "#gempaterkini" ).append( "Jam : " + $(xml).find('Jam').text() +"</br>");
        $( "#gempaterkini" ).append( "Lokasi : " + $(xml).find('Wilayah1').text() +"</br>");
        $( "#gempaterkini" ).append( "Koordinat : " + $(xml).find('coordinates').text() +"</br>");
        $( "#gempaterkini" ).append( "Magnitude : " + $(xml).find('Magnitude').text() +"</br>");
        $( "#gempaterkini" ).append( "Kedalaman : " + $(xml).find('Kedalaman').text() +"</br>");
        $( "#gempaterkini" ).append( "Potensi : " + $(xml).find('Potensi').text() +"</br>");
      },
      error: function() {
        alert("An error occurred while processing XML file.");
      }
      });
});
		
