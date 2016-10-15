var deletes = new Array();
var userName, title, description, email, contact, userPic, userId;

$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAn6LnSQpx5BG9YkslXQkz7SnW0rZ9val0",
        //authDomain: "project-4337251130944270718.firebaseapp.com",
        authDomain: "jamesz.us",
        databaseURL: "https://project-4337251130944270718.firebaseio.com",
        storageBucket: "project-4337251130944270718.appspot.com",
    };

    var ref = new Firebase("https://project-4337251130944270718.firebaseio.com/");

    firebase.initializeApp(config);

   // This is called with the results from from FB.getLoginStatus().
    function statusChangeCallback(response) {
        console.log(response);

        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            testAPI();
        } 
        
        else if (response.status === 'not_authorized') {
            if(window.location.pathname == '/project/index.html' || window.location.pathname == '/project/') {
              //window.location.href = 'login.html';
            }

        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            if(window.location.pathname == '/project/index.html' || window.location.pathname == '/project/') {
              window.location.href = 'login.html';
            }
        }
    }

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }

    window.fbAsyncInit = function() {
      FB.init({
          appId      : 1785904134961851,
          cookie     : true,  // enable cookies to allow the server to access
          // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.6' // use graph api version 2.5
      });

      FB.getLoginStatus(function(response) {

          statusChangeCallback(response);
      });

      FB.Event.subscribe('auth.login', function() {
          console.log("logged in");
          if(window.location.pathname == '/project/login.html') {
              window.location.href = 'index.html';
          }
      });

      FB.Event.unsubscribe('auth.login', function() {
          console.log('here');
      });

      FB.Event.subscribe('auth.logout', function(){
          window.location.href = 'login.html';
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {

        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function testAPI() {
        FB.api('/me/', function(response) {
            console.log('Facebook Login successful: ' + response.name);

            userName = response.name;
            userId = response.id;
            $("#user").html('<h4 class="sub-header">You are signed in as ' + userName + '</h4>');
            writeUserData(userId, userName);
            FB.api('/me/picture', function(response) {
                userPic = response.data.url;
                $('#userPic').html('<img src="' + userPic + '" width="100" height="100" class="img" alt="Generic placeholder thumbnail">');
            });
        });
    }

    $('#list').ready(function() {
      // Get a database reference to our posts
      var ref = new Firebase("https://project-4337251130944270718.firebaseio.com/services");
      var requests = '';
      // Attach an asynchronous callback to read the data at our posts reference
      ref.on("value", function(snapshot) {
        var snap = snapshot.val();
        var count = 0;
        $.each(snap, function( i, eachRequest ) {
          count ++;
          deletes.push($("<button id=" + i + " type='button' class='btn btn-info btn-sm'>Delete</button>"));
          requests += '<tr><td>' + eachRequest.title 
                    +'</td><td>' + eachRequest.description
                    + '</td><td>' + eachRequest.email 
                    + '</td><td>' + eachRequest.contact
                    +'</td><td  id= "each_' + i +'">' + eachRequest.name
                    + '</td><td><button id=' + i + ' type="button" class="btn btn-info btn-sm">Delete</button></td></tr>'
        });
        
        $('#list').html(requests);

      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    });

    $('#logout').click(function() {
        FB.logout(function(response) {
            if(window.location.pathname == '/project/index.html'  || window.location.pathname == '/project/') {
                window.location.href = 'login.html';
            }
            console.log('logged out ' + response);
        });
    });

    $("body").on('click', 'button', function() {
      var myId = this.id;

      if (myId > 0) {
        var eachId = "#each_" + myId;
        var checkedId = $(eachId).html();
        if(userName == checkedId) {
          ref.child('services/' + myId).remove(function(err) {
            if(err) {
              console.log("delete failed");
            } else {
              console.log("successfully deleted");
            }
          });
        } else {
          alert("Please do not delete other people's comments.");
        }
      }
    });

    $('#submit').click(function() {

      /*
      var values = {};
      $.each($('#request').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });
      */
      title =$('#title').val();
      description =$('#description').val();
      email =$('#inputEmail3').val();
      contact =$('#contact').val();

      firebase.database().ref('services/' + Date.now()).set({
        title: title,
        description: description,
        email: email,
        contact: contact,
        name: userName
      });
      $('#hide').hide();
    });

    function writeUserData(userId, name) {
      firebase.database().ref('user/' + userId).set({
        name: name
      });
    }

    $('#addService').click(function() {
      $('#hide').show();
    });
});
