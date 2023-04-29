function onSignIn(googleUser) {
    // Get the user's ID token and other data.
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
  
    // Send the user's ID token to your server for authentication.
    // You can use an AJAX request to send the token to your server.
    // Example:
    $.ajax({
      type: 'POST',
      url: '/authenticate',
      data: {
        id_token: id_token
      },
      success: function(data) {
        console.log('Authentication successful.');
      },
      error: function(xhr, status, error) {
        console.error('Authentication error: ' + error);
      }
    });
  
    // Display the user's name and profile picture.
    console.log('Signed in as ' + profile.getName());
    console.log('Profile picture URL: ' + profile.getImageUrl());
  }
  