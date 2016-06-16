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

    var userName;
    var userPic;
    var userId;
    firebase.initializeApp(config);

   // This is called with the results from from FB.getLoginStatus().
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            testAPI();
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            document.getElementById('status').innerHTML = 'Please log ' +
                    'into this app.';
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            document.getElementById('status').innerHTML = 'Please log ' +
                    'into Facebook.';
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

        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

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

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
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

            //document.getElementById('status').innerHTML ='Thanks for logging in, ' + response.name + '!';
        });
    }

   // var list = '<tr><td>' + + '</td><td>Lorem</td></tr>';

    //$('#list').html(list);
    $('#logout').click(function() {
        FB.logout(function(response) {
            if(window.location.pathname == '/project/index.html') {
                window.location.href = 'login.html';
            }
            console.log('logged out ' + response);
        });
    });

    $('#submit').click(function() {

      //var title = <?php echo $_POST["title"]?;>;
      //var description = <?php echo $_POST["description"]?>;
      //var email = <?php echo $_POST["email"]?>;
      //var contact = <?php echo $_POST["contact"]?>;

      firebase.database().ref('services/' + userId).set({
        title: title,
        description: description,
        email: email,
        contact: contact
      });
    });

    function writeUserData(userId, name) {
      firebase.database().ref('user/' + userId).set({
        name: name
      });
    }

    $('#addService').click(function() {
      //firebase.database().ref('services/' + userId).set({
      //  title: title 
      //});
    });
});

