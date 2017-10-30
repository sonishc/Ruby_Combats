
faye_log(data) {
    $(function() {
    var client = new Faye.Client('http://localhost:9292/faye');
    var time = new Date();
    var message_to_bottom = document.getElementById('chat_room');

      $(function(){
    
        client.publish('/messages/public', {
          username: name,
          msg: data,
          time: time.toLocaleTimeString()
        });

        $('.chat_order').on('DOMNodeInserted', 'p', function () {
          window.setTimeout(function() {
            message_to_bottom.scrollTop = message_to_bottom.scrollHeight;
          }, 100);
        });
   
        var public_subscription = client.subscribe('/messages/public', function(data) {
          $('<p class="dark_fone" ></p>').html(data.time  + " - " + data.msg).appendTo('#chat_room');
        }); 
      });
    });
  }

  setTo(logs){
    let d = new Date();
    let n = d.getTime();
    let time = n.toString();
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem(time, logs);
        } else {
          this.setCookie(time,logs,5);
        }
   }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }