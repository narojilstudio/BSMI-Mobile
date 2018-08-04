routes = [
  {
    path: '/',
    url: './index.html',
      on: {
        pageAfterIn: function test (e, page) {
          // do something after page gets into the view

              $(document).ready(function(){
                
                // Example by className
                $(".demo").htmlfromrss(
                  limit = 10
                );

              });
         
        },
        pageInit: function (e, page) {
          // do something when page initialized
        },
      }
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/profile/',
    url: './pages/profile.html',
  },
  {
    path: '/majalah/',
    url: './pages/majalah.html',
  },
  {
    path: '/majalahload/:majalahid/',
    templateUrl: './pages/majalahload.html',
  },
  {
    path: '/photo/',
    url: './pages/photo.html',
      on: {
        pageAfterIn: function test (e, page) {
          // do something after page gets into the view
          $(document).ready(function(){
           $(".demoig").myig(
            ins_id = 2083561128, // your user_id
            ins_count = 40, // Count of media to return
            ins_token = '2083561128.d8d1d50.9283b2661f734328b4213916bc07a27b' // your token
           );
          });
          $(document).ready(function(){	
            $(".myig_popup").fancybox({
              openEffect : 'fade',
              closeEffect : 'fade'
            });
          })          
        },
        pageInit: function (e, page) {
          // do something when page initialized
        },
      }
  },
  {
    path: '/catalog/',
    componentUrl: './pages/catalog.html',
  },
  {
    path: '/product/:id/',
    componentUrl: './pages/product.html',
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
  },
  {
    path: '/info/',
    url: './pages/info.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST

];
