class Fight extends React.Component {

  constructor(props) {
    super(props);
    const user = this.setStats(JSON.parse(props.user));

    this.state = {
      user: user,
      max_health: user.hp,
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
  }

  setStats(user) {
    user.hp += user.stamina / 2;

    return user;
  }

  setAnimationLog(currentHit, currentLog){
    this.setState({ currentHit });
    this.setState({ currentLog });
  }

  handleChange(event) {
    event.preventDefault();

    let userHit = this.state.userHit;
    let name = event.target.name;
    let value = event.target.value;
    userHit[name] = value;

    this.setState({userHit});
  }

  botRandHit() {
    let countSelect = this.child.countOptions()
    let botHit = this.state.botHit;

    let attack = Math.floor(Math.random() * countSelect) + 0 ;
    let block =  Math.floor(Math.random() * countSelect) + 0 ;

    this.setState({
      botHit: {
        selectedAttackIndex: attack,
        selectedBlockIndex: block
      }
    });
  }

  checkPlayersMiss(attack, block, player) {
   if ( attack != block) {
     if (player == 'Bot') {
       this.props.bot.hp  -= this.getDamage('user');
     } else
       this.state.user.hp -= this.getDamage('bot');
   }
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
    console.log(`${actor} - random: ${random}; max: ${max}; armor: ${armor_bonus}; hit: ${actual}`);
    return actual >= 0 ? actual : 1;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  runFight() {
    this.buttonEnabled(false);
    this.botRandHit();

    const { selectedAttackIndex, selectedBlockIndex } = this.state.userHit;
    const {
      selectedAttackIndex: selectedBotAttackIndex,
      selectedBlockIndex: selectedBotBlockIndex
    } = this.state.botHit;

    this.checkPlayersMiss(selectedAttackIndex, selectedBotBlockIndex, 'Bot')
    this.setAnimationLog(HITS_ANIMATIONS_URL.hit, LOGS.userLog)

    const promise = new Promise(resolve => {
        setTimeout(() => resolve(this.buttonEnabled(true)), 4000);
      }).then(result => {
        this.checkPlayersMiss(selectedBotAttackIndex , selectedBlockIndex, 'User');
        this.setAnimationLog(HITS_ANIMATIONS_URL.hitReversed, LOGS.botLog);
        this.checkForWinner(this.state.user, this.props.bot);
      });
  }

  playerAlive(player, hp) {
    if (player == 'User') {
      if (this.state.user.hp <= 0) {
        this.state.user.hp = 0;
      }

      return this.state.user.hp;
    } else if (this.props.bot.hp <= 0) {
      this.props.bot.hp = 0;
    }

    return this.props.bot.hp;
  }

  propertyUserBot(player, hp, demage) {
    return(
      <span>
        <p>HP: { this.playerAlive(player) } | Power: { demage }</p>
        <meter value={ hp } min="0" max={ this.state.max_health }></meter><br />
        <br/>
        <img src={ player === 'User' ? USER_AVATAR_URL : BOT_AVATAR_URL } /><br/>
      </span>
    )
  }

  changeFightProperty() {
    const user = this.state.user;
    const bot = this.props.bot;

    if (!this.checkForWinner(user, bot))
      this.runFight();
  }

  checkForWinner(user, bot)
  {
    let EXP = 0;
    let winner = 'BOT';

    if (bot.hp <=0 || user.hp <=0) {
      if (user.hp < 0 && bot.hp < 0) {
        EXP = 5;
        winner = 'DRAW!. Really? It happens sometimes..';
      } else if (user.hp > bot.hp) {
        EXP = 10;
        winner = 'YOU';
      } else {
        EXP = 1;
      }

      this.sendExp(EXP).then(() => {
        this.buttonEnabled(false);

        alert (
         `The fight has ENDED! And the winner is: ${winner}!` +
         `\nPlease, refresh the page to start a new one.`
        );

        return true;
      });
    } else {
      return false;
    }
  }

  sendExp(EXP) {
    const url = `/users/${this.state.user.id}/addexp`;
    this.initAxiosHeaders();

    return new Promise(
      (resolve, reject) => {
        axios.post(url, {
          experience: EXP
        }).then(response => {
          resolve();
        });
      }
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

  render () {
    return (
      <div className="container-fluid">

        <FightTopHeader />

        <div className="row">
          <div className="col-md-3">
            {this.propertyUserBot('User', this.state.user.hp, USER_DAMAGE)}

            <SelectHitBlock handleChange={ this.handleChange.bind(this) }
              ref={instance => { this.child = instance; }} />
            <UserItems items={this.props.items}/>
          </div>

          <div className='col-md-6 arena-fights'>
            <i>{ LOGS.idle }</i>
            <img src={ this.state.currentHit } />
          </div>

          <div className="col-md-3">
            { this.propertyUserBot('Bot', this.props.bot.hp, BOT_DAMAGE) }

            { HIT_TYPES[this.state.botHit.selectedAttackIndex] }

            <br />

            { BLOCK_TYPES[this.state.botHit.selectedBlockIndex] }

          </div>

        </div>

        <div className="row">
          <ButtonStart
            btnClick={this.state.buttonStatus}
            changeFightProperty={ this.changeFightProperty.bind(this)}
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
