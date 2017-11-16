function messageBox(name) {

  $(function() {    
    let client = new Faye.Client('http://18.221.225.135:9292/faye');
    let time = new Date();

    $('#new_message_form').submit(function(){
      if (matches = $('#message').val().match(/@(\w+) (.+)/)) {
        client.publish('/messages/private/' + matches[1], {
          username: name,
          msg: matches[2],
          time: time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        });
      if(matches[1] !== name){
        let formTime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), createData = document.createElement('p'), paragraphWithText = formTime +' - '+name+' '+matches[2], addTime = document.createTextNode(paragraphWithText), paragraph = createData.appendChild(addTime);
        createData.className = `floralwhite_fone ${matches[1]}`;
        document.getElementById(`${matches[1]}`).appendChild(createData).appendChild(paragraph);
        }
      }
      else {
        client.publish('/messages/public', {
          username: name,
          msg: $('#message').val(),
          time: time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        });
      }

      $('.message_list').on('DOMNodeInserted', 'p', function () {
        setTimeout(function() {
          let messageToBottomPrivate = document.getElementById(matches[1]);
          messageToBottomPrivate.scrollTop = messageToBottomPrivate.scrollHeight;
        }, 100);
      });

      $('.public_messages').on('DOMNodeInserted', 'p', function () {
        setTimeout(function() {
          let messageToBottomPublic = document.getElementById("list");
          messageToBottomPublic.scrollTop = messageToBottomPublic.scrollHeight;
        }, 100);
      });

      $('#message').val('')
        return false;
      });

    let public_subscription = client.subscribe('/messages/public', function(data) {
      $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.username + ": " + data.msg).appendTo('.public_messages');
    }); 

    let private_subscription = client.subscribe('/messages/private/' + name, function(data) {
      appendMessage(data); 
    }); 
  });
  function appendMessage(data) {
    if (!document.getElementById(data.username))
      createTab(data);

    if (data.msg !== 'null') {
      let message_box = document.createElement('p');
      message_box.className = `floralwhite_fone ${data.username}`;
      message_box.innerHTML = `${data.time} - ${data.username}: ${data.msg}`;
      document.getElementById(data.username).appendChild(message_box);
    }

    document.getElementById('message').value = '@'+data.username+' (private message): ';
  }

  function createTab({username, time, msg = null}) {
    console.log(username, time, msg);
    let createPersonalChatWindow = document.createElement('div');
    let createChatText = 'Chat history with ' + username;
    let createChatInfo = document.createTextNode(createChatText);
    createPersonalChatWindow.appendChild(createChatInfo);
    createPersonalChatWindow.className = 'message_list tab-pane fade in active';
    createPersonalChatWindow.id = username;
    document.getElementsByClassName('tab-content')[0].appendChild(createPersonalChatWindow);
  }
}
