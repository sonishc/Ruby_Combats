function message_box(name) {

    $(function() {
    var client = new Faye.Client('http://localhost:9292/faye');
    var time = new Date();
    var message_to_bottom = document.getElementById('list');

    $('#new_message_form').submit(function(){
      if (matches = $('#message').val().match(/@(\w+) (.+)/)) {
        client.publish('/messages/private/' + matches[1], {
          username: name,
          msg: matches[2],
          time: time.toLocaleTimeString()
        });
        if(matches[1] !== name){
          var form_time = time.toLocaleTimeString();
          var create_data = document.createElement('p');
          var paragraph_with_text = form_time +' - '+name+': '+matches[2];
          var add_time = document.createTextNode(paragraph_with_text);
          var paragraph = create_data.appendChild(add_time);
          create_data.className = "dark_fone";
          document.getElementsByClassName('message_list')[0].appendChild(create_data).appendChild(paragraph);
        }
      }
      else{
        client.publish('/messages/public', {
          username: name,
          msg: $('#message').val(),
          time: time.toLocaleTimeString()
        });
      }

      $('.message_list').on('DOMNodeInserted', 'p', function () {
        window.setTimeout(function() {
          message_to_bottom.scrollTop = message_to_bottom.scrollHeight;
        }, 100);
      });

      $('#message').val('')
      return false;
    });

    var public_subscription = client.subscribe('/messages/public', function(data) {
      $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
    });

    var private_subscription = client.subscribe('/messages/private/' + name, function(data) {
      $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
    });
  });
}
