function message_box(name) {
  
    $(function() {
    // Create a new client to connect to Faye
    var client = new Faye.Client('http://localhost:9292/faye');
    var time = new Date();
    var message_to_bottom = document.getElementById('list');

    $('#new_message_form').submit(function(){
  
      // Publish the message to the public channel
      client.publish('/messages/public', {
        username: name,
        msg: $('#message').val(),
        time: time.toLocaleTimeString()
      });

      // window.setTimeout(function() {
      //   message_to_bottom.scrollTop = message_to_bottom.scrollHeight;
      // },
      // 100);

      $('.message_list').on('DOMNodeInserted', 'p', function () {
        window.setTimeout(function() {
          message_to_bottom.scrollTop = message_to_bottom.scrollHeight;
        }, 100);
      });

      // Clear the message box
      $('#message').val('')
      return false;
    });
 
    // Subscribe to the public channel
    var public_subscription = client.subscribe('/messages/public', function(data) {
      $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
    }); 
  });
}
