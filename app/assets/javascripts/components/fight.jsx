class Fight extends React.Component {

  constructor() {
    super();

    this.state = {
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
      btnClick: '',
    }
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
        this.props.bot.hp -= demageU;
      }else
       this.props.user.hp -= demageU;
    }
  }

  runFight() {
    this.buttonEnabled(false);
    this.botRandHit()

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
        this.checkPlayersMiss(selectedBotAttackIndex , selectedBlockIndex, 'User')
        this.setAnimationLog(HITS_ANIMATIONS_URL.hitReversed, LOGS.botLog)
      });
  }

  playerAlive(player, hp) {
    if (player == 'User') {
      if (this.props.user.hp <= 0) {
        this.props.user.hp = 0;
      }

      return this.props.user.hp;
    } else if (this.props.bot.hp <= 0) {
      this.props.bot.hp = 0;
    }

    return this.props.bot.hp;
  }

  propertyUserBot(player, hp, demage) {
    return(
      <span>
        <p>HP: { this.playerAlive(player) } | Power: { demage }</p>
        <meter value={ hp } min="0" max="100"></meter><br />
        <br/>
        <img src={ player === 'User' ? USER_AVATAR_URL : BOT_AVATAR_URL } /><br/>
      </span>
    )
  }  

  changeFightProperty() {
    const user = this.props.user;
    const bot = this.props.bot;
    let EXP = 0;
    let winner = 'BOT';

    if (bot.hp <=0 || user.hp <=0) {
      switch (true) {
        case user.hp < 0 && bot.hp < 0:
          EXP = 5;
          winner = 'DRAW!. Really? It happens sometimes..';
          break;
        case user.hp > bot.hp:
          EXP = 10;
          winner = 'YOU';
          break;
        default:
          EXP = 1;
          break;
      }

      this.sendExp(EXP).then(() => {
        this.buttonEnabled(false);

        alert (
         `The fight has ENDED! And the winner is: ${winner}!` +
         `\nPlease, refresh the page to start a new one.`
        );
      });

    } else {
      this.runFight();
    }
  }

  sendExp(EXP) {
    const url = `/users/${this.props.user.id}/addexp`;
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
    this.setState({ btnClick: status });
  }

  render () {  
    return (
      <div className="container-fluid">
        
        <FightTopHeader />
        
        <div className="row">
          <div className="col-md-3">
            {this.propertyUserBot('User', this.props.user.hp, demageU)}
            
            <SelectHitBlock handleChange={ this.handleChange.bind(this) }
              ref={instance => { this.child = instance; }} />   
          </div>

          <div className='col-md-6 arena-fights'>
            <i>{ LOGS.idle }</i>
            <img src={ this.state.currentHit } />
          </div>

          <div className="col-md-3">
            { this.propertyUserBot('Bot', this.props.bot.hp, this.state.demageB) }

            { HIT_TYPES[this.state.botHit.selectedAttackIndex] }

            <br />

            { BLOCK_TYPES[this.state.botHit.selectedBlockIndex] }

          </div>

        </div>

        <div className="row">
          <ButtonStart
            btnClick={this.state.btnClick}
            changeFightProperty={ this.changeFightProperty.bind(this)}
          />
          <div className='col-md-6 player-name'>
            {this.props.user.name}
              <p className='player-info'>
                Experience: 
                [{this.props.user.experience}]
                <br/>
                Email:
                [{this.props.user.email}]
              </p>
          </div>
        </div>
        
      </div>
    )
  }
}

