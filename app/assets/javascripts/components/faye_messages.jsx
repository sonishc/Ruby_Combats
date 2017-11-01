class FayeMessages extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      urlType:`/assets/chatroom.jpg`
      };
  }

  generate_private_chat(e) {
    var name = e.target.innerHTML;
    if (!document.querySelector(`#${name}`)) {
      document.getElementById('message').value = '@'+name+' (private message): ';
    }
  };

  generate_users_online(user_list) {
    var users = user_list && user_list.map((user, index) => {
      return (<p className="users_list" onClick={this.generate_private_chat.bind(this)} key={index}>{user.name}</p>);
    });
    return users;
  }

  render() {
    return (
    <div className="chat_container" >
      { message_box(this.props.name) }
      <div id="container"></div>
      <div id="chat_room" className="chat_order" >
        <div className="user_list">
          { this.generate_users_online(this.props.users) }
        </div>
        <div className="message_list" id="list"></div>
      </div>
      <form id="new_message_form" method="post" action='location/page' className="chat_input" data-remote="true">
        <input type="text" id="message" name="message" className="input_location" autoComplete="off"/>
        <input type="submit" value="Send" className = "button_location"/>
      </form>
    </div>
    );
  }
}
