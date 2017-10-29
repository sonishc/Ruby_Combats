// class FayeMessages extends React.Component {
//   constructor(props) {
//     super(props);
//      this.state = {
//       urlType:`/assets/chatroom.jpg`
//       };
//   }

//   activity(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("chat_order");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tab_button");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabName).style.display='flex';
//     evt.currentTarget.className += " active";
//   }

//   render() {

//     return (

//     <div className="chat_container" >
//       { message_box(this.props.name) }
//       <div className="tabulation">
//         <input id="tab-1" className="tab_button"  type="radio" name="tab-group" defaultChecked="checked"/>
//         <label className="tabs" htmlFor="tab-1" onClick={() => {this.activity(event, 'chat_room')}}>Global Chat</label>
//         <input id="tab-2" className="tab_button" type="radio" name="tab-group" />
//         <label className="tabs" htmlFor="tab-2" onClick={() => {this.activity(event, 'chat_room-2')}}>Local Chat</label>
//         <input id="tab-3" className="tab_button" type="radio" name="tab-group" />
//         <label className="tabs" htmlFor="tab-3" onClick={() => {this.activity(event, 'chat_room-3')}}>Chat of fight</label>    
//       </div>
//       <div id="chat_room" className="chat_order" ></div> 
//       <div id="chat_room-2" className="chat_order" >Local chat temporary unavaliable</div> 
//       <div id="chat_room-3" className="chat_order" >Chat of fight temporary unavaliable</div>
//       <form id="new_message_form" method="post" className="chat_input" data-remote="true">
//         <input type="text" id="message" name="message" className="input_location" autoComplete="off"/>
//         <input type="submit" value="Send" className = "button_location"/>
//       </form> 
//     </div>
//     );
//   }
// }

class FayeMessages extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      urlType:`/assets/chatroom.jpg`
      };
  }

  activity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("chat_order");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display='flex';
    evt.currentTarget.className += " active";
  }

  // user_list() {
  //   for (i = 0; i < this.props.users.length; i++) {
  //       var name = this.props.users[i].name

  //       return(

  //       )
  //       console.log(name);
  //   }
  // }

  generate_users_list(user_list) {
    var users = user_list.map((user, index) => {
      return (<p key={index}>{user.name}</p>)
    });

    return users;
  }

  render() {

    return (

    <div className="chat_container" >
      { message_box(this.props.name) }
      { console.log(this.props.users[0]) }
      <div className="tabulation">
        <input id="tab-1" className="tab_button"  type="radio" name="tab-group" defaultChecked="checked"/>
        <label className="tabs" htmlFor="tab-1" onClick={() => {this.activity(event, 'chat_room')}}>Global Chat</label>
        <input id="tab-2" className="tab_button" type="radio" name="tab-group" />
        <label className="tabs" htmlFor="tab-2" onClick={() => {this.activity(event, 'chat_room-2')}}>Local Chat</label>
        <input id="tab-3" className="tab_button" type="radio" name="tab-group" />
        <label className="tabs" htmlFor="tab-3" onClick={() => {this.activity(event, 'chat_room-3')}}>Chat of fight</label>    
      </div>


      <div id="chat_room" className="chat_order" >
        <div className="user_list">
          { this.generate_users_list(this.props.users) }
        </div>
        <div className="message_list" id="list"></div>
      </div>

      <div id="chat_room-2" className="chat_order" >
        <div className="user_list"></div>
        <div className="message_list" id="list">Local chat temporary unavaliable</div>
      </div> 
      <div id="chat_room-3" className="chat_order" >Chat of fight temporary unavaliable</div>
      <form id="new_message_form" method="post" className="chat_input" data-remote="true">
        <input type="text" id="message" name="message" className="input_location" autoComplete="off" required="required" pattern="[A-Za-z0-9]{1,20}"/>
        <input type="submit" value="Send" className = "button_location"/>
      </form> 
    </div>
    );
  }
}