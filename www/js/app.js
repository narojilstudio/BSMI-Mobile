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
       $.ajaxSetup({ cache: false });
			
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


      $.getJSON('https://api.allorigins.ml/get?url=http%3A//data.bmkg.go.id/lastgempadirasakan.xml&callback=?', function(data){
        //$('#gempaterkini').html(data.contents);
        xmlDoc = $.parseXML( data.contents ),
        $xml = $( xmlDoc ),
        $tanggal = $xml.find( "Tanggal" ).text();
        $jam = $xml.find( "Jam" ).text();
        $keterangan = $xml.find( "Keterangan" ).text();
        $magnitude = $xml.find( "Magnitude" ).text();
        $kedalaman = $xml.find( "Kedalaman" ).text();
        $dirasakan = $xml.find( "Dirasakan" ).text();
        $lintang = $xml.find( "Lintang" ).text();$lintang = $lintang.split(" ");$lintang = $lintang[0];
        $bujur = $xml.find( "Bujur" ).text();$bujur = $bujur.split(" ");$bujur = $bujur[0];
        $( "#gempadirasakan" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+"</br>Koordinat : "+$lintang+ "LS - "+$bujur+" BT</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Keterangan : "+$keterangan+"</br>Dirasakan : "+$dirasakan );
        // Create the map
        var map = L.map('mapgempadirasakan').setView([-$lintang, $bujur], 10);
        // Set up the OSM layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          id: 'mapbox.streets'
        }).addTo(map);
        L.marker([-$lintang, $bujur]).addTo(map)
          .bindPopup('Gempa bumi dirasakan')
          .openPopup();          
      });
    
            
      $.getJSON('https://api.allorigins.ml/get?url=http%3A//data.bmkg.go.id/autogempa.xml&callback=?', function(data){
        //$('#gempaterkini').html(data.contents);
        xmlDoc = $.parseXML( data.contents ),
        $xml = $( xmlDoc ),
        $tanggal = $xml.find( "Tanggal" ).text();
        $jam = $xml.find( "Jam" ).text();
        $lokasi = $xml.find( "Wilayah1" ).text();
        $magnitude = $xml.find( "Magnitude" ).text();
        $kedalaman = $xml.find( "Kedalaman" ).text();
        $potensi = $xml.find( "Potensi" ).text();
        $koordinat = $xml.find( "coordinates" ).text();
        $lintang = $koordinat.split(",");$lintang = $lintang[1];
        $bujur = $koordinat.split(",");$bujur = $bujur[0];
        $( "#gempaterkini" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+ "</br>Lokasi : "+$lokasi+ "</br>Koordinat : "+$koordinat+ "</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Potensi : "+$potensi );
        // Create the map
        var map = L.map('mapgempaterkini').setView([$lintang, $bujur], 10);
        // Set up the OSM layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          id: 'mapbox.streets'
        }).addTo(map);
        L.marker([$lintang, $bujur]).addTo(map)
          .bindPopup('Gempa bumi terkini M &ge; 5,0')
          .openPopup();        
      });
});
		
