function message_box(name) {
  
    $(function() {
    // Create a new client to connect to Faye
    var client = new Faye.Client('http://localhost:9292/faye');
    var time = new Date();
    var message_to_bottom = document.getElementById('list');

 // Our own public channel
    var public_subscription = PrivatePub.subscribe('/messages/public', function(data) {
      $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
    });



    // Our own private channel
    var private_subscription = PrivatePub.subscribe('/messages/private/<%= session[:name] %>', function(data) {
  $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
    }); 

 // Our own public channel
    // var public_subscription = client.subscribe('/messages/public', function(data) {
    //   $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
    // });


    // Our own private channel
  //   var private_subscription = client.subscribe('/messages/private/<%= session[:username] %>', function(data) {
  // $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
  //   }); 


    // Subscribe to the public channel

    // $('#new_message_form').submit(function(){
  
    //   // Publish the message to the public channel
    //   client.publish('/messages/public', {
    //     username: name,
    //     msg: $('#message').val(),
    //     time: time.toLocaleTimeString()
    //   });



    //   $('.message_list').on('DOMNodeInserted', 'p', function () {
    //     window.setTimeout(function() {
    //       message_to_bottom.scrollTop = message_to_bottom.scrollHeight;
    //     }, 100);
    //   });

    //   // Clear the message box
    //   $('#message').val('')
    //   return false;
    // });

    $('#new_message_form').submit(function(){

  
      // Publish the message to the public channel
      if (matches = $('#message').val().match(/@(.+) (.+)/)) {
        client.publish('/messages/private/' + matches[1], {
          username: name,
          msg: matches[2],
          time: time.toLocaleTimeString(),
        });
      }
      else {
        client.publish('/messages/public', {
          username: name,
          msg: $('#message').val(),
          time: time.toLocaleTimeString(),
        });
      }



      $('.message_list').on('DOMNodeInserted', 'p', function () {
        window.setTimeout(function() {
          message_to_bottom.scrollTop = message_to_bottom.scrollHeight;
        }, 100);
      });
               

      // Clear the message box
      $('#message').val('')
      return false;
    });

     // $('#new_message_form').submit(function(){
     //  // Is it a private message?
     //  if (matches = $('#message').val().match(/@(.+) (.+)/)) {
     //    client.publish('/messages/private/' + matches[1], {
     //      username: '<%= session[:username] %>',
     //      msg: matches[2]
     //    });
     //  }
     //  else {
     //    // It's a public message
     //    client.publish('/messages/public', {
     //      username: '<%= session[:username] %>',
     //      msg: $('#message').val()
     //    });
     //  }

  });
}
