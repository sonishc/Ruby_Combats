class FayeMessages extends React.Component {

  constructor(props) {
    super(props);
  };

  generatePrivateChat(event) {
    let name = event.target.innerHTML;
    if (!document.getElementById(`#${name}`)) {
      document.getElementById('message').value = `@${name} (private message): `;
      const activeClassElements = document.getElementsByClassName('active');
      if (activeClassElements.length) {
         activeClassElements[0].classList.toggle('active');
       }
      if (document.querySelector(`#${name}`) == null){
        let createPersonalChatWindow = document.createElement('div'),
            createChatText = `Chat history with ${name}`,
            createButtonText = 'x',
            container = document.createElement('div');
            paragraph = document.createElement('span');
            button = document.createElement('button');
            createChatInfo = document.createTextNode(createChatText);
            createButtonInfo = document.createTextNode(createButtonText);
        
        container.className = 'text';
        paragraph.className = 'text0';   
        button.className = 'text1';
        button.addEventListener ("click", () => this.removeChatHistory(document.querySelectorAll(`.${name}`)), false);
        paragraph.appendChild(createChatInfo);
        button.appendChild(createButtonInfo);
        container.appendChild(paragraph);
        container.appendChild(button);
        createPersonalChatWindow.appendChild(container);
        createPersonalChatWindow.className = 'tab-pane fade message_list in active';
        createPersonalChatWindow.id = name;
        document.getElementsByClassName('tab-content')[0].appendChild(createPersonalChatWindow);
      }
    }
  };

  generatePublicChat(event) {
    let name = event.target.innerHTML;
    if (!document.getElementById('#list')) {
      document.getElementById('message').value = '';
      const activeClassElements = document.getElementsByClassName('active');
      if (activeClassElements.length) {
         activeClassElements[0].classList.toggle('active');
       }

      if (document.querySelector('#list') === null){
        let createPersonalChatWindow = document.createElement('div'),
            createChatText = 'Public Chat history',
            createButtonText = "x",
            container = document.createElement('div'),
            paragraph = document.createElement('span'),
            button = document.createElement('button'),
            createChatInfo = document.createTextNode(createChatText),
            createButtonInfo = document.createTextNode(createButtonText);
        
        container.className = "text";
        paragraph.className = "text0";
        button.className = 'text1';

        button.addEventListener ("click", () => this.removeChatHistory(document.querySelectorAll(`.dark_fone`)), false);

        paragraph.appendChild(createChatInfo);
        button.appendChild(createButtonInfo);
        container.appendChild(paragraph);
        container.appendChild(button);
        createPersonalChatWindow.appendChild(container);
        createPersonalChatWindow.className = 'public_messages tab-pane fade in active';
        createPersonalChatWindow.id = 'list';
        document.getElementsByClassName('tab-content')[0].appendChild(createPersonalChatWindow);
      }
    }
  };

  removeChatHistory(p_list) {
    for(var i=p_list.length-1; i>=0; i--){
      var p = p_list[i];
      p.parentNode.removeChild(p);
    }
  };

  generateUsersOnline(user_list) {
    let users = user_list.map((user, index) => {
      if (user.name !== this.props.name){
        return (<a className="users_list" data-toggle="tab" href="#Petro" onClick={this.generatePrivateChat.bind(this)} key={index}>{user.name}</a>);
      }
      else
      { 
      return (<a className="users_list" data-toggle="tab" href="#list" onClick={this.generatePublicChat.bind(this)} key={index}>Public Chat</a>);
      }
    });
    return users;
  }

  render() {
    return (
      <div>
        { messageBox(this.props.name) }
        <div className="chat_container" >
          <div id="container"></div>
          <div id="chat_room" className="chat_order nav nav-tabs">
            <div className="user_list">
              { this.generateUsersOnline(this.props.users) }
            </div>
            <div className="tab-content"></div>
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