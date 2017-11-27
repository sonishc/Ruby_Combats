class Inviter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user
    }

    this.initializeFaye();
  }

  initializeFaye() {
    let client = new Faye.Client('http://localhost:9292/faye');
    client.subscribe(`/${this.state.user.name}`, function(message) {
      if (typeof message.fight_request !== 'undefined') {
        let data = JSON.parse(message.fight_request);
        let confirmation = confirm(`Player ${data.initiator} wants to fight with you! Are you ready?`);

        if (confirmation == true) {
          const url = `/fight/confirm?accepted=true&initiator=${data.initiator}`;
          axios.get(url);
        }
      }
      if (typeof message.fight_redirect !== 'undefined') {
        let data = JSON.parse(message.fight_redirect);
        let confirmation = confirm(`Fight is ready, want to redirect to the fight page ?`);
        if (confirmation == true) {
          window.location.replace(data.url);
        }
      }
    });
  }

  sendFightRequest(recepient) {
    const url = `/fight/init?recepient=${recepient}`;
    axios.get(url);
  }

  render() {
    users = this.props.users.map((user, index) => {
      return (<div key={index} className="user-invite" onClick={() => this.sendFightRequest(user.name)}>{user.name}</div>)
    });

    return (
      <div>
        {users}
      </div>
    )
  }
}
