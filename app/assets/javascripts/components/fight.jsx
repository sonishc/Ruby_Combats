class Fight extends React.Component {
  constructor(props) {
    super(props);
    const user = this.setStats(JSON.parse(props.user));

    this.state = {
      logs : []
    };
  }  

  getDamage(actor) {
    let max = 0, armor_bonus = 0;
    if (actor == 'user') {
      max = USER_DAMAGE;
    } else {
      armor_bonus = Math.floor(this.state.user.armor * ARMOR_MULTIPLIER);
      max = BOT_DAMAGE;
    }
    const random = this.getRandomInt(1, max);
    const actual = random - armor_bonus;
    let loginf = (`The ${actor}  defends on:  ${armor_bonus} health points and demaged on: ${actual} health points`);
    this.setState({logs:[
        {
          "name":"actor",
          "data":actor
        },
        {
          "name":"armor",
          "data":armor_bonus
        },
        {
          "name":"hit",
          "data":actual
        }
      ]
    });
    this.setTo(loginf);
    this.faye_log(loginf);
    return actual >= 0 ? actual : 1;
  }

  faye_log(data) {
    $(function() {
      let client = new Faye.Client(`http://localhost:9292/faye`);
      let time = new Date();
      let message_to_bottom = document.getElementById(`chat_room`);
        $(function(){
          client.publish(`/messages/fight`, {
            username: name,
            msg: data,
            time: time.toLocaleTimeString()
        });
      });
    });
  }

  setTo(logs){
    let date = new Date();
    let time_t = date.getTime();
    let time = time_t.toString();
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem(time, logs);
        } else {
          this.setCookie(time,logs,5);
        }
   }

  setCookie(cname, cvalue, exdays) {
    let date = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <LogWindow 
           logs={this.state.logs}
          />
        </div>
      </div>
    )
  }
}
