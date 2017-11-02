function messageBox(name) {

  $(function() {
    let client = new Faye.Client('http://localhost:9292/faye');
    let time = new Date();
    let messageToBottom = document.getElementById('list');

    $('#new_message_form').submit(function(){
      if (matches = $('#message').val().match(/@(\w+) (.+)/)) {
        client.publish('/messages/private/' + matches[1], {
          username: name,
          msg: matches[2],
          time: time.toLocaleTimeString()
        });
      if(matches[1] !== name){
        let formTime = time.toLocaleTimeString(), createData = document.createElement('p'), paragraphWithText = formTime +' - '+name+' '+matches[2], addTime = document.createTextNode(paragraphWithText), paragraph = createData.appendChild(addTime);
        createData.className = "floralwhite_fone";
        document.getElementsByClassName('message_list')[0].appendChild(createData).appendChild(paragraph);
        }
      }
      else {
        client.publish('/messages/public', {
          username: name,
          msg: $('#message').val(),
          time: time.toLocaleTimeString()
        });
      }

      $('.message_list').on('DOMNodeInserted', 'p', function () {
        setTimeout(function() {
          messageToBottom.scrollTop = messageToBottom.scrollHeight;
        }, 100);
      });

      $('#message').val('')
        return false;
      });

    let public_subscription = client.subscribe('/messages/public', function(data) {
      $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
    });

    let private_subscription = client.subscribe('/messages/private/' + name, function(data) {
      $('<p class="floralwhite_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.message_list');
    });
    let public_sub = client.subscribe('/messages/fight', function(data) {
      $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + " - " + data.msg).appendTo('#chat_room');
    });
  });
}
