class FayeMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlType:`/assets/chatroom.jpg`
    };
  }

  generatePrivateChat(event) {
    let name = event.target.innerHTML;
    if (!document.getElementById(`#${name}`)) {
      document.getElementById('message').value = '@'+name+' (private message): ';
    }
  };

  generateUsersOnline(user_list) {
    let users = user_list.map((user, index) => {
      if(user.name !== this.props.name){
        return (<p className="users_list" onClick={this.generatePrivateChat.bind(this)} key={index}>{user.name}</p>);
      }
    });
    return users;
  }

  render() {
    return (
      <div>
        <p className='chat_word'>{ I18n.t('chat.chat_title') }</p>
        <div className="chat_container" >
          { messageBox(this.props.name) }
          <div id="container"></div>
          <div id="chat_room" className="chat_order" >
            <div className="user_list">
              { this.generateUsersOnline(this.props.users) }
            </div>
            <div className="message_list" id="list"></div>
          </div>
          <form id="new_message_form" method="post" className="chat_input" data-remote="true">
            <input type="text" id="message" name="message" className="input_location" autoComplete="off"/>
            <input type="submit" value={ I18n.t('chat.send')} className = "btn btn-danger nav-button button_location"/>
          </form>
        </div>
      </div>
    );
  }
}