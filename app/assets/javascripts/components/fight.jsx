class Fight extends React.Component {

  constructor(props) {
    super(props);
    const user  = this.setStats(JSON.parse(props.user));
    const enemy = this.setStats(JSON.parse(props.enemy));
    const inventory = JSON.parse(props.inventory);
    this.state = {
      user: user,
      enemy: enemy,
      status: this.props.status,
      user_health: user.hp,
      enemy_health: user.hp,
      inventory: inventory,
      selected_item: null,
      currentHit: HITS_ANIMATIONS_URL.idle,
      userHit: {
        selectedAttackIndex: 0,
        selectedBlockIndex: 0
      },
      botHit: {
        selectedAttackIndex: null,
        selectedBlockIndex: null
      },
      currentLog: LOGS.idle,
      buttonStatus: '',
    }

    this.initSubscribes();
  }

  initSubscribes() {
    if (typeof this.faye === 'undefined')
     this.faye = new Faye.Client('http://localhost:9292/faye');

    this.faye.subscribe(`/${this.props.fight_hash}`, (message) => {
      message = JSON.parse(message);

      if (typeof message.type !== 'undefined') {
        switch(message.type) {
          case 'status_update':
            this.setState({ status: message.status_update });
            break;
          case 'play_animation':
            this.playAnimation(message.first);
            break;
          case 'fight_finished':
            this.displayWinner(message.winner);
            break;
        }
      }
    });

    this.faye.subscribe(`/${this.props.fight_hash}/update`, (message) => {
      message = JSON.parse(message);

      if (typeof message[this.state.user.name] !== 'undefined')
        this.setState((prev) => {
          prev.user.hp = message[this.state.user.name];
          return {user: prev.user}
        });

      if (typeof message[this.state.enemy.name] !== 'undefined')
        this.setState((prev) => {
          prev.enemy.hp = message[this.state.enemy.name];
          return {enemy: prev.enemy}
        });
    });
  }

  displayWinner(winner) {
    this.buttonEnabled(false);

    const user = this.state.user.name;
    let message = '';
    if (winner == user) {
      message = 'YOU WON! Congrats..';
      this.setState((prev) => {
        prev.enemy.hp = 0;
        return {enemy: prev.enemy}
      });
    } else {
      message = 'You LOST :( Too bad..';
      this.setState((prev) => {
        prev.user.hp = 0;
        return {user: prev.user}
      });
    }

    alert(message);
  }

  playAnimation(player) {
    let first = HITS_ANIMATIONS_URL.hit, second = HITS_ANIMATIONS_URL.hitReversed;

    if (this.state.user.name !== player)
      [first, second] = [second, first];

    this.setState({ currentHit: first });
    setTimeout(() => {
      this.setState({ currentHit: second });
      setTimeout(() => {
        this.buttonEnabled(true);
        this.setState({ currentHit: HITS_ANIMATIONS_URL.idle });
      }, 4000);
    }, 4000);
  }


  setStats(user) {
    user.hp += user.stamina / 2;

    return user;
  }

  handleChange(event) {
    event.preventDefault();

    let userHit = this.state.userHit;
    let name = event.target.name;
    let value = event.target.value;
    userHit[name] = value;

    this.setState({userHit});
  }

  startFight() {
    this.buttonEnabled(false);
    const { selectedAttackIndex, selectedBlockIndex } = this.state.userHit;
    let item = this.state.selected_item === null ? null : this.state.selected_item;

    if (item !== null)
      this.removeItem(item);

    let fightInfo = {
      attack: selectedAttackIndex,
      block: selectedBlockIndex,
      item: item
    }

    this.initAxiosHeaders();
    axios.post('/fight/update', { fight: fightInfo });
  }

  headerFor(player, hp) {
    return(
      <span>
        <p>HP: { hp < 0 ? 0 : hp }</p>
        <meter value={ hp } min="0" max={  player === 'User' ? this.state.user_health : this.state.enemy_health }></meter><br />
        <br/>
        <img src={ player === 'User' ? USER_AVATAR_URL : BOT_AVATAR_URL } /><br/>
      </span>
    )
  }

  initAxiosHeaders() {
    const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');

    axios.defaults.headers.common['X-CSRF-Token'] = token;
    axios.defaults.headers.common['Accept'] = 'application/json';
  }

  buttonEnabled(enabled) {
    const status = enabled ? '' : 'true'
    this.setState({ buttonStatus: status });
  }

  selectItem(item) {
    this.setState({
      selected_item: item.id
    });
  }

  applyEffect() {
    let {effect_id, effect_type, effect_value} = this.state;
    let [hp, max_hp] = [this.state.user.hp, this.state.max_health];

    switch(effect_type) {
      case EFFECTS.HEALING:
        this.state.user.hp = effect_value + hp >= max_hp ? max_hp : effect_value + hp;
        break;
    }

    this.setEffect(null, null, null);
    this.removeItem(effect_id);
  }

  removeItem(id) {
    const items = this.state.inventory;
    const url = `/item/${id}/remove`;
    const index = items.findIndex(obj => obj.id == id);

    if (items[index].count > 1)
      items[index].count = items[index].count - 1;
    else
      items.splice(index, 1);

    this.setState({
      inventory: items,
      selected_item: null,
    });

    this.initAxiosHeaders();
    axios.post(url);
  }

  render () {
    return (
      <div className="container-fluid">

        <FightTopHeader user={this.state.user.name} enemy={this.state.enemy.name} status={this.state.status}/>

        <div className="row">
          <div className="col-md-3">
            {this.headerFor('User', this.state.user.hp)}

            <SelectHitBlock handleChange={ this.handleChange.bind(this) }
              ref={instance => { this.child = instance; }} />
            <UserItems items={this.props.equipment}/>
            <h4>Inventory items:</h4>
            <Inventory items={this.state.inventory} handleClick={(item) => this.selectItem(item)}/>
          </div>

          <div className='col-md-6 arena-fights'>
            <i>{ LOGS.idle }</i>
            <img src={ this.state.currentHit } />
          </div>

          <div className="col-md-3">
            { this.headerFor('Enemy', this.state.enemy.hp) }
          </div>

        </div>

        <div className="row">
          <ButtonStart
            btnClick={this.state.buttonStatus}
            startFight={ this.startFight.bind(this)}
          />
          <div className='col-md-6 player-name'>
            {this.state.user.name}
              <p className='player-info'>
                Experience:
                [{this.state.user.experience}]
                <br/>
                Email:
                [{this.state.user.email}]
              </p>
          </div>
        </div>
      </div>
    )
  }
}
